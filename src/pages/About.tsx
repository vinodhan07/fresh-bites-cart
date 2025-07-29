import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Leaf, Truck, Award, Users, Heart, Target } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: <Leaf className="h-6 w-6" />,
      title: "100% Organic",
      description: "We partner with certified organic farms that use sustainable, pesticide-free growing methods.",
    },
    {
      icon: <Truck className="h-6 w-6" />,
      title: "Farm Fresh",
      description: "Direct sourcing from local farms ensures maximum freshness and supports our community.",
    },
    {
      icon: <Award className="h-6 w-6" />,
      title: "Quality Guaranteed",
      description: "Every fruit is hand-selected and quality-tested to meet our premium standards.",
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Community First",
      description: "Supporting local farmers and providing healthy food access to our communities.",
    },
  ];

  const team = [
    {
      name: "Sarah Johnson",
      role: "Founder & CEO",
      image: "👩‍💼",
      bio: "Former nutritionist passionate about making healthy eating accessible to everyone.",
    },
    {
      name: "Mike Chen",
      role: "Head of Operations",
      image: "👨‍💼",
      bio: "20+ years in supply chain management, ensuring smooth farm-to-door delivery.",
    },
    {
      name: "Emma Rodriguez",
      role: "Quality Manager",
      image: "👩‍🔬",
      bio: "Food science expert dedicated to maintaining the highest quality standards.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-hero text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            About FreshFruit
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto opacity-90">
            We're on a mission to bring the freshest, highest-quality organic fruits 
            directly from local farms to your table.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <Badge className="mb-4 bg-fruit-green text-white">Our Story</Badge>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                  Growing Fresh Since 2020
                </h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    FreshFruit was born from a simple belief: everyone deserves access to fresh, 
                    nutritious fruits that taste amazing and support their health goals.
                  </p>
                  <p>
                    Founded by nutritionist Sarah Johnson, we started as a small local delivery 
                    service in our hometown. Today, we work with over 50 certified organic farms 
                    across the region, delivering premium fruits to thousands of happy customers.
                  </p>
                  <p>
                    Our commitment goes beyond just selling fruit. We're building a sustainable 
                    food system that supports local farmers, protects the environment, and makes 
                    healthy eating accessible to everyone.
                  </p>
                </div>
              </div>
              
              <div className="text-center">
                <div className="text-8xl mb-6">🌱</div>
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-3xl font-bold text-primary">50+</div>
                    <div className="text-sm text-muted-foreground">Partner Farms</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-primary">10K+</div>
                    <div className="text-sm text-muted-foreground">Happy Customers</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-primary">500+</div>
                    <div className="text-sm text-muted-foreground">Products</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-primary">100%</div>
                    <div className="text-sm text-muted-foreground">Organic</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Values
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Everything we do is guided by our core values and commitment to excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card 
                key={index} 
                className="text-center bg-gradient-card border-0 shadow-card-custom hover:shadow-hover-custom transition-all duration-300 group animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="text-fruit-green mb-4 flex justify-center group-hover:scale-110 transition-transform duration-300">
                    {value.icon}
                  </div>
                  <h3 className="font-semibold text-lg text-foreground mb-3">
                    {value.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Card className="bg-gradient-card border-0 shadow-card-custom">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <Target className="h-8 w-8 text-fruit-green mr-3" />
                  <h3 className="text-2xl font-bold text-foreground">Our Mission</h3>
                </div>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  To revolutionize how people access fresh, organic fruits by creating 
                  a direct connection between sustainable farms and health-conscious consumers, 
                  making nutrition convenient, affordable, and delicious.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card border-0 shadow-card-custom">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <Heart className="h-8 w-8 text-fruit-red mr-3" />
                  <h3 className="text-2xl font-bold text-foreground">Our Vision</h3>
                </div>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  A world where everyone has easy access to fresh, organic produce that 
                  nourishes their body, supports local communities, and protects our planet 
                  for future generations.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Meet Our Team
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The passionate people behind FreshFruit's mission to bring you the best fruits.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {team.map((member, index) => (
              <Card 
                key={index} 
                className="text-center bg-gradient-card border-0 shadow-card-custom hover:shadow-hover-custom transition-all duration-300 group animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {member.image}
                  </div>
                  <h3 className="font-semibold text-lg text-foreground mb-1">
                    {member.name}
                  </h3>
                  <p className="text-fruit-green font-medium mb-3">
                    {member.role}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {member.bio}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-hero text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Experience Fresh?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Join thousands of satisfied customers who trust FreshFruit for their daily nutrition.
          </p>
          <Button variant="secondary" size="lg" className="bg-white text-foreground hover:bg-white/90">
            Start Shopping Now
          </Button>
        </div>
      </section>
    </div>
  );
};

export default About;