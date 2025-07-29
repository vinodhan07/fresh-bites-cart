import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ShoppingCart, Heart } from "lucide-react";
import { useState } from "react";

interface Fruit {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  rating: number;
  isOrganic: boolean;
}

const featuredFruits: Fruit[] = [
  {
    id: 1,
    name: "Organic Red Apples",
    price: 4.99,
    originalPrice: 6.99,
    image: "🍎",
    category: "Apples",
    rating: 4.8,
    isOrganic: true,
  },
  {
    id: 2,
    name: "Fresh Bananas",
    price: 2.99,
    image: "🍌",
    category: "Tropical",
    rating: 4.6,
    isOrganic: false,
  },
  {
    id: 3,
    name: "Sweet Oranges",
    price: 5.49,
    image: "🍊",
    category: "Citrus",
    rating: 4.9,
    isOrganic: true,
  },
  {
    id: 4,
    name: "Ripe Strawberries",
    price: 7.99,
    image: "🍓",
    category: "Berries",
    rating: 4.7,
    isOrganic: true,
  },
  {
    id: 5,
    name: "Purple Grapes",
    price: 6.49,
    image: "🍇",
    category: "Grapes",
    rating: 4.5,
    isOrganic: false,
  },
  {
    id: 6,
    name: "Tropical Pineapple",
    price: 8.99,
    image: "🍍",
    category: "Tropical",
    rating: 4.8,
    isOrganic: true,
  },
];

const FeaturedFruits = () => {
  const [favorites, setFavorites] = useState<number[]>([]);

  const toggleFavorite = (id: number) => {
    setFavorites(prev => 
      prev.includes(id) 
        ? prev.filter(fav => fav !== id)
        : [...prev, id]
    );
  };

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Featured Fresh Fruits
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Hand-picked selection of the finest, freshest fruits available today.
            Each fruit is carefully selected for peak ripeness and flavor.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {featuredFruits.map((fruit, index) => (
            <Card 
              key={fruit.id} 
              className="group hover:shadow-hover-custom transition-all duration-300 bg-gradient-card border-0 animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                <div className="relative mb-4">
                  <div className="text-6xl text-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    {fruit.image}
                  </div>
                  
                  {fruit.isOrganic && (
                    <div className="absolute top-0 right-0 bg-fruit-green text-white text-xs px-2 py-1 rounded-full font-medium">
                      Organic
                    </div>
                  )}
                  
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute top-0 left-0 h-8 w-8"
                    onClick={() => toggleFavorite(fruit.id)}
                  >
                    <Heart 
                      className={`h-4 w-4 ${
                        favorites.includes(fruit.id) 
                          ? 'text-fruit-red fill-current' 
                          : 'text-muted-foreground'
                      }`} 
                    />
                  </Button>
                </div>

                <div className="space-y-3">
                  <div>
                    <h3 className="font-semibold text-lg text-foreground group-hover:text-primary transition-colors">
                      {fruit.name}
                    </h3>
                    <p className="text-sm text-muted-foreground">{fruit.category}</p>
                  </div>

                  <div className="flex items-center space-x-2">
                    <div className="flex space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <span 
                          key={i} 
                          className={`text-xs ${
                            i < Math.floor(fruit.rating) 
                              ? 'text-fruit-yellow' 
                              : 'text-muted-foreground'
                          }`}
                        >
                          ★
                        </span>
                      ))}
                    </div>
                    <span className="text-sm text-muted-foreground">({fruit.rating})</span>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <span className="text-xl font-bold text-foreground">
                        ${fruit.price}
                      </span>
                      {fruit.originalPrice && (
                        <span className="text-sm text-muted-foreground line-through">
                          ${fruit.originalPrice}
                        </span>
                      )}
                    </div>
                    
                    <Button variant="fruit" size="sm">
                      <ShoppingCart className="h-4 w-4 mr-2" />
                      Add to Cart
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button variant="outline" size="lg">
            View All Fruits
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedFruits;