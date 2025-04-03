import { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  PlusCircle, 
  Image, 
  Upload, 
  Save, 
  Trash, 
  Settings, 
  Home,
  LayoutDashboard,
  FileImage,
  Users,
  Building,
  MailOpen,
  AlertCircle
} from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import { supabase } from "@/integrations/supabase/client";

const mockLeads = [
  {
    id: '1',
    name: 'Arun Sharma',
    email: 'arun.sharma@example.com',
    phone: '+91 9876543210',
    date: '2025-03-28',
    status: 'New',
    property_interest: '4BHK'
  },
  {
    id: '2',
    name: 'Priya Patel',
    email: 'priya.patel@example.com',
    phone: '+91 9876543211',
    date: '2025-03-27',
    status: 'Contacted',
    property_interest: '5BHK'
  },
  {
    id: '3',
    name: 'Rajiv Malhotra',
    email: 'rajiv.m@example.com',
    phone: '+91 9876543212',
    date: '2025-03-26',
    status: 'Interested',
    property_interest: 'Both'
  },
  {
    id: '4',
    name: 'Sneha Kumar',
    email: 'sneha.k@example.com',
    phone: '+91 9876543213',
    date: '2025-03-25',
    status: 'Visited',
    property_interest: '5BHK'
  },
  {
    id: '5',
    name: 'Vikram Singh',
    email: 'vikram.s@example.com',
    phone: '+91 9876543214',
    date: '2025-03-24',
    status: 'Closed',
    property_interest: '4BHK'
  }
];

const ImageUploader = () => {
  const { toast } = useToast();
  const [category, setCategory] = useState("exterior");
  const [subCategory, setSubCategory] = useState("north");
  const [images, setImages] = useState([]);
  const [selectedFile, setSelectedFile] = useState(null);
  const [imageName, setImageName] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isUploading, setIsUploading] = useState(false);

  const fetchImages = async () => {
    setIsLoading(true);
    try {
      const { data, error } = await supabase
        .from('images')
        .select('*')
        .order('created_at', { ascending: false });
      
      if (error) throw error;
      setImages(data || []);
    } catch (error) {
      console.error("Error fetching images:", error);
      toast({
        title: "Error fetching images",
        description: error.message,
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchImages();
  }, []);

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedFile(e.target.files[0]);
      setImageName(e.target.files[0].name.split('.')[0]);
    }
  };

  const handleUpload = async () => {
    if (!selectedFile || !imageName) {
      toast({
        title: "Error",
        description: "Please select a file and provide a name",
        variant: "destructive",
      });
      return;
    }

    setIsUploading(true);
    
    try {
      const fileExt = selectedFile.name.split('.').pop();
      const fileName = `${category}_${subCategory}_${Date.now()}.${fileExt}`;
      const filePath = `${fileName}`;
      
      const { data: storageData, error: storageError } = await supabase.storage
        .from('villa_images')
        .upload(filePath, selectedFile);
      
      if (storageError) throw storageError;
      
      const { data: publicUrlData } = supabase.storage
        .from('villa_images')
        .getPublicUrl(filePath);
      
      const publicUrl = publicUrlData.publicUrl;
      
      const { data, error } = await supabase
        .from('images')
        .insert({
          name: imageName,
          url: publicUrl,
          category: `${category}_${subCategory}`
        });
      
      if (error) throw error;
      
      toast({
        title: "Success",
        description: "Image uploaded successfully",
      });
      
      setSelectedFile(null);
      setImageName("");
      fetchImages();
    } catch (error) {
      console.error("Error uploading image:", error);
      toast({
        title: "Upload Error",
        description: error.message,
        variant: "destructive",
      });
    } finally {
      setIsUploading(false);
    }
  };

  const handleDelete = async (id, url) => {
    try {
      const urlParts = url.split('/');
      const filePath = urlParts[urlParts.length - 1];
      
      const { error: storageError } = await supabase.storage
        .from('villa_images')
        .remove([filePath]);
      
      if (storageError) throw storageError;
      
      const { error } = await supabase
        .from('images')
        .delete()
        .eq('id', id);
      
      if (error) throw error;
      
      toast({
        title: "Deleted",
        description: "Image removed successfully",
      });
      
      setImages(images.filter(img => img.id !== id));
    } catch (error) {
      console.error("Error deleting image:", error);
      toast({
        title: "Delete Error",
        description: error.message,
        variant: "destructive",
      });
    }
  };

  const getSubCategoryOptions = () => {
    switch(category) {
      case "exterior":
        return [
          { value: "north", label: "North View" },
          { value: "south", label: "South View" },
          { value: "east", label: "East View" },
          { value: "west", label: "West View" },
          { value: "aerial", label: "Aerial View" }
        ];
      case "interior":
        return [
          { value: "living", label: "Living Room" },
          { value: "kitchen", label: "Kitchen" },
          { value: "bedroom", label: "Bedroom" },
          { value: "bathroom", label: "Bathroom" },
          { value: "other", label: "Other Spaces" }
        ];
      case "floorplan":
        return [
          { value: "north_ground", label: "North Facing - Ground Floor" },
          { value: "north_first", label: "North Facing - First Floor" },
          { value: "north_second", label: "North Facing - Second Floor" },
          { value: "south_ground", label: "South Facing - Ground Floor" },
          { value: "south_first", label: "South Facing - First Floor" },
          { value: "south_second", label: "South Facing - Second Floor" },
          { value: "east_ground", label: "East Facing - Ground Floor" },
          { value: "east_first", label: "East Facing - First Floor" },
          { value: "east_second", label: "East Facing - Second Floor" },
          { value: "west_ground", label: "West Facing - Ground Floor" },
          { value: "west_first", label: "West Facing - First Floor" },
          { value: "west_second", label: "West Facing - Second Floor" }
        ];
      case "amenity":
        return [
          { value: "pool", label: "Swimming Pool" },
          { value: "gym", label: "Gymnasium" },
          { value: "garden", label: "Garden" },
          { value: "clubhouse", label: "Clubhouse" },
          { value: "other", label: "Other Amenities" }
        ];
      default:
        return [{ value: "default", label: "Default" }];
    }
  };

  const subCategoryOptions = getSubCategoryOptions();

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Upload className="h-5 w-5" />
            <span>Upload New Image</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">Image Name</label>
                <Input
                  value={imageName}
                  onChange={(e) => setImageName(e.target.value)}
                  placeholder="Enter image name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Category</label>
                <select
                  className="w-full rounded-md border border-input bg-background px-3 py-2"
                  value={category}
                  onChange={(e) => {
                    setCategory(e.target.value);
                    setSubCategory(getSubCategoryOptions()[0].value);
                  }}
                >
                  <option value="exterior">Exterior</option>
                  <option value="interior">Interior</option>
                  <option value="floorplan">Floor Plan</option>
                  <option value="amenity">Amenity</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Sub-Category</label>
                <select
                  className="w-full rounded-md border border-input bg-background px-3 py-2"
                  value={subCategory}
                  onChange={(e) => setSubCategory(e.target.value)}
                >
                  {subCategoryOptions.map(option => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="border-2 border-dashed rounded-md p-6 text-center">
              <div className="flex flex-col items-center">
                <Image className="h-8 w-8 text-gray-400 mb-2" />
                <p className="text-sm text-gray-600 mb-2">
                  {selectedFile ? selectedFile.name : "Drag and drop an image, or click to browse"}
                </p>
                <input
                  type="file"
                  id="image-upload"
                  accept="image/*"
                  className="hidden"
                  onChange={handleFileChange}
                />
                <label
                  htmlFor="image-upload"
                  className="bg-emerald-600 hover:bg-emerald-700 text-white rounded-md px-4 py-2 text-sm cursor-pointer"
                >
                  Browse Files
                </label>
              </div>
            </div>
            <Button 
              onClick={handleUpload} 
              className="bg-emerald-600 hover:bg-emerald-700"
              disabled={isUploading}
            >
              <PlusCircle className="mr-2 h-4 w-4" />
              {isUploading ? "Uploading..." : "Upload Image"}
            </Button>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <FileImage className="h-5 w-5" />
            <span>Manage Images</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          {isLoading ? (
            <div className="text-center py-4">Loading images...</div>
          ) : images.length === 0 ? (
            <div className="text-center py-4 flex flex-col items-center">
              <AlertCircle className="h-8 w-8 text-gray-400 mb-2" />
              <p>No images found. Upload some images to get started.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {images.map((image) => (
                <Card key={image.id} className="overflow-hidden">
                  <div className="aspect-square relative bg-gray-100">
                    <img 
                      src={image.url} 
                      alt={image.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardContent className="p-3">
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="font-medium text-sm truncate">{image.name}</p>
                        <p className="text-xs text-gray-500 capitalize">
                          {image.category?.replace(/_/g, ' ')}
                        </p>
                      </div>
                      <Button 
                        variant="destructive" 
                        size="icon" 
                        className="h-8 w-8"
                        onClick={() => handleDelete(image.id, image.url)}
                      >
                        <Trash className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

const LeadManager = () => {
  const { toast } = useToast();
  const [leads, setLeads] = useState([]);

  const handleStatusChange = (id, newStatus) => {
    setLeads(leads.map(lead => 
      lead.id === id ? { ...lead, status: newStatus } : lead
    ));
    
    toast({
      title: "Status Updated",
      description: "Lead status has been updated successfully",
      variant: "default",
    });
  };

  const handleDeleteLead = (id) => {
    setLeads(leads.filter(lead => lead.id !== id));
    
    toast({
      title: "Lead Deleted",
      description: "Lead has been removed successfully",
      variant: "default",
    });
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Users className="h-5 w-5" />
            <span>Customer Leads</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-3 px-4">Name</th>
                  <th className="text-left py-3 px-4">Contact</th>
                  <th className="text-left py-3 px-4">Date</th>
                  <th className="text-left py-3 px-4">Status</th>
                  <th className="text-left py-3 px-4">Actions</th>
                </tr>
              </thead>
              <tbody>
                {leads.map((lead) => (
                  <tr key={lead.id} className="border-b hover:bg-gray-50">
                    <td className="py-3 px-4">{lead.name}</td>
                    <td className="py-3 px-4">
                      <div>{lead.email}</div>
                      <div className="text-sm text-gray-500">{lead.phone}</div>
                    </td>
                    <td className="py-3 px-4">{lead.date}</td>
                    <td className="py-3 px-4">
                      <select
                        className="rounded-md border px-2 py-1 text-sm"
                        value={lead.status}
                        onChange={(e) => handleStatusChange(lead.id, e.target.value)}
                      >
                        <option value="New">New</option>
                        <option value="Contacted">Contacted</option>
                        <option value="Interested">Interested</option>
                        <option value="Visited">Visited</option>
                        <option value="Closed">Closed</option>
                      </select>
                    </td>
                    <td className="py-3 px-4">
                      <Button 
                        variant="destructive" 
                        size="sm"
                        onClick={() => handleDeleteLead(lead.id)}
                      >
                        <Trash className="h-4 w-4 mr-1" />
                        Delete
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

const SiteSettings = () => {
  const { toast } = useToast();
  const [settings, setSettings] = useState({
    siteName: "Fortune Hestia Villa",
    contactEmail: "info@fortunehestia.com",
    contactPhone: "+91 9876543210",
    address: "Sarjapur Road, Bangalore",
    priceRange: "₹5.3 Cr - ₹7.8 Cr",
    brochureLink: "/fortune-hestia-brochure.pdf"
  });

  const handleSave = () => {
    toast({
      title: "Settings Saved",
      description: "Website settings have been updated successfully",
      variant: "default",
    });
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Settings className="h-5 w-5" />
            <span>Website Settings</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">Site Name</label>
                <Input
                  value={settings.siteName}
                  onChange={(e) => setSettings({...settings, siteName: e.target.value})}
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Contact Email</label>
                <Input
                  value={settings.contactEmail}
                  onChange={(e) => setSettings({...settings, contactEmail: e.target.value})}
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Contact Phone</label>
                <Input
                  value={settings.contactPhone}
                  onChange={(e) => setSettings({...settings, contactPhone: e.target.value})}
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Property Address</label>
                <Input
                  value={settings.address}
                  onChange={(e) => setSettings({...settings, address: e.target.value})}
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Price Range</label>
                <Input
                  value={settings.priceRange}
                  onChange={(e) => setSettings({...settings, priceRange: e.target.value})}
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Brochure Link</label>
                <Input
                  value={settings.brochureLink}
                  onChange={(e) => setSettings({...settings, brochureLink: e.target.value})}
                />
              </div>
            </div>
            <Button onClick={handleSave} className="bg-emerald-600 hover:bg-emerald-700 mt-4">
              <Save className="mr-2 h-4 w-4" />
              Save Settings
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

const Admin = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="bg-emerald-700 text-white p-4">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Building className="h-6 w-6" />
            <h1 className="text-xl font-bold">Fortune Hestia Admin</h1>
          </div>
          <div className="flex items-center space-x-4">
            <a href="/" className="flex items-center text-white hover:text-emerald-200">
              <Home className="h-5 w-5 mr-1" />
              <span>View Website</span>
            </a>
          </div>
        </div>
      </div>
      
      <div className="container mx-auto py-8 px-4">
        <Tabs defaultValue="dashboard" className="space-y-6">
          <div className="bg-white p-4 rounded-lg shadow mb-6">
            <TabsList className="grid grid-cols-1 md:grid-cols-4 gap-2 w-full">
              <TabsTrigger value="dashboard" className="flex items-center space-x-2">
                <LayoutDashboard className="h-4 w-4" />
                <span>Dashboard</span>
              </TabsTrigger>
              <TabsTrigger value="images" className="flex items-center space-x-2">
                <FileImage className="h-4 w-4" />
                <span>Images</span>
              </TabsTrigger>
              <TabsTrigger value="leads" className="flex items-center space-x-2">
                <Users className="h-4 w-4" />
                <span>Leads</span>
              </TabsTrigger>
              <TabsTrigger value="settings" className="flex items-center space-x-2">
                <Settings className="h-4 w-4" />
                <span>Settings</span>
              </TabsTrigger>
            </TabsList>
          </div>
          
          <TabsContent value="dashboard" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-gray-500">Total Leads</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold">{mockLeads.length}</div>
                  <p className="text-xs text-green-500 mt-1">+12% from last month</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-gray-500">Site Visits</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold">18</div>
                  <p className="text-xs text-green-500 mt-1">+8% from last month</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-gray-500">Conversion Rate</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold">15.3%</div>
                  <p className="text-xs text-green-500 mt-1">+2.4% from last month</p>
                </CardContent>
              </Card>
            </div>
            
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <MailOpen className="h-5 w-5" />
                  <span>Recent Leads</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left py-3 px-4">Name</th>
                        <th className="text-left py-3 px-4">Email</th>
                        <th className="text-left py-3 px-4">Phone</th>
                        <th className="text-left py-3 px-4">Date</th>
                        <th className="text-left py-3 px-4">Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {mockLeads.slice(0, 5).map((lead) => (
                        <tr key={lead.id} className="border-b hover:bg-gray-50">
                          <td className="py-3 px-4">{lead.name}</td>
                          <td className="py-3 px-4">{lead.email}</td>
                          <td className="py-3 px-4">{lead.phone}</td>
                          <td className="py-3 px-4">{lead.date}</td>
                          <td className="py-3 px-4">
                            <span className={`px-2 py-1 rounded-full text-xs ${
                              lead.status === 'New' ? 'bg-blue-100 text-blue-800' :
                              lead.status === 'Contacted' ? 'bg-yellow-100 text-yellow-800' :
                              lead.status === 'Interested' ? 'bg-green-100 text-green-800' :
                              lead.status === 'Visited' ? 'bg-purple-100 text-purple-800' :
                              'bg-gray-100 text-gray-800'
                            }`}>
                              {lead.status}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="images">
            <ImageUploader />
          </TabsContent>
          
          <TabsContent value="leads">
            <LeadManager />
          </TabsContent>
          
          <TabsContent value="settings">
            <SiteSettings />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Admin;
