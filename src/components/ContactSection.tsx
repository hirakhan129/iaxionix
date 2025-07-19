import { Mail, Phone, MapPin, Calendar, Video } from 'lucide-react';
import ContactForm from './ContactForm';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { useToast } from '@/hooks/use-toast';
import { cn } from '@/lib/utils';

const timeSlots = ["09:00", "10:00", "11:00", "13:00", "14:00", "15:00", "16:00"];

const bookingSchema = z.object({
  meetingDate: z.string().min(1, { message: "Please select a meeting date" }),
  timeSlot: z.string().min(1, { message: "Please select a time slot" }),
  meetingType: z.enum(['video', 'phone'], { required_error: "Please select a meeting type" }),
});

type BookingData = z.infer<typeof bookingSchema>;

const ContactSection = () => {
  const { toast } = useToast();
  const form = useForm<BookingData>({
    resolver: zodResolver(bookingSchema),
    defaultValues: {
      meetingDate: '',
      timeSlot: '',
      meetingType: 'video'
    }
  });

  const onSubmitBooking = (data: BookingData) => {
    console.log('Meeting scheduled:', data);
    toast({
      title: "Meeting Scheduled Successfully!",
      description: `Your ${data.meetingType} meeting is scheduled for ${data.meetingDate} at ${data.timeSlot}. We'll send you a confirmation email shortly.`,
    });
    form.reset();
  };

  return (
    <section id="contact" className="section-spacing bg-black">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Let's Build Your AI Future Together!</h2>
          <p className="text-techGray max-w-2xl mx-auto">
            Have a question, want to book a meeting, or need assistance? Our team is here to help. 
            Reach out today, and let's explore how we can bring AI to your business.
          </p>
        </div>

        <ContactForm />

        {/* Book a Meeting Section */}
        <div className="mt-20 mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-4">Book a Meeting with Us</h2>
          <p className="text-techGray text-center max-w-2xl mx-auto mb-12">
            Schedule a time that works for you, and let's discuss how AI can transform your business.
          </p>
          
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmitBooking)}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                {/* Left Card - Select Date & Time */}
                <div className="glass-morphism rounded-2xl p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <Calendar className="text-techPurple" size={24} />
                    <h3 className="text-2xl font-bold text-white">Select Date & Time</h3>
                  </div>
                  
                  <FormField
                    control={form.control}
                    name="meetingDate"
                    render={({ field }) => (
                      <FormItem className="mb-6">
                        <FormLabel className="text-techGray">Preferred Date</FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            type="date"
                            className="bg-black/40 border border-techPurple/30 text-white focus:border-techPurple"
                            min={new Date().toISOString().split('T')[0]}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="timeSlot"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-techGray">Available Time Slots</FormLabel>
                        <div className="grid grid-cols-3 gap-2 mt-2">
                          {timeSlots.map((time) => (
                            <button
                              key={time}
                              type="button"
                              className={cn(
                                "py-2 px-4 rounded-md border border-techPurple/30 transition-colors",
                                field.value === time
                                  ? "bg-techPurple text-white font-medium"
                                  : "bg-black/40 text-white hover:border-techPurple"
                              )}
                              onClick={() => field.onChange(time)}
                            >
                              {time}
                            </button>
                          ))}
                        </div>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                {/* Right Card - Meeting Details */}
                <div className="glass-morphism rounded-2xl p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <Phone className="text-techPurple" size={24} />
                    <h3 className="text-2xl font-bold text-white">Meeting Details</h3>
                  </div>

                  <FormField
                    control={form.control}
                    name="meetingType"
                    render={({ field }) => (
                      <FormItem className="mb-6">
                        <FormLabel className="text-techGray">Meeting Type</FormLabel>
                        <div className="space-y-4 mt-2">
                          <div 
                            className={cn(
                              "p-4 rounded-md border transition-colors cursor-pointer flex items-start gap-4",
                              field.value === 'video' 
                                ? "border-techPurple bg-techPurple/10" 
                                : "border-techPurple/30 bg-black/40 hover:border-techPurple/50"
                            )}
                            onClick={() => field.onChange('video')}
                          >
                            <Video size={24} className={field.value === 'video' ? "text-techPurple" : "text-techGray"} />
                            <div>
                              <h4 className={cn("font-medium", field.value === 'video' ? "text-techPurple" : "text-white")}>Video Call</h4>
                              <p className="text-techGray text-sm">Meet via Google Meet or Zoom</p>
                            </div>
                          </div>

                          <div 
                            className={cn(
                              "p-4 rounded-md border transition-colors cursor-pointer flex items-start gap-4",
                              field.value === 'phone' 
                                ? "border-techPurple bg-techPurple/10" 
                                : "border-techPurple/30 bg-black/40 hover:border-techPurple/50"
                            )}
                            onClick={() => field.onChange('phone')}
                          >
                            <Phone size={24} className={field.value === 'phone' ? "text-techPurple" : "text-techGray"} />
                            <div>
                              <h4 className={cn("font-medium", field.value === 'phone' ? "text-techPurple" : "text-white")}>Phone Call</h4>
                              <p className="text-techGray text-sm">Traditional phone consultation</p>
                            </div>
                          </div>
                        </div>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button 
                    type="submit"
                    disabled={form.formState.isSubmitting}
                    className="w-full bg-gradient-to-r from-techPurple to-techDarkPurple hover:opacity-90 text-white font-medium disabled:opacity-50"
                  >
                    {form.formState.isSubmitting ? "Scheduling..." : "Schedule Meeting"}
                  </Button>
                </div>
              </div>
            </form>
          </Form>
        </div>

        <div className="mt-20">
          <h3 className="text-3xl font-bold text-white text-center mb-8">Prefer to Reach Out Directly?</h3>
          <p className="text-techGray text-center mb-12">Connect with us through any of these channels</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="glass-morphism rounded-2xl p-6 flex flex-col items-center text-center">
              <Mail className="text-techPurple mb-4" size={32} />
              <h4 className="text-white text-lg font-medium mb-2">Email</h4>
              <p className="text-techGray">iaxionix52@gmail.com</p>
            </div>
            
            <div className="glass-morphism rounded-2xl p-6 flex flex-col items-center text-center">
              <Phone className="text-techPurple mb-4" size={32} />
              <h4 className="text-white text-lg font-medium mb-2">Phone</h4>
              <p className="text-techGray">+1 (555) 123-4567</p>
            </div>
            
            <div className="glass-morphism rounded-2xl p-6 flex flex-col items-center text-center">
              <MapPin className="text-techPurple mb-4" size={32} />
              <h4 className="text-white text-lg font-medium mb-2">Address</h4>
              <p className="text-techGray">123 Tech Street, AI Valley, CA 94025</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;