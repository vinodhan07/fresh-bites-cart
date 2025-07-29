import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Search, Filter, ShoppingCart, Heart } from "lucide-react";

const Shop = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [favorites, setFavorites] = useState<number[]>([]);

  const categories = ["All", "Citrus", "Berries", "Tropical", "Apples", "Seasonal"];

  const allFruits = [
    { id: 1, name: "Organic Red Apples", price: 4.99, image: "🍎", category: "Apples", rating: 4.8, isOrganic: true },
    { id: 2, name: "Fresh Bananas", price: 2.99, image: "🍌", category: "Tropical", rating: 4.6, isOrganic: false },
    { id: 3, name: "Sweet Oranges", price: 5.49, image: "🍊", category: "Citrus", rating: 4.9, isOrganic: true },
    { id: 4, name: "Ripe Strawberries", price: 7.99, image: "🍓", category: "Berries", rating: 4.7, isOrganic: true },
    { id: 5, name: "Purple Grapes", price: 6.49, image: "🍇", category: "Seasonal", rating: 4.5, isOrganic: false },
    { id: 6, name: "Tropical Pineapple", price: 8.99, image: "🍍", category: "Tropical", rating: 4.8, isOrganic: true },
    { id: 7, name: "Fresh Lemons", price: 3.99, image: "🍋", category: "Citrus", rating: 4.4, isOrganic: true },
    { id: 8, name: "Ripe Peaches", price: 6.99, image: "🍑", category: "Seasonal", rating: 4.6, isOrganic: false },
    { id: 9, name: "Green Apples", price: 4.49, image: "🍏", category: "Apples", rating: 4.3, isOrganic: true },
    { id: 10, name: "Fresh Blueberries", price: 9.99, image: "🫐", category: "Berries", rating: 4.9, isOrganic: true },
    { id: 11, name: "Ripe Mango", price: 7.49, image: "🥭", category: "Tropical", rating: 4.8, isOrganic: false },
    { id: 12, name: "Juicy Watermelon", price: 12.99, image: "🍉", category: "Seasonal", rating: 4.7, isOrganic: true },
  ];

  const filteredFruits = allFruits.filter(fruit => {
    const matchesSearch = fruit.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "All" || fruit.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const toggleFavorite = (id: number) => {
    setFavorites(prev => 
      prev.includes(id) 
        ? prev.filter(fav => fav !== id)
        : [...prev, id]
    );
  };

  return (
    <div className="min-h-screen bg-background py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Fresh Fruit Shop
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover our complete collection of premium, fresh fruits sourced directly from local farms.
          </p>
        </div>

        {/* Search and Filters */}
        <div className="mb-8 space-y-4">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                placeholder="Search for fruits..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <Button variant="outline" className="md:w-auto">
              <Filter className="h-4 w-4 mr-2" />
              Sort by Price
            </Button>
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category)}
                className="rounded-full"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        {/* Results Counter */}
        <div className="mb-6">
          <p className="text-muted-foreground">
            Showing {filteredFruits.length} of {allFruits.length} fruits
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredFruits.map((fruit, index) => (
            <Card 
              key={fruit.id} 
              className="group hover:shadow-hover-custom transition-all duration-300 bg-gradient-card border-0 animate-scale-in"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <CardContent className="p-6">
                <div className="relative mb-4">
                  <div className="text-6xl text-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    {fruit.image}
                  </div>
                  
                  {fruit.isOrganic && (
                    <Badge className="absolute top-0 right-0 bg-fruit-green text-white">
                      Organic
                    </Badge>
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
                    <span className="text-xl font-bold text-foreground">
                      ${fruit.price}
                    </span>
                    
                    <Button variant="fruit" size="sm">
                      <ShoppingCart className="h-4 w-4 mr-2" />
                      Add
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Empty State */}
        {filteredFruits.length === 0 && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold text-foreground mb-2">No fruits found</h3>
            <p className="text-muted-foreground">Try adjusting your search or filters</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Shop;