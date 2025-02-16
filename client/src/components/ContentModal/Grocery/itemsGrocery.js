const products = [
  {
    id: 1,
    title: "Bananas",
    price: 1.99,
    img: "/images/products/banana.jpg",
    inStock: true,
    category: "Fruits"
  },
  {
    id: 2,
    title: "Apple",
    price: 2.49,
    img: "/images/products/apple.jpg",
    inStock: true,
    category: "Fruits"
  },
  {
    id: 3,
    title: "Carrot",
    price: 0.99,
    img: "/images/products/carrot.jpg",
    inStock: true,
    category: "Vegetables"
  },
  {
    id: 4,
    title: "Chicken Breast",
    price: 5.99,
    img: "/images/products/chickenbreast.jpg",
    inStock: false,
    category: "Meat"
  },
  {
    id: 5,
    title: "Whole Wheat Bread",
    price: 3.49,
    img: "/images/products/.jpg",
    inStock: true,
    category: "Bakery"
  },
  {
    id: 6,
    title: "Milk",
    price: 2.69,
    img: "/images/products/.jpg",
    inStock: true,
    category: "Dairy"
  },
  {
    id: 7,
    title: "Cheddar Cheese",
    price: 4.99,
    img: "/images/products/.jpg",
    inStock: true,
    category: "Dairy"
  },
  {
    id: 8,
    title: "Olive Oil",
    price: 6.99,
    img: "/images/products/.jpg",
    inStock: true,
    category: "Condiments"
  },
  {
    id: 9,
    title: "Potato",
    price: 1.29,
    img: "/images/products/.jpg",
    inStock: true,
    category: "Vegetables"
  },
  {
    id: 10,
    title: "Tomato",
    price: 2.19,
    img: "/images/products/.jpg",
    inStock: true,
    category: "Vegetables"
  },
  {
    id: 11,
    title: "Lettuce",
    price: 1.79,
    img: "/images/products/.jpg",
    inStock: true,
    category: "Vegetables"
  },
  {
    id: 12,
    title: "Spinach",
    price: 3.49,
    img: "/images/products/.jpg",
    inStock: true,
    category: "Vegetables"
  },
  {
    id: 13,
    title: "Beef Steak",
    price: 8.99,
    img: "/images/products/.jpg",
    inStock: true,
    category: "Meat"
  },
  {
    id: 14,
    title: "Bacon",
    price: 5.49,
    img: "/images/products/.jpg",
    inStock: true,
    category: "Meat"
  },
  {
    id: 15,
    title: "Salmon",
    price: 9.99,
    img: "/images/products/.jpg",
    inStock: true,
    category: "Fish"
  },
  {
    id: 16,
    title: "Rice",
    price: 3.99,
    img: "/images/products/.jpg",
    inStock: true,
    category: "Grains"
  },
  {
    id: 17,
    title: "Pasta",
    price: 2.49,
    img: "/images/products/.jpg",
    inStock: true,
    category: "Grains"
  },
  {
    id: 18,
    title: "Cereal",
    price: 4.79,
    img: "/images/products/.jpg",
    inStock: true,
    category: "Breakfast"
  },
  {
    id: 19,
    title: "Yogurt",
    price: 1.99,
    img: "/images/products/.jpg",
    inStock: true,
    category: "Dairy"
  },
  {
    id: 20,
    title: "Ice Cream",
    price: 5.99,
    img: "/images/products/.jpg",
    inStock: true,
    category: "Desserts"
  },
  {
    id: 21,
    title: "Avocado",
    price: 2.99,
    img: "/images/products/.jpg",
    inStock: true,
    category: "Fruits"
  },
  {
    id: 22,
    title: "Pineapple",
    price: 3.29,
    img: "/images/products/.jpg",
    inStock: true,
    category: "Fruits"
  },
  {
    id: 23,
    title: "Strawberries",
    price: 4.99,
    img: "/images/products/.jpg",
    inStock: true,
    category: "Fruits"
  },
  {
    id: 24,
    title: "Blueberries",
    price: 5.49,
    img: "/images/products/.jpg",
    inStock: true,
    category: "Fruits"
  },
  {
    id: 25,
    title: "Grapes",
    price: 3.99,
    img: "/images/products/.jpg",
    inStock: true,
    category: "Fruits"
  },
  {
    id: 26,
    title: "Orange",
    price: 2.79,
    img: "/images/products/.jpg",
    inStock: true,
    category: "Fruits"
  },
  {
    id: 27,
    title: "Peach",
    price: 3.49,
    img: "/images/products/.jpg",
    inStock: true,
    category: "Fruits"
  },
  {
    id: 28,
    title: "Plums",
    price: 4.29,
    img: "/images/products/.jpg",
    inStock: true,
    category: "Fruits"
  },
  {
    id: 29,
    title: "Lemon",
    price: 1.29,
    img: "/images/products/.jpg",
    inStock: true,
    category: "Fruits"
  },
  {
    id: 30,
    title: "Grapefruit",
    price: 2.49,
    img: "/images/products/.jpg",
    inStock: true,
    category: "Fruits"
  },
  {
    id: 31,
    title: "Cucumber",
    price: 1.49,
    img: "/images/products/.jpg",
    inStock: true,
    category: "Vegetables"
  },
  {
    id: 32,
    title: "Zucchini",
    price: 1.99,
    img: "/images/products/.jpg",
    inStock: true,
    category: "Vegetables"
  },
  {
    id: 33,
    title: "Bell Pepper",
    price: 2.79,
    img: "/images/products/.jpg",
    inStock: true,
    category: "Vegetables"
  },
  {
    id: 34,
    title: "Onion",
    price: 0.79,
    img: "/images/products/.jpg",
    inStock: true,
    category: "Vegetables"
  },
  {
    id: 35,
    title: "Garlic",
    price: 1.49,
    img: "/images/products/.jpg",
    inStock: true,
    category: "Vegetables"
  },
  {
    id: 36,
    title: "Sweet Potato",
    price: 2.39,
    img: "/images/products/.jpg",
    inStock: true,
    category: "Vegetables"
  },
  {
    id: 37,
    title: "Pumpkin",
    price: 3.69,
    img: "/images/products/.jpg",
    inStock: true,
    category: "Vegetables"
  },
  {
    id: 38,
    title: "Broccoli",
    price: 2.49,
    img: "/images/products/.jpg",
    inStock: true,
    category: "Vegetables"
  },
  {
    id: 39,
    title: "Cauliflower",
    price: 2.89,
    img: "/images/products/.jpg",
    inStock: true,
    category: "Vegetables"
  },
  {
    id: 40,
    title: "Mushrooms",
    price: 3.49,
    img: "/images/products/.jpg",
    inStock: true,
    category: "Vegetables"
  },
  {
    id: 41,
    title: "Tuna",
    price: 2.99,
    img: "/images/products/.jpg",
    inStock: true,
    category: "Fish"
  },
  {
    id: 42,
    title: "Shrimp",
    price: 6.49,
    img: "/images/products/.jpg",
    inStock: true,
    category: "Fish"
  },
  {
    id: 43,
    title: "Cod Fish",
    price: 4.99,
    img: "/images/products/.jpg",
    inStock: true,
    category: "Fish"
  },
  {
    id: 44,
    title: "Salmon Fillet",
    price: 8.49,
    img: "/images/products/.jpg",
    inStock: true,
    category: "Fish"
  },
  {
    id: 45,
    title: "Tortillas",
    price: 2.79,
    img: "/images/products/.jpg",
    inStock: true,
    category: "Bakery"
  },
  {
    id: 46,
    title: "Bagels",
    price: 3.99,
    img: "/images/products/.jpg",
    inStock: true,
    category: "Bakery"
  },
  {
    id: 47,
    title: "Croissants",
    price: 4.29,
    img: "/images/products/.jpg",
    inStock: true,
    category: "Bakery"
  },
  {
    id: 48,
    title: "Muffins",
    price: 3.69,
    img: "/images/products/.jpg",
    inStock: true,
    category: "Bakery"
  },
  {
    id: 49,
    title: "Sourdough Bread",
    price: 5.19,
    img: "/images/products/.jpg",
    inStock: true,
    category: "Bakery"
  },
  {
    id: 50,
    title: "Wheat Flour",
    price: 2.49,
    img: "/images/products/.jpg",
    inStock: true,
    category: "Grains"
  },
  {
    id: 51,
    title: "Sugar",
    price: 1.99,
    img: "/images/products/.jpg",
    inStock: true,
    category: "Baking"
  },
  {
    id: 52,
    title: "Salt",
    price: 0.99,
    img: "/images/products/.jpg",
    inStock: true,
    category: "Baking"
  },
  {
    id: 53,
    title: "Black Pepper",
    price: 2.69,
    img: "/images/products/.jpg",
    inStock: true,
    category: "Spices"
  },
  {
    id: 54,
    title: "Cinnamon",
    price: 3.29,
    img: "/images/products/.jpg",
    inStock: true,
    category: "Spices"
  },
  {
    id: 55,
    title: "Vanilla Extract",
    price: 4.49,
    img: "/images/products/.jpg",
    inStock: true,
    category: "Baking"
  },
  {
    id: 56,
    title: "Honey",
    price: 5.99,
    img: "/images/products/.jpg",
    inStock: true,
    category: "Condiments"
  },
  {
    id: 57,
    title: "Maple Syrup",
    price: 6.99,
    img: "/images/products/.jpg",
    inStock: true,
    category: "Condiments"
  },
  {
    id: 58,
    title: "Soy Sauce",
    price: 2.99,
    img: "/images/products/.jpg",
    inStock: true,
    category: "Condiments"
  },
  {
    id: 59,
    title: "Ketchup",
    price: 3.49,
    img: "/images/products/.jpg",
    inStock: true,
    category: "Condiments"
  },
  {
    id: 60,
    title: "Mustard",
    price: 1.79,
    img: "/images/products/.jpg",
    inStock: true,
    category: "Condiments"
  },
  {
    id: 61,
    title: "Mayonnaise",
    price: 3.69,
    img: "/images/products/.jpg",
    inStock: true,
    category: "Condiments"
  },
  {
    id: 62,
    title: "BBQ Sauce",
    price: 4.29,
    img: "/images/products/.jpg",
    inStock: true,
    category: "Condiments"
  },
  {
    id: 63,
    title: "Coconut Oil",
    price: 5.19,
    img: "/images/products/.jpg",
    inStock: true,
    category: "Cooking Oils"
  },
  {
    id: 64,
    title: "Canola Oil",
    price: 3.99,
    img: "/images/products/.jpg",
    inStock: true,
    category: "Cooking Oils"
  },
  {
    id: 65,
    title: "Vegetable Oil",
    price: 2.79,
    img: "/images/products/.jpg",
    inStock: true,
    category: "Cooking Oils"
  },
  {
    id: 66,
    title: "Butter",
    price: 4.69,
    img: "/images/products/.jpg",
    inStock: true,
    category: "Dairy"
  },
  {
    id: 67,
    title: "Margarine",
    price: 3.49,
    img: "/images/products/.jpg",
    inStock: true,
    category: "Dairy"
  },
  {
    id: 68,
    title: "Cream Cheese",
    price: 2.79,
    img: "/images/products/.jpg",
    inStock: true,
    category: "Dairy"
  },
  {
    id: 69,
    title: "Ice Cream Cone",
    price: 2.29,
    img: "/images/products/.jpg",
    inStock: true,
    category: "Desserts"
  },
  {
    id: 70,
    title: "Gelato",
    price: 4.99,
    img: "/images/products/.jpg",
    inStock: true,
    category: "Desserts"
  },
  {
    id: 71,
    title: "Frozen Yogurt",
    price: 3.59,
    img: "/images/products/.jpg",
    inStock: true,
    category: "Desserts"
  },
  {
    id: 72,
    title: "Chocolate Bar",
    price: 1.49,
    img: "/images/products/.jpg",
    inStock: true,
    category: "Snacks"
  },
  {
    id: 73,
    title: "Potato Chips",
    price: 2.59,
    img: "/images/products/.jpg",
    inStock: true,
    category: "Snacks"
  },
  {
    id: 74,
    title: "Popcorn",
    price: 1.89,
    img: "/images/products/.jpg",
    inStock: true,
    category: "Snacks"
  },
  {
    id: 75,
    title: "Granola Bar",
    price: 2.49,
    img: "/images/products/.jpg",
    inStock: true,
    category: "Snacks"
  },
  {
    id: 76,
    title: "Pretzels",
    price: 1.99,
    img: "/images/products/.jpg",
    inStock: true,
    category: "Snacks"
  },
  {
    id: 77,
    title: "Trail Mix",
    price: 3.29,
    img: "/images/products/.jpg",
    inStock: true,
    category: "Snacks"
  },
  {
    id: 78,
    title: "Chewing Gum",
    price: 0.99,
    img: "/images/products/.jpg",
    inStock: true,
    category: "Snacks"
  },
  {
    id: 79,
    title: "Candy",
    price: 1.49,
    img: "/images/products/.jpg",
    inStock: true,
    category: "Snacks"
  },
  {
    id: 80,
    title: "Canned Beans",
    price: 1.29,
    img: "/images/products/.jpg",
    inStock: true,
    category: "Canned Goods"
  },
  {
    id: 81,
    title: "Canned Soup",
    price: 2.59,
    img: "/images/products/.jpg",
    inStock: true,
    category: "Canned Goods"
  },
  {
    id: 82,
    title: "Canned Tomatoes",
    price: 1.79,
    img: "/images/products/.jpg",
    inStock: true,
    category: "Canned Goods"
  },
  {
    id: 83,
    title: "Canned Tuna",
    price: 2.29,
    img: "/images/products/.jpg",
    inStock: true,
    category: "Canned Goods"
  },
  {
    id: 84,
    title: "Canned Corn",
    price: 1.59,
    img: "/images/products/.jpg",
    inStock: true,
    category: "Canned Goods"
  },
  {
    id: 85,
    title: "Canned Peas",
    price: 1.49,
    img: "/images/products/.jpg",
    inStock: true,
    category: "Canned Goods"
  },
  {
    id: 86,
    title: "Canned Fruit",
    price: 2.99,
    img: "/images/products/.jpg",
    inStock: true,
    category: "Canned Goods"
  },
  {
    id: 87,
    title: "Canned Pineapple",
    price: 2.19,
    img: "/images/products/.jpg",
    inStock: true,
    category: "Canned Goods"
  },
  {
    id: 88,
    title: "Canned Peaches",
    price: 2.39,
    img: "/images/products/.jpg",
    inStock: true,
    category: "Canned Goods"
  },
  {
    id: 89,
    title: "Instant Noodles",
    price: 0.99,
    img: "/images/products/.jpg",
    inStock: true,
    category: "Instant Food"
  },
  {
    id: 90,
    title: "Macaroni and Cheese",
    price: 2.29,
    img: "/images/products/.jpg",
    inStock: true,
    category: "Instant Food"
  },
  {
    id: 91,
    title: "Instant Rice",
    price: 1.99,
    img: "/images/products/.jpg",
    inStock: true,
    category: "Instant Food"
  },
  {
    id: 92,
    title: "Frozen Pizza",
    price: 5.49,
    img: "/images/products/.jpg",
    inStock: true,
    category: "Frozen Food"
  },
  {
    id: 93,
    title: "Frozen Vegetables",
    price: 3.19,
    img: "/images/products/.jpg",
    inStock: true,
    category: "Frozen Food"
  },
  {
    id: 94,
    title: "Frozen Fruit",
    price: 4.49,
    img: "/images/products/.jpg",
    inStock: true,
    category: "Frozen Food"
  },
  {
    id: 95,
    title: "Frozen Chicken",
    price: 6.99,
    img: "/images/products/.jpg",
    inStock: true,
    category: "Frozen Food"
  },
  {
    id: 96,
    title: "Frozen Fish",
    price: 8.49,
    img: "/images/products/.jpg",
    inStock: true,
    category: "Frozen Food"
  },
  {
    id: 97,
    title: "Frozen French Fries",
    price: 2.79,
    img: "/images/products/.jpg",
    inStock: true,
    category: "Frozen Food"
  },
  {
    id: 98,
    title: "Frozen Burgers",
    price: 4.99,
    img: "/images/products/.jpg",
    inStock: true,
    category: "Frozen Food"
  },
  {
    id: 99,
    title: "Frozen Waffles",
    price: 3.69,
    img: "/images/products/.jpg",
    inStock: true,
    category: "Frozen Food"
  },
  {
    id: 100,
    title: "Frozen Breakfast Sandwiches",
    price: 4.49,
    img: "/images/products/.jpg",
    inStock: true,
    category: "Frozen Food"
  }
]

export default {products};