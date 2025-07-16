
import { useState } from 'react';
import { Calendar, Send } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";

const services = [
  "Data Analysis",
  "Web Development", 
  "Automation",
  "Graphic Designing",
  "Chatbot Development"
];

const ContactForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    service: '',
    meetingDate: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    toast({
      title: "Message Sent!",
      description: "We'll get back to you as soon as possible.",
    });
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      service: '',
      meetingDate: '',
      message: ''
    });
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl mx-auto glass-morphism rounded-2xl p-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="fullName" className="block text-techGray mb-2">Full Name</label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            className="w-full bg-black/40 border border-techPurple/30 rounded-md px-4 py-3 text-white focus:outline-none focus:border-techPurple transition-colors"
            required
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-techGray mb-2">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full bg-black/40 border border-techPurple/30 rounded-md px-4 py-3 text-white focus:outline-none focus:border-techPurple transition-colors"
            required
          />
        </div>

        <div>
          <label htmlFor="phone" className="block text-techGray mb-2">Phone (Optional)</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full bg-black/40 border border-techPurple/30 rounded-md px-4 py-3 text-white focus:outline-none focus:border-techPurple transition-colors"
          />
        </div>

        <div>
          <label htmlFor="service" className="block text-techGray mb-2">Service Interest</label>
          <select
            id="service"
            name="service"
            value={formData.service}
            onChange={handleChange}
            className="w-full bg-black/40 border border-techPurple/30 rounded-md px-4 py-3 text-white focus:outline-none focus:border-techPurple transition-colors"
            required
          >
            <option value="">Select a service</option>
            {services.map((service) => (
              <option key={service} value={service}>
                {service}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="meetingDate" className="block text-techGray mb-2">Preferred Meeting Date</label>
          <div className="relative">
            <input
              type="date"
              id="meetingDate"
              name="meetingDate"
              value={formData.meetingDate}
              onChange={handleChange}
              className="w-full bg-black/40 border border-techPurple/30 rounded-md px-4 py-3 text-white focus:outline-none focus:border-techPurple transition-colors"
              required
            />
            <Calendar className="absolute right-3 top-1/2 transform -translate-y-1/2 text-techPurple/70" size={20} />
          </div>
        </div>

        <div className="md:col-span-2">
          <label htmlFor="message" className="block text-techGray mb-2">Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={4}
            className="w-full bg-black/40 border border-techPurple/30 rounded-md px-4 py-3 text-white focus:outline-none focus:border-techPurple transition-colors"
            placeholder="Tell us about your project..."
            required
          />
        </div>
      </div>

      <Button type="submit" className="w-full mt-6 bg-techPurple hover:bg-techDarkPurple text-white font-medium">
        Send Message <Send size={18} className="ml-2" />
      </Button>
    </form>
  );
};

export default ContactForm;
