
import { useState } from "react";
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
  Check, 
  Settings, 
  Home,
  LayoutDashboard,
  FileImage,
  Users,
  Building,
  MailOpen 
} from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

// Mock data for demo purposes
const mockImages = [
  { id: 1, name: "Villa Exterior", category: "exterior", url: "/lovable-uploads/ebf40fbe-d160-45c8-b2b7-1bfaba9366bc.png" },
  { id: 2, name: "Villa Interior", category: "interior", url: "/lovable-uploads/7218ca4e-0a9f-4bfd-be9c-b21cce641145.png" },
  { id: 3, name: "Floor Plan", category: "floorplan", url: "/lovable-uploads/47ff2bfb-aac2-4c57-8739-3348f2edcc90.png" },
  { id: 4, name: "Aerial View", category: "exterior", url: "/lovable-uploads/76c37ef2-49ee-49f7-a6b5-07a19f9ba26b.png" },
];

const mockLeads = [
  { id: 1, name: "John Doe", email: "john@example.com", phone: "+91 9876543210", date: "2023-08-15", status: "New" },
  { id: 2, name: "Jane Smith", email: "jane@example.com", phone: "+91 9876543211", date: "2023-08-14", status: "Contacted" },
  { id: 3, name: "David Kumar", email: "david@example.com", phone: "+91 9876543212", date: "2023-08-13", status: "Interested" },
  { id: 4, name: "Priya Sharma", email: "priya@example.com", phone: "+91 9876543213", date: "2023-08-12", status: "Visited" },
];

// Component for uploading images
const ImageUploader = () => {
  const { toast } = useToast();
  const [category, setCategory] = useState("exterior");
  const [images, setImages] = useState(mockImages);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [imageName, setImageName] = useState("");

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedFile(e.target.files[0]);
      setImageName(e.target.files[0].name.split('.')[0]);
    }
  };

  const handleUpload = () => {
    if (!selectedFile || !imageName) {
      toast({
        title: "Error",
        description: "Please select a file and provide a name",
        variant: "destructive",
      });
      return;
    }

    // In a real app, we would upload the file to a server
    // For demo purposes, we'll just add it to our local state
    const newId = Math.max(...images.map(img => img.id)) + 1;
    const newImage = {
      id: newId,
      name: imageName,
      category: category,
      // Create a temporary URL for the selected file
      url: URL.createObjectURL(selectedFile)
    };

    setImages([...images, newImage]);
    setSelectedFile(null);
    setImageName("");

    toast({
      title: "Success",
      description: "Image uploaded successfully",
      variant: "default",
    });
  };

  const handleDelete = (id: number) => {
    setImages(images.filter(img => img.id !== id));
    toast({
      title: "Deleted",
      description: "Image removed successfully",
      variant: "default",
    });
  };

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
              <div className="col-span-2">
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
                  onChange={(e) => setCategory(e.target.value)}
                >
                  <option value="exterior">Exterior</option>
                  <option value="interior">Interior</option>
                  <option value="floorplan">Floor Plan</option>
                  <option value="amenity">Amenity</option>
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
            <Button onClick={handleUpload} className="bg-emerald-600 hover:bg-emerald-700">
              <PlusCircle className="mr-2 h-4 w-4" />
              Upload Image
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
                      <p className="text-xs text-gray-500 capitalize">{image.category}</p>
                    </div>
                    <Button 
                      variant="destructive" 
                      size="icon" 
                      className="h-8 w-8"
                      onClick={() => handleDelete(image.id)}
                    >
                      <Trash className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

// Component for managing leads
const LeadManager = () => {
  const { toast } = useToast();
  const [leads, setLeads] = useState(mockLeads);

  const handleStatusChange = (id: number, newStatus: string) => {
    setLeads(leads.map(lead => 
      lead.id === id ? { ...lead, status: newStatus } : lead
    ));
    
    toast({
      title: "Status Updated",
      description: "Lead status has been updated successfully",
      variant: "default",
    });
  };

  const handleDeleteLead = (id: number) => {
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

// Component for site settings
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
    // In a real app, we would save to a database
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

// Main Admin component
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
