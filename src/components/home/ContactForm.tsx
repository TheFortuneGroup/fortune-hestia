
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';

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
  propertyInterest: z.enum(['4BHK', '5BHK', 'Both'], {
    required_error: 'Please select your property interest.',
  }),
  timeframe: z.enum(['Immediate', '1-3 Months', '3-6 Months', '6+ Months'], {
    required_error: 'Please select your timeframe.',
  }),
  consent: z.boolean().refine(val => val === true, {
    message: 'You must agree to the terms.',
  }),
});

type ContactFormProps = {
  variant?: 'inline' | 'dialog';
  onSuccess?: () => void;
};

const ContactForm = ({ variant = 'inline', onSuccess }: ContactFormProps) => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      propertyInterest: '4BHK',
      timeframe: 'Immediate',
      consent: false,
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    
    try {
      // Save lead to Supabase
      const { data, error } = await supabase
        .from('leads')
        .insert({
          name: values.name,
          email: values.email,
          phone: values.phone,
          property_interest: values.propertyInterest,
          timeframe: values.timeframe,
        });
        
      if (error) throw error;
      
      toast({
        title: "Inquiry Submitted",
        description: "Our team will contact you shortly!",
      });
      
      form.reset();
      
      if (onSuccess) {
        onSuccess();
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      toast({
        title: "Submission Error",
        description: "There was a problem submitting your inquiry. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
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

        <div className="grid grid-cols-2 gap-4">
          <FormField
            control={form.control}
            name="propertyInterest"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Property Interest</FormLabel>
                <select
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                  {...field}
                >
                  <option value="4BHK">4 BHK Villa</option>
                  <option value="5BHK">5 BHK Villa</option>
                  <option value="Both">Both Options</option>
                </select>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="timeframe"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Purchase Timeframe</FormLabel>
                <select
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                  {...field}
                >
                  <option value="Immediate">Immediate</option>
                  <option value="1-3 Months">1-3 Months</option>
                  <option value="3-6 Months">3-6 Months</option>
                  <option value="6+ Months">6+ Months</option>
                </select>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        
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
          {isSubmitting ? 'Submitting...' : 'Submit Inquiry'}
        </Button>
      </form>
    </Form>
  );
};

export default ContactForm;
