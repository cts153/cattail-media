import { useState } from "react";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { Instagram, Linkedin, Mail } from "lucide-react";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Invalid email address").max(255),
  service: z.string().trim().min(1, "Please select a service"),
  message: z.string().trim().min(10, "Message must be at least 10 characters").max(1000),
});

const About = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      contactSchema.parse(formData);
      
      // Form is valid, show success message
      toast.success("Message sent successfully! We'll get back to you soon.");
      setFormData({ name: "", email: "", service: "", message: "" });
    } catch (error) {
      if (error instanceof z.ZodError) {
        toast.error(error.errors[0].message);
      }
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* About Section */}
          <div className="max-w-3xl mx-auto mb-20 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-center">
              About Creative Studio
            </h1>
            <div className="prose prose-lg max-w-none text-muted-foreground">
              <p className="text-lg leading-relaxed mb-6">
                Hi, I'm [Your Name], and I've been helping small businesses in our community
                establish and grow their online presence for over [X] years. What started as a
                passion for photography evolved into a full-service creative studio offering
                web design, branding, and social media management.
              </p>
              <p className="text-lg leading-relaxed mb-6">
                I specialize in Squarespace websites because they give you the perfect balance
                of professional design and easy management. You shouldn't need a developer
                every time you want to update your site—and with Squarespace, you won't.
              </p>
              <p className="text-lg leading-relaxed">
                Every business has a unique story, and I'm here to help you tell yours through
                compelling visuals, cohesive branding, and a website that works as hard as you do.
              </p>
            </div>

            {/* Social Links */}
            <div className="flex justify-center gap-6 mt-8">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="mailto:hello@creativestudio.com"
                className="p-3 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="max-w-2xl mx-auto animate-fade-in">
            <div className="bg-card border border-border rounded-2xl p-8 shadow-lg">
              <h2 className="text-3xl font-bold text-foreground mb-2 text-center">
                Let's Work Together
              </h2>
              <p className="text-muted-foreground text-center mb-8">
                Tell me about your project and I'll get back to you within 24 hours
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name" className="text-foreground">
                    Your Name
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    className="mt-2 border-input"
                    placeholder="John Doe"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="email" className="text-foreground">
                    Email Address
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="mt-2 border-input"
                    placeholder="john@example.com"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="service" className="text-foreground">
                    Service Interested In
                  </Label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="mt-2 w-full h-10 px-3 rounded-md border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                    required
                  >
                    <option value="">Select a service</option>
                    <option value="web-design">Web Design</option>
                    <option value="social-media">Social Media Management</option>
                    <option value="photography">Photography</option>
                    <option value="branding">Branding</option>
                    <option value="multiple">Multiple Services</option>
                  </select>
                </div>

                <div>
                  <Label htmlFor="message" className="text-foreground">
                    Project Details
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="mt-2 min-h-32 border-input"
                    placeholder="Tell me about your business and what you're looking for..."
                    required
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                >
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default About;
