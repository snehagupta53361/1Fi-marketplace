const products = [
  {
    productId: "sony-wh-1000xm5",
    brandName: "Sony",
    productName: "Sony WH-1000XM5 Wireless Headphones",
    rating: 4.5,

    // Single color + single variant
    configurations: [
      {
        variantId: "sony-wh1000xm5-black",
        color: { id: "black", name: "Black" },
        variant: { id: "standard", name: "Model", value: "Standard" },
        price: 29990,
        mrp: 34990,
        inStock: true,
        images: [
          "https://picsum.photos/seed/sony-wh1000xm5-black-1/600/600",
          "https://picsum.photos/seed/sony-wh1000xm5-black-2/600/600",
          "https://picsum.photos/seed/sony-wh1000xm5-black-3/600/600",
        ],
      },
    ],

    details: {
      description:
        "Sony WH-1000XM5 wireless headphones with industry-leading noise cancellation.",
      features: [
        "Active Noise Cancellation",
        "30-hour battery life",
        "Multipoint connection",
        "Built-in microphone",
      ],
      specifications: {
        battery: "30 hours",
        connectivity: "Bluetooth",
        type: "Over-ear",
        noiseCancellation: "Yes",
      },
    },
  },

  {
    productId: "nike-air-max-270",
    brandName: "Nike",
    productName: "Nike Air Max 270",
    rating: 4.4,

    // Multiple colors + single (null) variant
    configurations: [
      {
        variantId: "airmax270-black",
        color: { id: "black", name: "Black" },
        variant: null,
        price: 9995,
        mrp: 12995,
        inStock: true,
        images: [
          "https://picsum.photos/seed/airmax270-black-1/600/600",
          "https://picsum.photos/seed/airmax270-black-2/600/600",
        ],
      },
      {
        variantId: "airmax270-white",
        color: { id: "white", name: "White" },
        variant: null,
        price: 10495,
        mrp: 13495,
        inStock: true,
        images: [
          "https://picsum.photos/seed/airmax270-white-1/600/600",
          "https://picsum.photos/seed/airmax270-white-2/600/600",
        ],
      },
      {
        variantId: "airmax270-red",
        color: { id: "red", name: "Red" },
        variant: null,
        price: 10295,
        mrp: 13295,
        inStock: false,
        images: [
          "https://picsum.photos/seed/airmax270-red-1/600/600",
          "https://picsum.photos/seed/airmax270-red-2/600/600",
        ],
      },
    ],

    details: {
      description:
        "Nike Air Max 270 sneakers designed for everyday comfort and casual wear.",
      features: [
        "Air Max cushioning",
        "Lightweight construction",
        "Breathable upper",
      ],
      specifications: {
        type: "Lifestyle sneakers",
        sole: "Rubber",
        closure: "Lace-up",
      },
    },
  },

  {
    productId: "boat-stone-spinx",
    brandName: "boAt",
    productName: "boAt Stone Spinx Bluetooth Speaker",
    rating: 4.3,

    // Single color + multiple variants
    configurations: [
      {
        variantId: "stone-spinx-10w",
        color: { id: "black", name: "Black" },
        variant: { id: "10w", name: "Power", value: "10W" },
        price: 1499,
        mrp: 2499,
        inStock: true,
        images: ["https://picsum.photos/seed/boat-stone-10w/600/600"],
      },
      {
        variantId: "stone-spinx-20w",
        color: { id: "black", name: "Black" },
        variant: { id: "20w", name: "Power", value: "20W" },
        price: 1999,
        mrp: 2999,
        inStock: true,
        images: ["https://picsum.photos/seed/boat-stone-20w/600/600"],
      },
    ],

    details: {
      description:
        "Portable Bluetooth speaker with powerful sound and long-lasting battery.",
      features: [
        "Bluetooth connectivity",
        "Water resistant",
        "Portable design",
        "Long battery life",
      ],
      specifications: {
        connectivity: "Bluetooth 5.3",
        battery: "12 hours",
        waterproofRating: "IPX5",
        power: "10W / 20W",
      },
    },
  },

  {
    productId: "prestige-electric-kettle",
    brandName: "Prestige",
    productName: "Prestige Electric Kettle",
    rating: 4.2,

    // No color + no variant
    configurations: [
      {
        variantId: "prestige-electric-kettle-standard",
        color: null,
        variant: null,
        price: 1299,
        mrp: 1995,
        inStock: true,
        images: [
          "https://picsum.photos/seed/prestige-kettle-1/600/600",
          "https://picsum.photos/seed/prestige-kettle-2/600/600",
        ],
      },
    ],

    details: {
      description:
        "Electric kettle designed for quickly boiling water at home or in the office.",
      features: [
        "Automatic shut-off",
        "Stainless steel body",
        "Boil-dry protection",
      ],
      specifications: {
        capacity: "1.5 L",
        power: "1500W",
        material: "Stainless Steel",
      },
    },
  },
  {
    productId: "iphone-16",
    brandName: "Apple",
    productName: "Apple iPhone 16",
    rating: 4.7,

    // Multiple colors + multiple variants
    configurations: [
      {
        variantId: "iphone16-black-128gb",
        color: { id: "black", name: "Black" },
        variant: { id: "128gb", name: "Storage", value: "128 GB" },
        price: 69999,
        mrp: 79900,
        inStock: true,
        images: [
          "https://picsum.photos/seed/iphone16-black-128-1/600/600",
          "https://picsum.photos/seed/iphone16-black-128-2/600/600",
          "https://picsum.photos/seed/iphone16-black-128-3/600/600",
        ],
      },

      {
        variantId: "iphone16-black-256gb",
        color: { id: "black", name: "Black" },
        variant: { id: "256gb", name: "Storage", value: "256 GB" },
        price: 79999,
        mrp: 89900,
        inStock: true,
        images: [
          "https://picsum.photos/seed/iphone16-black-256-1/600/600",
          "https://picsum.photos/seed/iphone16-black-256-2/600/600",
          "https://picsum.photos/seed/iphone16-black-256-3/600/600",
        ],
      },

      {
        variantId: "iphone16-black-512gb",
        color: { id: "black", name: "Black" },
        variant: { id: "512gb", name: "Storage", value: "512 GB" },
        price: 99999,
        mrp: 109900,
        inStock: false,
        images: [
          "https://picsum.photos/seed/iphone16-black-512-1/600/600",
          "https://picsum.photos/seed/iphone16-black-512-2/600/600",
          "https://picsum.photos/seed/iphone16-black-512-3/600/600",
        ],
      },

      {
        variantId: "iphone16-blue-128gb",
        color: { id: "blue", name: "Blue" },
        variant: { id: "128gb", name: "Storage", value: "128 GB" },
        price: 70999,
        mrp: 80900,
        inStock: true,
        images: [
          "https://picsum.photos/seed/iphone16-blue-128-1/600/600",
          "https://picsum.photos/seed/iphone16-blue-128-2/600/600",
          "https://picsum.photos/seed/iphone16-blue-128-3/600/600",
        ],
      },

      {
        variantId: "iphone16-blue-256gb",
        color: { id: "blue", name: "Blue" },
        variant: { id: "256gb", name: "Storage", value: "256 GB" },
        price: 80999,
        mrp: 90900,
        inStock: true,
        images: [
          "https://picsum.photos/seed/iphone16-blue-256-1/600/600",
          "https://picsum.photos/seed/iphone16-blue-256-2/600/600",
          "https://picsum.photos/seed/iphone16-blue-256-3/600/600",
        ],
      },

      {
        variantId: "iphone16-blue-512gb",
        color: { id: "blue", name: "Blue" },
        variant: { id: "512gb", name: "Storage", value: "512 GB" },
        price: 100999,
        mrp: 110900,
        inStock: true,
        images: [
          "https://picsum.photos/seed/iphone16-blue-512-1/600/600",
          "https://picsum.photos/seed/iphone16-blue-512-2/600/600",
          "https://picsum.photos/seed/iphone16-blue-512-3/600/600",
        ],
      },

      {
        variantId: "iphone16-pink-128gb",
        color: { id: "pink", name: "Pink" },
        variant: { id: "128gb", name: "Storage", value: "128 GB" },
        price: 70999,
        mrp: 80900,
        inStock: true,
        images: [
          "https://picsum.photos/seed/iphone16-pink-128-1/600/600",
          "https://picsum.photos/seed/iphone16-pink-128-2/600/600",
          "https://picsum.photos/seed/iphone16-pink-128-3/600/600",
        ],
      },

      {
        variantId: "iphone16-pink-256gb",
        color: { id: "pink", name: "Pink" },
        variant: { id: "256gb", name: "Storage", value: "256 GB" },
        price: 80999,
        mrp: 90900,
        inStock: true,
        images: [
          "https://picsum.photos/seed/iphone16-pink-256-1/600/600",
          "https://picsum.photos/seed/iphone16-pink-256-2/600/600",
          "https://picsum.photos/seed/iphone16-pink-256-3/600/600",
        ],
      },

      {
        variantId: "iphone16-pink-512gb",
        color: { id: "pink", name: "Pink" },
        variant: { id: "512gb", name: "Storage", value: "512 GB" },
        price: 100999,
        mrp: 110900,
        inStock: false,
        images: [
          "https://picsum.photos/seed/iphone16-pink-512-1/600/600",
          "https://picsum.photos/seed/iphone16-pink-512-2/600/600",
          "https://picsum.photos/seed/iphone16-pink-512-3/600/600",
        ],
      },
    ],

    details: {
      description:
        "Apple iPhone 16 with an advanced camera system, powerful A18 chip, and a durable design.",

      features: [
        "6.1-inch Super Retina XDR display",
        "A18 chip",
        "Advanced dual-camera system",
        "Face ID",
        "USB-C connectivity",
        "5G connectivity",
      ],

      specifications: {
        display: "6.1-inch Super Retina XDR",
        processor: "A18",
        ram: "8 GB",
        storage: "128 GB / 256 GB / 512 GB",
        operatingSystem: "iOS",
        connectivity: "5G",
      },
    },
  },
];

export default products;
