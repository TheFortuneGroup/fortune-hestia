
import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import { useToast } from '@/components/ui/use-toast';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { X } from 'lucide-react';

const formSchema = z.object({
  name: z.string().min(2, {
    message: 'Name must be at least 2 characters.',
  }),
  email: z.string().email({
    message: 'Please enter a valid email address.',
  }),
  phone: z.string().min(10, {
    message: 'Please enter a valid phone number.',
  }),
  interest: z.enum(['General Inquiry', 'Schedule Visit', 'Price Details'], {
    required_error: 'Please select your interest.',
  }),
  consent: z.boolean().refine(val => val === true, {
    message: 'You must agree to the terms.',
  }),
});

const PopupForm = () => {
  const { toast } = useToast();
  const [showPopup, setShowPopup] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      interest: 'General Inquiry',
      consent: false,
    },
  });

  // Show popup after 30 seconds on the page
  useEffect(() => {
    const hasShownPopup = sessionStorage.getItem('hasShownPopup');
    
    if (!hasShownPopup) {
      const timer = setTimeout(() => {
        setShowPopup(true);
        sessionStorage.setItem('hasShownPopup', 'true');
      }, 30000);
      
      return () => clearTimeout(timer);
    }
  }, []);

  function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      console.log(values);
      setIsSubmitting(false);
      setShowPopup(false);
      
      toast({
        title: "Thank You!",
        description: "Our team will contact you shortly with more information.",
      });
      
      form.reset();
    }, 1500);
  }

  return (
    <Dialog open={showPopup} onOpenChange={setShowPopup}>
      <DialogContent className="sm:max-w-[450px] p-0 overflow-hidden bg-white rounded-lg">
        <button 
          onClick={() => setShowPopup(false)} 
          className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 z-10"
        >
          <X className="h-4 w-4" />
          <span className="sr-only">Close</span>
        </button>
        
        <div className="grid grid-cols-1 md:grid-cols-4">
          <div className="md:col-span-4 bg-emerald-700 text-white p-6">
            <DialogTitle className="text-xl font-serif font-semibold mb-2">
              Get Exclusive Pricing & Offers!
            </DialogTitle>
            <p className="text-emerald-100 text-sm">
              Register now to receive special pre-launch benefits on Fortune Hestia Villa
            </p>
          </div>
          
          <div className="p-6 md:col-span-4">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Full Name</FormLabel>
                      <FormControl>
                        <Input placeholder="John Doe" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input placeholder="john@example.com" type="email" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Phone</FormLabel>
                        <FormControl>
                          <Input placeholder="+91 9876543210" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                
                <FormField
                  control={form.control}
                  name="interest"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>I'm interested in</FormLabel>
                      <select
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                        {...field}
                      >
                        <option value="General Inquiry">General Information</option>
                        <option value="Schedule Visit">Scheduling a Site Visit</option>
                        <option value="Price Details">Detailed Pricing & Floor Plans</option>
                      </select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="consent"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-start space-x-2 space-y-0">
                      <FormControl>
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                      <div className="space-y-1 leading-none">
                        <FormLabel className="text-xs text-gray-500">
                          I agree to receive communications about Fortune Hestia Villa.
                        </FormLabel>
                        <FormMessage />
                      </div>
                    </FormItem>
                  )}
                />
                
                <Button 
                  type="submit" 
                  className="w-full bg-emerald-600 hover:bg-emerald-700 text-white"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Submitting...' : 'Get Exclusive Offers'}
                </Button>
                <p className="text-center text-xs text-gray-500 mt-2">
                  Limited-time pre-launch benefits available now!
                </p>
              </form>
            </Form>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default PopupForm;
