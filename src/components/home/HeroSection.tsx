import { Button } from "@/components/ui/button";
import { ArrowRight, Star } from "lucide-react";
import heroImage from "@/assets/hero-fruits.jpg";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/70 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl">
          <div className="flex items-center space-x-2 mb-4 animate-fade-in-up">
            <div className="flex space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-4 w-4 text-fruit-yellow fill-current" />
              ))}
            </div>
            <span className="text-sm font-medium text-muted-foreground">
              Trusted by 10,000+ customers
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 animate-fade-in-up">
            Fresh{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Fruits
            </span>
            <br />
            Delivered Daily
          </h1>

          <p className="text-xl text-muted-foreground mb-8 max-w-lg animate-fade-in-up">
            Experience the finest selection of farm-fresh, organic fruits 
            delivered straight to your doorstep. Taste the difference quality makes.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up">
            <Button variant="hero" size="lg" asChild>
              <Link to="/shop">
                Shop Fresh Fruits
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link to="/about">
                Learn More
              </Link>
            </Button>
          </div>

          <div className="flex items-center space-x-8 mt-12 animate-fade-in-up">
            <div className="text-center">
              <div className="text-2xl font-bold text-foreground">100%</div>
              <div className="text-sm text-muted-foreground">Organic</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-foreground">24h</div>
              <div className="text-sm text-muted-foreground">Delivery</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-foreground">500+</div>
              <div className="text-sm text-muted-foreground">Products</div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-10 right-10 animate-bounce-gentle hidden lg:block">
        <div className="w-16 h-16 bg-fruit-orange rounded-full flex items-center justify-center text-2xl">
          🍊
        </div>
      </div>
    </section>
  );
};

export default HeroSection;