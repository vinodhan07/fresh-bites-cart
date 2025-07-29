import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Trash2, Plus, Minus, ShoppingBag } from "lucide-react";
import { useState } from "react";

interface CartItem {
  id: number;
  name: string;
  price: number;
  image: string;
  quantity: number;
}

const Cart = () => {
  // Mock cart data - will be replaced with actual state management
  const [cartItems, setCartItems] = useState<CartItem[]>([
    { id: 1, name: "Organic Red Apples", price: 4.99, image: "🍎", quantity: 2 },
    { id: 3, name: "Sweet Oranges", price: 5.49, image: "🍊", quantity: 1 },
    { id: 4, name: "Ripe Strawberries", price: 7.99, image: "🍓", quantity: 3 },
  ]);

  const updateQuantity = (id: number, newQuantity: number) => {
    if (newQuantity === 0) {
      setCartItems(prev => prev.filter(item => item.id !== id));
    } else {
      setCartItems(prev => 
        prev.map(item => 
          item.id === id ? { ...item, quantity: newQuantity } : item
        )
      );
    }
  };

  const removeItem = (id: number) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const deliveryFee = subtotal > 50 ? 0 : 4.99;
  const total = subtotal + deliveryFee;

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-background py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center py-16">
            <div className="text-8xl mb-8">🛒</div>
            <h1 className="text-3xl font-bold text-foreground mb-4">Your cart is empty</h1>
            <p className="text-muted-foreground mb-8">
              Looks like you haven't added any fresh fruits to your cart yet.
            </p>
            <Button variant="hero" size="lg">
              <ShoppingBag className="h-5 w-5 mr-2" />
              Start Shopping
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background py-8">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold text-foreground mb-8">Shopping Cart</h1>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-4">
              {cartItems.map((item) => (
                <Card key={item.id} className="bg-gradient-card border-0 shadow-card-custom">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <div className="text-4xl">{item.image}</div>
                      
                      <div className="flex-1">
                        <h3 className="font-semibold text-lg text-foreground">{item.name}</h3>
                        <p className="text-muted-foreground">${item.price.toFixed(2)} each</p>
                      </div>

                      <div className="flex items-center space-x-2">
                        <Button
                          variant="outline"
                          size="icon"
                          className="h-8 w-8"
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        >
                          <Minus className="h-4 w-4" />
                        </Button>
                        
                        <Input
                          type="number"
                          value={item.quantity}
                          onChange={(e) => updateQuantity(item.id, parseInt(e.target.value) || 0)}
                          className="w-16 text-center"
                          min="0"
                        />
                        
                        <Button
                          variant="outline"
                          size="icon"
                          className="h-8 w-8"
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        >
                          <Plus className="h-4 w-4" />
                        </Button>
                      </div>

                      <div className="text-right">
                        <p className="font-semibold text-lg text-foreground">
                          ${(item.price * item.quantity).toFixed(2)}
                        </p>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-8 w-8 text-destructive hover:text-destructive"
                          onClick={() => removeItem(item.id)}
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <Card className="bg-gradient-card border-0 shadow-card-custom sticky top-8">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-6">Order Summary</h3>
                  
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Subtotal</span>
                      <span className="font-medium">${subtotal.toFixed(2)}</span>
                    </div>
                    
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Delivery</span>
                      <span className="font-medium">
                        {deliveryFee === 0 ? (
                          <span className="text-fruit-green">Free</span>
                        ) : (
                          `$${deliveryFee.toFixed(2)}`
                        )}
                      </span>
                    </div>

                    {subtotal < 50 && (
                      <div className="bg-fruit-yellow/10 border border-fruit-yellow/20 rounded-lg p-3">
                        <p className="text-sm text-foreground">
                          Add ${(50 - subtotal).toFixed(2)} more for free delivery!
                        </p>
                      </div>
                    )}
                    
                    <Separator />
                    
                    <div className="flex justify-between text-lg font-semibold">
                      <span>Total</span>
                      <span className="text-primary">${total.toFixed(2)}</span>
                    </div>
                  </div>

                  <Button variant="hero" className="w-full mt-6" size="lg">
                    Proceed to Checkout
                  </Button>
                  
                  <Button variant="outline" className="w-full mt-3">
                    Continue Shopping
                  </Button>

                  <div className="mt-6 space-y-2">
                    <div className="flex items-center text-sm text-muted-foreground">
                      <span className="mr-2">🚚</span>
                      Free delivery on orders over $50
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <span className="mr-2">🔒</span>
                      Secure checkout guaranteed
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <span className="mr-2">↩️</span>
                      Easy returns within 24 hours
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;