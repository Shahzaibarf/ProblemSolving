function createShoppingCart() {
  let cart = [];  // Private array to store items in the cart

  return {
    // Add item to the cart
    addItem: function(item, price) {
      cart.push({ item, price });
      console.log(`${item} added to your cart.`);
    },
    
    // Remove item from the cart by item name
    removeItem: function(item) {
      cart = cart.filter(cartItem => cartItem.item !== item);
      console.log(`${item} removed from your cart.`);
    },
    
    // View total price of items in the cart
    getTotalPrice: function() {
      let total = cart.reduce((acc, cartItem) => acc + cartItem.price, 0);
      console.log(`Total price: $${total}`);
      return total;
    },
    
    // View all items in the cart
    viewCart: function() {
      console.log("Your cart contains:", cart);
      return cart;
    }
  };
}

// Usage
const myCart = createShoppingCart();

// Adding items
myCart.addItem("Laptop", 1500);
myCart.addItem("Phone", 800);
myCart.addItem("Headphones", 200);

// Viewing the cart
myCart.viewCart();  
// Output: Your cart contains: [ { item: 'Laptop', price: 1500 }, { item: 'Phone', price: 800 }, { item: 'Headphones', price: 200 } ]

// Getting total price
myCart.getTotalPrice();  // Output: Total price: $2500

// Removing an item
myCart.removeItem("Phone");

// Viewing the cart again
myCart.viewCart();  
// Output: Your cart contains: [ { item: 'Laptop', price: 1500 }, { item: 'Headphones', price: 200 } ]

// Getting the updated total price
myCart.getTotalPrice();  // Output: Total price: $1700
