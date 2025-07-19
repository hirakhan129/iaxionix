import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Calendar, Send } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";

const services = [
  "Data Analysis",
  "Web Development", 
  "Automation",
  "Graphic Designing",
  "Chatbot Development"
];

const formSchema = z.object({
  fullName: z.string().min(2, { message: "Full name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  phone: z.string().optional(),
  service: z.string().min(1, { message: "Please select a service" }),
  meetingDate: z.string().min(1, { message: "Please select a preferred meeting date" }),
  message: z.string().min(10, { message: "Message must be at least 10 characters" }),
});

type FormData = z.infer<typeof formSchema>;

const ContactForm = () => {
  const { toast } = useToast();
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: '',
      email: '',
      phone: '',
      service: '',
      meetingDate: '',
      message: ''
    }
  });

  const onSubmit = (data: FormData) => {
    console.log('Form submitted:', data);
    toast({
      title: "Message Sent Successfully!",
      description: "Thank you for your inquiry. We'll get back to you within 24 hours.",
    });
    form.reset();
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="max-w-2xl mx-auto glass-morphism rounded-2xl p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name="fullName"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-techGray">Full Name</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    className="bg-black/40 border border-techPurple/30 text-white focus:border-techPurple"
                    placeholder="Enter your full name"
                  />
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
                <FormLabel className="text-techGray">Email</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    type="email"
                    className="bg-black/40 border border-techPurple/30 text-white focus:border-techPurple"
                    placeholder="Enter your email"
                  />
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
                <FormLabel className="text-techGray">Phone (Optional)</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    type="tel"
                    className="bg-black/40 border border-techPurple/30 text-white focus:border-techPurple"
                    placeholder="Enter your phone number"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="service"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-techGray">Service Interest</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger className="bg-black/40 border border-techPurple/30 text-white focus:border-techPurple">
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent className="bg-black border border-techPurple/30">
                    {services.map((service) => (
                      <SelectItem key={service} value={service} className="text-white hover:bg-techPurple/20">
                        {service}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="meetingDate"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-techGray">Preferred Meeting Date</FormLabel>
                <FormControl>
                  <div className="relative">
                    <Input
                      {...field}
                      type="date"
                      className="bg-black/40 border border-techPurple/30 text-white focus:border-techPurple"
                      min={new Date().toISOString().split('T')[0]}
                    />
                    <Calendar className="absolute right-3 top-1/2 transform -translate-y-1/2 text-techPurple/70" size={20} />
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem className="md:col-span-2">
                <FormLabel className="text-techGray">Message</FormLabel>
                <FormControl>
                  <Textarea
                    {...field}
                    rows={4}
                    className="bg-black/40 border border-techPurple/30 text-white focus:border-techPurple resize-none"
                    placeholder="Tell us about your project requirements..."
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <Button 
          type="submit" 
          disabled={form.formState.isSubmitting}
          className="w-full mt-6 bg-techPurple hover:bg-techDarkPurple text-white font-medium disabled:opacity-50"
        >
          {form.formState.isSubmitting ? "Sending..." : "Send Message"} 
          <Send size={18} className="ml-2" />
        </Button>
      </form>
    </Form>
  );
};

export default ContactForm;