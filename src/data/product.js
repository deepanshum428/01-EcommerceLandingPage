const PRODUCTS = [
  {
    id: 1,
    name: "Smartphone",
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 18499.0,
    description: "5G smartphone with fast performance and long battery backup",
  },
  {
    id: 2,
    name: "Blutooth speaker",
    image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?q=80&w=1331&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 1999.0,
    description: "Portable Bluetooth speaker with deep bass and clear sound",
  },
  {
    id: 3,
    name: "Wireless Earbuds",
    image: "https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?q=80&w=1289&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 999.0,
    description: "Wireless earbuds with noise cancellation and long playtime",
  },
  {
    id: 4,
    name: "Smartwatch",
    image: "https://images.unsplash.com/photo-1551816230-ef5deaed4a26?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 1499.0,
    description: "Smartwatch with fitness tracking and customizable watch faces",
  },
  {
    id: 5,
    name: "Power Bank",
    image: "https://images.unsplash.com/photo-1706275399494-fb26bbc5da63?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 899.0,
    description: "10000mAh portable power bank with fast charging support",
  },
  {
    id: 6,
    name: "Laptop",
    image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 45999.0,
    description: "High-performance laptop suitable for work and gaming",
  },
  {
    id: 7,
    name: "Wireless Mouse",
    image: "https://images.unsplash.com/photo-1707592691247-5c3a1c7ba0e3?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 499.0,
    description: "Ergonomic wireless mouse with long battery life",
  },
  {
    id: 8,
    name: "Keyboard",
    image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?q=80&w=1165&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 799.0,
    description: "High-quality keyboard with smooth keys and durable build",
  },
  {
    id: 9,
    name: "WiFi Router",
    image: "https://images.unsplash.com/photo-1606421753414-8d165c9d48e5?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 1299.0,
    description: "Fast dual-band WiFi router with long range coverage",
  },
];


export const getProducts = () => PRODUCTS.map(p => ({...p}));
