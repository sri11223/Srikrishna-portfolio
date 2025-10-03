import { Mail, Phone, MapPin, Linkedin, Github, Send, Sparkles, CheckCircle, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import emailjs from '@emailjs/browser';

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Using Web3Forms for reliable form submission
      const formData2 = new FormData();
      formData2.append('access_key', 'f3b6a408-5805-4653-abb2-f7a75aff94cc');
      formData2.append('name', formData.name);
      formData2.append('email', formData.email);
      formData2.append('subject', formData.subject);
      formData2.append('message', formData.message);

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData2
      });

      const result = await response.json();

      if (result.success) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Error sending message:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "srikrishnanutalapati@gmail.com",
      link: "mailto:srikrishnanutalapati@gmail.com",
      color: "text-primary"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 9491115855",
      link: "tel:+919491115855",
      color: "text-secondary"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Guntur, Andhra Pradesh, India",
      link: null,
      color: "text-accent"
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/sri11223",
      link: "https://github.com/sri11223",
      color: "text-primary"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/srikrishna-nutalapati",
      link: "https://linkedin.com/in/srikrishna-nutalapati",
      color: "text-secondary"
    }
  ];

  return (
    <section id="contact" className="py-32 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-mesh opacity-20" />
      
      <div className="container max-w-6xl mx-auto relative z-10">
        <div className="mb-20 text-center animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border-2 border-primary rounded-full mb-6">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-bold text-primary">LET'S CONNECT</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-black mb-6">
            Get In <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">Touch</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Open to <span className="text-secondary font-bold">AI/ML internships</span> and <span className="text-primary font-bold">full-time software engineering roles</span>. 
            Let's build something incredible together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-6 animate-slide-in-left">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <div 
                  key={index}
                  className="group flex items-center gap-4 p-6 bg-card rounded-2xl border-2 border-border hover:border-primary transition-all hover:scale-105"
                >
                  <div className="p-4 bg-primary/10 rounded-xl">
                    <Icon className={`h-6 w-6 ${info.color}`} />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-muted-foreground font-semibold mb-1">{info.label}</p>
                    {info.link ? (
                      <a 
                        href={info.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-bold hover:text-primary transition-colors"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="font-bold">{info.value}</p>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Contact Form */}
          <div className="animate-slide-in-right">
            <div className="bg-gradient-to-br from-card to-card/50 p-8 rounded-2xl border-2 border-border">
              <h3 className="text-2xl font-black mb-6">Send a Message</h3>
              
              {/* Success/Error Messages */}
              {submitStatus === 'success' && (
                <div className="mb-6 p-4 bg-green-500/10 border border-green-500/30 rounded-lg flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <p className="text-green-500 font-semibold">Message sent successfully! I'll get back to you soon.</p>
                </div>
              )}
              
              {submitStatus === 'error' && (
                <div className="mb-6 p-4 bg-red-500/10 border border-red-500/30 rounded-lg flex items-center gap-3">
                  <AlertCircle className="w-5 h-5 text-red-500" />
                  <p className="text-red-500 font-semibold">Failed to send message. Please try emailing me directly.</p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <Input 
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Your Name" 
                  required
                  className="bg-background border-2 border-border focus:border-primary h-12 font-semibold"
                />
                <Input 
                  name="email"
                  type="email" 
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Your Email" 
                  required
                  className="bg-background border-2 border-border focus:border-primary h-12 font-semibold"
                />
                <Input 
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  placeholder="Subject" 
                  required
                  className="bg-background border-2 border-border focus:border-primary h-12 font-semibold"
                />
                <Textarea 
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Your Message" 
                  rows={6}
                  required
                  className="bg-background border-2 border-border focus:border-primary resize-none font-semibold"
                />
                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold h-12 text-lg shadow-[4px_4px_0px_0px_hsl(var(--secondary))] hover:shadow-[2px_2px_0px_0px_hsl(var(--secondary))] hover:translate-x-[2px] hover:translate-y-[2px] transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <Sparkles className="mr-2 h-5 w-5 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="mr-2 h-5 w-5" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-20 pt-8 border-t-2 border-border text-center animate-fade-in">
          <p className="text-muted-foreground font-semibold mb-2">
            © 2025 Srikrishna Nutalapati • Built with React, TypeScript & Tailwind CSS
          </p>
          <p className="text-sm font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Turning Ideas into Production-Ready Solutions
          </p>
        </div>
      </div>
    </section>
  );
};
