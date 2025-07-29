import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Truck, Leaf, Award, Clock } from "lucide-react";

const PromoSection = () => {
  const features = [
    {
      icon: <Truck className="h-6 w-6" />,
      title: "Free Delivery",
      description: "Free delivery on orders over $50",
      color: "text-fruit-green",
    },
    {
      icon: <Leaf className="h-6 w-6" />,
      title: "100% Organic",
      description: "Certified organic and pesticide-free",
      color: "text-fruit-green",
    },
    {
      icon: <Award className="h-6 w-6" />,
      title: "Premium Quality",
      description: "Hand-picked for freshness guarantee",
      color: "text-fruit-orange",
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "24h Delivery",
      description: "Fresh fruits delivered within 24 hours",
      color: "text-fruit-orange",
    },
  ];

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Main Promo Banner */}
        <div className="bg-gradient-hero rounded-2xl p-8 md:p-12 mb-12 text-center text-white relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              🌟 Summer Special Offer
            </h2>
            <p className="text-xl mb-6 opacity-90">
              Get 25% off on all seasonal fruits! Limited time offer.
            </p>
            <Button variant="secondary" size="lg" className="bg-white text-foreground hover:bg-white/90">
              Shop Now & Save
            </Button>
          </div>
          
          {/* Decorative Elements */}
          <div className="absolute top-4 right-4 text-4xl animate-bounce-gentle">🍉</div>
          <div className="absolute bottom-4 left-4 text-3xl animate-bounce-gentle" style={{ animationDelay: '0.5s' }}>🥭</div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="text-center border-0 bg-background shadow-card-custom hover:shadow-hover-custom transition-all duration-300 group animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                <div className={`${feature.color} mb-4 flex justify-center group-hover:scale-110 transition-transform duration-300`}>
                  {feature.icon}
                </div>
                <h3 className="font-semibold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Health Benefits Section */}
        <div className="mt-16 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-8">
            Why Choose Fresh Fruits?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <div className="text-4xl">💪</div>
              <h3 className="text-xl font-semibold text-foreground">Boost Immunity</h3>
              <p className="text-muted-foreground">
                Rich in vitamins and antioxidants to strengthen your immune system naturally.
              </p>
            </div>
            <div className="space-y-4">
              <div className="text-4xl">❤️</div>
              <h3 className="text-xl font-semibold text-foreground">Heart Health</h3>
              <p className="text-muted-foreground">
                Essential nutrients that support cardiovascular health and reduce disease risk.
              </p>
            </div>
            <div className="space-y-4">
              <div className="text-4xl">⚡</div>
              <h3 className="text-xl font-semibold text-foreground">Natural Energy</h3>
              <p className="text-muted-foreground">
                Natural sugars and fiber provide sustained energy throughout your day.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PromoSection;