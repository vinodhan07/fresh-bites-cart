import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement contact form submission
    console.log("Contact form submitted");
  };

  const contactInfo = [
    {
      icon: <MapPin className="h-5 w-5" />,
      title: "Visit Our Store",
      details: "123 Fresh Street, Fruit Valley, FV 12345",
    },
    {
      icon: <Phone className="h-5 w-5" />,
      title: "Call Us",
      details: "+1 (555) 123-FRUIT",
    },
    {
      icon: <Mail className="h-5 w-5" />,
      title: "Email Us",
      details: "hello@freshfruit.com",
    },
    {
      icon: <Clock className="h-5 w-5" />,
      title: "Business Hours",
      details: "Mon-Fri: 8AM-6PM, Sat-Sun: 9AM-5PM",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-hero text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Get in Touch
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto opacity-90">
            Have questions about our fruits or need help with your order? 
            We're here to help!
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">
                Send us a Message
              </h2>
              <Card className="bg-gradient-card border-0 shadow-card-custom">
                <CardContent className="p-8">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="first-name">First Name</Label>
                        <Input id="first-name" placeholder="John" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="last-name">Last Name</Label>
                        <Input id="last-name" placeholder="Doe" required />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input 
                        id="email" 
                        type="email" 
                        placeholder="john@example.com" 
                        required 
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone (Optional)</Label>
                      <Input 
                        id="phone" 
                        type="tel" 
                        placeholder="+1 (555) 123-4567" 
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject</Label>
                      <Input 
                        id="subject" 
                        placeholder="How can we help you?" 
                        required 
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea 
                        id="message" 
                        placeholder="Tell us more about your inquiry..."
                        rows={5}
                        required 
                      />
                    </div>

                    <Button type="submit" variant="hero" className="w-full">
                      <Send className="h-4 w-4 mr-2" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">
                Contact Information
              </h2>
              
              <div className="space-y-6 mb-8">
                {contactInfo.map((info, index) => (
                  <Card 
                    key={index} 
                    className="bg-gradient-card border-0 shadow-card-custom hover:shadow-hover-custom transition-all duration-300 group animate-scale-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="text-fruit-green mt-1 group-hover:scale-110 transition-transform duration-300">
                          {info.icon}
                        </div>
                        <div>
                          <h3 className="font-semibold text-foreground mb-1">
                            {info.title}
                          </h3>
                          <p className="text-muted-foreground">
                            {info.details}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Quick Contact Options */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  Quick Contact
                </h3>
                
                <Button variant="outline" className="w-full justify-start" asChild>
                  <a href="tel:+15551234567">
                    <Phone className="h-4 w-4 mr-2" />
                    Call Us Now
                  </a>
                </Button>
                
                <Button variant="outline" className="w-full justify-start" asChild>
                  <a href="mailto:hello@freshfruit.com">
                    <Mail className="h-4 w-4 mr-2" />
                    Email Support
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Find Our Store
            </h2>
            <p className="text-lg text-muted-foreground">
              Visit us at our flagship location for the freshest selection
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="bg-gradient-card border-0 shadow-card-custom overflow-hidden">
              <CardContent className="p-0">
                {/* Placeholder for Google Map */}
                <div className="h-96 bg-muted flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="h-12 w-12 text-fruit-green mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      Interactive Map
                    </h3>
                    <p className="text-muted-foreground">
                      Google Maps integration would be embedded here
                    </p>
                    <p className="text-sm text-muted-foreground mt-2">
                      123 Fresh Street, Fruit Valley, FV 12345
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-muted-foreground">
              Quick answers to common questions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="bg-gradient-card border-0 shadow-card-custom">
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg text-foreground mb-3">
                  What are your delivery hours?
                </h3>
                <p className="text-muted-foreground">
                  We deliver Monday through Friday from 8AM to 6PM, and weekends from 9AM to 5PM. 
                  Same-day delivery is available for orders placed before 2PM.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card border-0 shadow-card-custom">
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg text-foreground mb-3">
                  Are all your fruits organic?
                </h3>
                <p className="text-muted-foreground">
                  Yes! All our fruits are certified organic and pesticide-free. We work exclusively 
                  with farms that meet strict organic standards and sustainable farming practices.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card border-0 shadow-card-custom">
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg text-foreground mb-3">
                  What's your return policy?
                </h3>
                <p className="text-muted-foreground">
                  We offer a 24-hour freshness guarantee. If you're not satisfied with the quality 
                  of your fruits, contact us within 24 hours for a full refund or replacement.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card border-0 shadow-card-custom">
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg text-foreground mb-3">
                  Do you offer bulk orders?
                </h3>
                <p className="text-muted-foreground">
                  Absolutely! We offer special pricing for bulk orders and catering. Contact us 
                  directly to discuss your needs and get a custom quote.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;