import { buildSearchIndex } from "../src/utils/searchProducts/searchProducts.js";

export const mockProducts = [
  {
    id: 40,
    name: "ONE LIFE GRAPHIC T-SHIRT",
    description:
      "Make a bold statement with this One Life graphic t-shirt. Designed with a modern streetwear vibe and premium cotton comfort for everyday wear.",
    price: 110,
    basePrice: 130,
    discount: 15,
    rating: 5,
    quantity: 95,
    gender: "male",
    type: "T-shirts",
    brand: "h&m",
    style: "Casual",
    sizes: [
      { name: "Small", available: true },
      { name: "Medium", available: true },
      { name: "Large", available: true },
      { name: "X-Large", available: true },
      { name: "XX-Large", available: false },
    ],
    colors: [
      { name: "black", available: true },
      { name: "white", available: true },
      { name: "gray", available: true },
      { name: "beige", available: false },
    ],
    details: [
      {
        title: "Product information",
        info: [
          { key: "gender", value: "male" },
          { key: "season", value: "Spring/Summer" },
          { key: "collection", value: "Urban Spirit 2025" },
          { key: "type", value: "T-shirts" },
        ],
      },
      {
        title: "Materials",
        info: [
          { key: "material", value: "100% Cotton" },
          { key: "Fabric Weight", value: "180 GSM" },
          { key: "Texture", value: "Soft Jersey" },
          { key: "Stretch", value: "Slight Stretch" },
        ],
      },
      {
        title: "Fit & Sizing",
        info: [
          { key: "Fit Type", value: "Regular Fit" },
          { key: "Length", value: "Standard Length" },
          { key: "Sleeve Type", value: "Short Sleeve" },
          { key: "Neckline", value: "Crew Neck" },
        ],
      },
      {
        title: "Care Instructions",
        info: [
          { key: "Washing", value: "Machine wash cold (30°C max)" },
          { key: "Drying", value: "Tumble dry low" },
          { key: "Ironing", value: "Iron inside out on low heat" },
          { key: "Bleaching", value: "Do not bleach" },
        ],
      },
    ],
    gallery: [
      "/images/one-life-graphic-t-shirt.png",
      "/images/one-life-graphic-t-shirt-2.png",
      "/images/one-life-graphic-t-shirt-3.png",
    ],
    reviews: [
      {
        author: "Ryan D.",
        comment:
          "Love the print and fit! The fabric feels soft and high-quality. Perfect casual tee.",
        rating: 5,
        postDate: "August 28, 2024",
      },
      {
        author: "Sophia L.",
        comment:
          "Great shirt! The material is breathable and comfortable all day. Really love the design.",
        rating: 5,
        postDate: "September 1, 2024",
      },
      {
        author: "Mark T.",
        comment:
          "Fits well and looks exactly like the pictures. Good value for the price.",
        rating: 4,
        postDate: "September 5, 2024",
      },
      {
        author: "Emily R.",
        comment:
          "Nice quality, but the sleeves are slightly shorter than I expected. Still a solid purchase.",
        rating: 4,
        postDate: "September 12, 2024",
      },
      {
        author: "James K.",
        comment:
          "The fabric is soft and durable. Washed it a couple of times and no shrinkage so far.",
        rating: 5,
        postDate: "September 15, 2024",
      },
      {
        author: "Olivia M.",
        comment:
          "Good casual t-shirt, but the black color shows lint easily. Otherwise, very comfortable.",
        rating: 4,
        postDate: "September 20, 2024",
      },
      {
        author: "Daniel P.",
        comment:
          "Awesome print and fits perfectly. I wear it almost every week!",
        rating: 5,
        postDate: "September 22, 2024",
      },
      {
        author: "Chloe S.",
        comment:
          "Very stylish and soft fabric. Love the modern streetwear vibe.",
        rating: 5,
        postDate: "September 25, 2024",
      },
      {
        author: "Michael B.",
        comment:
          "Overall good quality, but I wish there were more color options available.",
        rating: 4,
        postDate: "September 28, 2024",
      },
    ],
  },
  {
    id: 27,
    name: "BLACK STRIPED T-SHIRT",
    description:
      "Classic black t-shirt with subtle white stripes for a sleek and modern look. Perfect for casual or semi-casual outfits.",
    price: 120,
    basePrice: 120,
    discount: 0,
    rating: 4,
    quantity: 95,
    gender: "male",
    type: "T-shirts",
    brand: "calvinKlein",
    style: "Casual",
    sizes: [
      { name: "Small", available: true },
      { name: "Medium", available: true },
      { name: "Large", available: true },
      { name: "X-Large", available: false },
      { name: "XX-Large", available: false },
    ],
    colors: [
      { name: "black", available: true },
      { name: "white", available: true },
      { name: "gray", available: true },
    ],
    details: [
      {
        title: "Product information",
        info: [
          { key: "gender", value: "male" },
          { key: "season", value: "All Seasons" },
          { key: "collection", value: "Urban Line 2025" },
          { key: "type", value: "T-shirts" },
        ],
      },
      {
        title: "Materials",
        info: [
          { key: "material", value: "100% Cotton" },
          { key: "Fabric Weight", value: "180 GSM" },
          { key: "Texture", value: "Soft Knit" },
          { key: "Stretch", value: "No Stretch" },
        ],
      },
      {
        title: "Fit & Sizing",
        info: [
          { key: "Fit Type", value: "Regular Fit" },
          { key: "Length", value: "Standard" },
          { key: "Sleeve Type", value: "Short Sleeve" },
          { key: "Neckline", value: "Crew Neck" },
        ],
      },
      {
        title: "Care Instructions",
        info: [
          { key: "Washing", value: "Machine wash cold" },
          { key: "Drying", value: "Line dry" },
          { key: "Ironing", value: "Low heat" },
          { key: "Bleaching", value: "Do not bleach" },
        ],
      },
    ],
    gallery: [
      "/images/black-striped-t-shirt.png",
      "/images/coming-soon-2.png",
      "/images/coming-soon-3.png",
    ],
    reviews: [
      {
        author: "Ethan P.",
        comment:
          "Simple and clean look. The stripes make it stand out just enough.",
        rating: 4,
        postDate: "June 12, 2023",
      },
      [
        {
          author: "Liam W.",
          comment:
            "Very comfortable and fits true to size. The stripes give it a nice touch without being flashy.",
          rating: 4,
          postDate: "June 18, 2023",
        },
        {
          author: "Sophia H.",
          comment:
            "Good quality cotton and nice stitching. Perfect for everyday wear.",
          rating: 5,
          postDate: "June 22, 2023",
        },
        {
          author: "Noah R.",
          comment:
            "Classic design, but the black fabric shows lint easily. Still a solid t-shirt overall.",
          rating: 4,
          postDate: "June 25, 2023",
        },
        {
          author: "Mia K.",
          comment:
            "Soft and breathable material. Loved the fit and style for casual outings.",
          rating: 5,
          postDate: "June 28, 2023",
        },
        {
          author: "Oliver J.",
          comment:
            "The stripes look very elegant. Washed it a few times and the fabric held up well.",
          rating: 5,
          postDate: "July 2, 2023",
        },
        {
          author: "Ava S.",
          comment:
            "Nice shirt overall. Would be great if there were more color options.",
          rating: 4,
          postDate: "July 5, 2023",
        },
        {
          author: "Lucas T.",
          comment:
            "Comfortable fit and good material. Perfect for casual workwear.",
          rating: 4,
          postDate: "July 10, 2023",
        },
        {
          author: "Isabella M.",
          comment:
            "Simple yet stylish. The quality is good for the price, highly recommend.",
          rating: 5,
          postDate: "July 12, 2023",
        },
      ],
    ],
  },
  {
    id: 28,
    name: "CHECKERED FORMAL SHIRT",
    description:
      "A timeless checkered shirt for formal occasions or office wear. Offers a structured look with breathable fabric.",
    price: 150,
    basePrice: 180,
    discount: 15,
    rating: 5,
    quantity: 60,
    gender: "male",
    type: "Shirts",
    brand: "HugoBoss",
    style: "Formal",
    sizes: [
      { name: "Small", available: true },
      { name: "Medium", available: true },
      { name: "Large", available: true },
      { name: "X-Large", available: true },
      { name: "XX-Large", available: false },
    ],
    colors: [
      { name: "navy", available: true },
      { name: "gray", available: true },
      { name: "black", available: true },
    ],
    details: [
      {
        title: "Product information",
        info: [
          { key: "gender", value: "male" },
          { key: "season", value: "All Seasons" },
          { key: "collection", value: "Executive Line 2025" },
          { key: "type", value: "Shirts" },
        ],
      },
      {
        title: "Materials",
        info: [
          { key: "material", value: "98% Cotton, 2% Elastane" },
          { key: "Fabric Weight", value: "200 GSM" },
          { key: "Texture", value: "Smooth Weave" },
          { key: "Stretch", value: "Slight Stretch" },
        ],
      },
      {
        title: "Fit & Sizing",
        info: [
          { key: "Fit Type", value: "Slim Fit" },
          { key: "Length", value: "Regular" },
          { key: "Sleeve Type", value: "Long Sleeve" },
          { key: "Collar", value: "Classic Collar" },
        ],
      },
      {
        title: "Care Instructions",
        info: [
          { key: "Washing", value: "Machine wash warm" },
          { key: "Drying", value: "Tumble dry low" },
          { key: "Ironing", value: "Warm iron" },
          { key: "Bleaching", value: "Do not bleach" },
        ],
      },
    ],
    gallery: [
      "/images/checkered-formal-shirt.png",
      "/images/coming-soon-2.png",
      "/images/coming-soon-3.png",
    ],
    reviews: [
      {
        author: "Daniel R.",
        comment: "Excellent quality, perfect fit for office wear.",
        rating: 5,
        postDate: "April 5, 2023",
      },
      [
        {
          author: "Ethan S.",
          comment:
            "Very stylish and comfortable. The slim fit gives a sharp look for meetings.",
          rating: 5,
          postDate: "April 10, 2023",
        },
        {
          author: "Sophia L.",
          comment:
            "Fabric feels premium and breathable. Perfect for long office hours.",
          rating: 5,
          postDate: "April 12, 2023",
        },
        {
          author: "James K.",
          comment:
            "Classic design, washes well without losing shape. Highly recommend.",
          rating: 5,
          postDate: "April 15, 2023",
        },
        {
          author: "Olivia M.",
          comment:
            "Fit is perfect and the checkered pattern is elegant without being too bold.",
          rating: 5,
          postDate: "April 18, 2023",
        },
        {
          author: "Liam T.",
          comment:
            "Good quality shirt. Slight stretch makes it very comfortable for movement.",
          rating: 5,
          postDate: "April 20, 2023",
        },
        {
          author: "Mia R.",
          comment:
            "Excellent craftsmanship and smooth texture. Looks professional every time I wear it.",
          rating: 5,
          postDate: "April 22, 2023",
        },
        {
          author: "Noah P.",
          comment:
            "Love the color options. Navy is my favorite, pairs well with formal trousers.",
          rating: 5,
          postDate: "April 25, 2023",
        },
        {
          author: "Isabella F.",
          comment:
            "Slim fit and classic collar make it ideal for office or formal events. Very satisfied.",
          rating: 5,
          postDate: "April 28, 2023",
        },
      ],
    ],
  },
  {
    id: 29,
    name: "COURAGE GRAPHIC T-SHIRT",
    description:
      "Bold graphic print t-shirt featuring the word 'Courage'. Perfect for streetwear looks and casual confidence.",
    price: 90,
    basePrice: 110,
    discount: 20,
    rating: 4,
    quantity: 110,
    gender: "male",
    type: "T-shirts",
    brand: "Nike",
    style: "Casual",
    sizes: [
      { name: "Small", available: true },
      { name: "Medium", available: true },
      { name: "Large", available: true },
      { name: "X-Large", available: true },
    ],
    colors: [
      { name: "white", available: true },
      { name: "black", available: true },
      { name: "beige", available: false },
    ],
    details: [
      {
        title: "Product information",
        info: [
          { key: "gender", value: "male" },
          { key: "season", value: "Spring/Summer" },
          { key: "collection", value: "Street Style 2025" },
          { key: "type", value: "T-shirts" },
        ],
      },
      {
        title: "Materials",
        info: [
          { key: "material", value: "100% Organic Cotton" },
          { key: "Fabric Weight", value: "170 GSM" },
          { key: "Texture", value: "Soft Jersey" },
          { key: "Stretch", value: "Slight Stretch" },
        ],
      },
      {
        title: "Fit & Sizing",
        info: [
          { key: "Fit Type", value: "Relaxed Fit" },
          { key: "Length", value: "Standard" },
          { key: "Sleeve Type", value: "Short Sleeve" },
          { key: "Neckline", value: "Crew Neck" },
        ],
      },
      {
        title: "Care Instructions",
        info: [
          { key: "Washing", value: "Cold gentle cycle" },
          { key: "Drying", value: "Hang dry" },
          { key: "Ironing", value: "Inside out" },
          { key: "Bleaching", value: "Do not bleach" },
        ],
      },
    ],
    gallery: [
      "/images/courage-graphic-t-shirt.png",
      "/images/coming-soon-2.png",
      "/images/coming-soon-3.png",
    ],
    reviews: [
      {
        author: "Leo H.",
        comment: "Soft fabric and great message. Fits perfectly!",
        rating: 5,
        postDate: "May 20, 2023",
      },
      [
        {
          author: "Ella M.",
          comment:
            "Love the design and the word 'Courage' really stands out. Comfortable fit for casual wear.",
          rating: 5,
          postDate: "May 25, 2023",
        },
        {
          author: "Ryan K.",
          comment:
            "Good quality cotton and soft on the skin. Slightly loose fit which I like.",
          rating: 4,
          postDate: "May 28, 2023",
        },
        {
          author: "Mia S.",
          comment:
            "Nice t-shirt overall, but the white version shows stains easily. Still a favorite for casual outings.",
          rating: 4,
          postDate: "June 1, 2023",
        },
        {
          author: "Liam T.",
          comment:
            "The print looks amazing and doesn’t fade after washing. Great streetwear piece.",
          rating: 5,
          postDate: "June 3, 2023",
        },
        {
          author: "Sophia R.",
          comment:
            "Relaxed fit makes it comfortable to wear all day. Perfect for casual style.",
          rating: 5,
          postDate: "June 6, 2023",
        },
        {
          author: "Noah P.",
          comment:
            "Fabric feels premium and breathable. Good quality for the price.",
          rating: 4,
          postDate: "June 10, 2023",
        },
        {
          author: "Olivia L.",
          comment:
            "Bold design, very trendy. I get compliments whenever I wear it.",
          rating: 5,
          postDate: "June 12, 2023",
        },
        {
          author: "James H.",
          comment:
            "Comfortable and stylish, fits true to size. Would buy again in another color.",
          rating: 4,
          postDate: "June 15, 2023",
        },
      ],
    ],
  },
  {
    id: 30,
    name: "FADED SKINNY JEANS",
    description:
      "Stylish skinny jeans with a faded wash and flexible fit. Designed for comfort and a modern street look.",
    price: 250,
    basePrice: 280,
    discount: 10,
    rating: 4,
    quantity: 50,
    gender: "male",
    type: "Jeans",
    brand: "Levi’s",
    style: "Casual",
    sizes: [
      { name: "30", available: true },
      { name: "32", available: true },
      { name: "34", available: true },
      { name: "36", available: false },
    ],
    colors: [
      { name: "light-blue", available: true },
      { name: "gray", available: true },
    ],
    details: [
      {
        title: "Product information",
        info: [
          { key: "gender", value: "male" },
          { key: "season", value: "All Seasons" },
          { key: "collection", value: "Denim Classics 2025" },
          { key: "type", value: "Jeans" },
        ],
      },
      {
        title: "Materials",
        info: [
          { key: "material", value: "98% Cotton, 2% Elastane" },
          { key: "Fabric Weight", value: "400 GSM" },
          { key: "Texture", value: "Denim" },
          { key: "Stretch", value: "Slight Stretch" },
        ],
      },
      {
        title: "Fit & Sizing",
        info: [
          { key: "Fit Type", value: "Skinny Fit" },
          { key: "Length", value: "Full Length" },
          { key: "Waist Rise", value: "Mid Rise" },
        ],
      },
      {
        title: "Care Instructions",
        info: [
          { key: "Washing", value: "Cold wash separately" },
          { key: "Drying", value: "Tumble dry low" },
          { key: "Ironing", value: "Low iron" },
          { key: "Bleaching", value: "Do not bleach" },
        ],
      },
    ],
    gallery: [
      "/images/faded-skinny-jeans.png",
      "/images/coming-soon-2.png",
      "/images/coming-soon-3.png",
    ],
    reviews: [
      {
        author: "Chris J.",
        comment: "Love the faded style, very comfortable.",
        rating: 4,
        postDate: "August 15, 2023",
      },
      [
        {
          author: "Liam T.",
          comment:
            "Great fit and very comfortable. The faded wash looks modern and stylish.",
          rating: 5,
          postDate: "August 18, 2023",
        },
        {
          author: "Sophia M.",
          comment:
            "Nice quality denim. Slight stretch makes them easy to move in. True to size.",
          rating: 4,
          postDate: "August 20, 2023",
        },
        {
          author: "Noah R.",
          comment:
            "The skinny fit is perfect, but the gray color shows dust easily. Otherwise happy with purchase.",
          rating: 4,
          postDate: "August 22, 2023",
        },
        {
          author: "Mia K.",
          comment:
            "Love the mid-rise fit and full-length cut. Very comfortable for daily wear.",
          rating: 5,
          postDate: "August 25, 2023",
        },
        {
          author: "Oliver J.",
          comment:
            "Fabric quality is solid, washes well without losing color. Highly recommend.",
          rating: 5,
          postDate: "August 28, 2023",
        },
        {
          author: "Ava S.",
          comment:
            "Good jeans for casual outings. The faded look adds a nice touch to street style.",
          rating: 4,
          postDate: "August 30, 2023",
        },
        {
          author: "Lucas P.",
          comment:
            "Fits as expected, comfortable stretch. Very happy with this purchase.",
          rating: 5,
          postDate: "September 2, 2023",
        },
        {
          author: "Isabella R.",
          comment:
            "Stylish jeans, perfect for pairing with sneakers. Fabric is soft yet durable.",
          rating: 4,
          postDate: "September 5, 2023",
        },
      ],
    ],
  },
  {
    id: 31,
    name: "GRADIENT GRAPHIC T-SHIRT",
    description:
      "Eye-catching t-shirt featuring a smooth gradient print with a soft and breathable feel. Great for summer days and modern outfits.",
    price: 110,
    basePrice: 140,
    discount: 20,
    rating: 5,
    quantity: 90,
    gender: "male",
    type: "T-shirts",
    brand: "Zara",
    style: "Casual",
    sizes: [
      { name: "Small", available: true },
      { name: "Medium", available: true },
      { name: "Large", available: true },
      { name: "X-Large", available: true },
    ],
    colors: [
      { name: "blue", available: true },
      { name: "pink", available: true },
      { name: "purple", available: true },
    ],
    details: [
      {
        title: "Product information",
        info: [
          { key: "gender", value: "male" },
          { key: "season", value: "Spring/Summer" },
          { key: "collection", value: "Modern Prints 2025" },
          { key: "type", value: "T-shirts" },
        ],
      },
      {
        title: "Materials",
        info: [
          { key: "material", value: "100% Cotton" },
          { key: "Fabric Weight", value: "180 GSM" },
          { key: "Texture", value: "Smooth Jersey" },
          { key: "Stretch", value: "Slight Stretch" },
        ],
      },
      {
        title: "Fit & Sizing",
        info: [
          { key: "Fit Type", value: "Regular Fit" },
          { key: "Length", value: "Standard" },
          { key: "Sleeve Type", value: "Short Sleeve" },
          { key: "Neckline", value: "Crew Neck" },
        ],
      },
      {
        title: "Care Instructions",
        info: [
          { key: "Washing", value: "Machine wash cold" },
          { key: "Drying", value: "Hang to dry" },
          { key: "Ironing", value: "Low iron inside out" },
          { key: "Bleaching", value: "Do not bleach" },
        ],
      },
    ],
    gallery: [
      "/images/gradient-graphic-t-shirt.png",
      "/images/coming-soon-2.png",
      "/images/coming-soon-3.png",
    ],
    reviews: [
      {
        author: "Ryan K.",
        comment:
          "The gradient print looks amazing in person. Super soft fabric.",
        rating: 5,
        postDate: "July 25, 2023",
      },
    ],
  },
  {
    id: 32,
    name: "LOOSE FIT BERMUDA SHORTS",
    description:
      "Comfortable loose-fit bermuda shorts made from lightweight cotton. Perfect for beach days and casual outings.",
    price: 160,
    basePrice: 200,
    discount: 20,
    rating: 4,
    quantity: 120,
    gender: "male",
    type: "Shorts",
    brand: "H&M",
    style: "Casual",
    sizes: [
      { name: "S", available: true },
      { name: "M", available: true },
      { name: "L", available: true },
      { name: "XL", available: true },
    ],
    colors: [
      { name: "beige", available: true },
      { name: "navy", available: true },
      { name: "olive", available: true },
    ],
    details: [
      {
        title: "Product information",
        info: [
          { key: "gender", value: "male" },
          { key: "season", value: "Summer" },
          { key: "collection", value: "Comfort Wear 2025" },
          { key: "type", value: "Shorts" },
        ],
      },
      {
        title: "Materials",
        info: [
          { key: "material", value: "100% Cotton" },
          { key: "Fabric Weight", value: "160 GSM" },
          { key: "Texture", value: "Twill" },
          { key: "Stretch", value: "No Stretch" },
        ],
      },
      {
        title: "Fit & Sizing",
        info: [
          { key: "Fit Type", value: "Loose Fit" },
          { key: "Length", value: "Knee Length" },
          { key: "Closure", value: "Button & Zip" },
        ],
      },
      {
        title: "Care Instructions",
        info: [
          { key: "Washing", value: "Machine wash cold" },
          { key: "Drying", value: "Tumble dry low" },
          { key: "Ironing", value: "Medium iron" },
          { key: "Bleaching", value: "Do not bleach" },
        ],
      },
    ],
    gallery: [
      "/images/loose-fit-bermuda-shorts.png",
      "/images/coming-soon-2.png",
      "/images/coming-soon-3.png",
    ],
    reviews: [
      {
        author: "Owen D.",
        comment: "Super comfy and perfect for summer.",
        rating: 4,
        postDate: "June 10, 2023",
      },
    ],
  },
  {
    id: 33,
    name: "POLO WITH CONTRAST TRIMS",
    description:
      "Elegant polo shirt with contrast collar and sleeve trims. A refined choice for casual Fridays or smart outings.",
    price: 170,
    basePrice: 200,
    discount: 15,
    rating: 5,
    quantity: 75,
    gender: "male",
    type: "T-shirts",
    brand: "Lacoste",
    style: "Smart Casual",
    sizes: [
      { name: "Small", available: true },
      { name: "Medium", available: true },
      { name: "Large", available: true },
      { name: "X-Large", available: true },
    ],
    colors: [
      { name: "white", available: true },
      { name: "navy", available: true },
      { name: "black", available: false },
    ],
    details: [
      {
        title: "Product information",
        info: [
          { key: "gender", value: "male" },
          { key: "season", value: "All Seasons" },
          { key: "collection", value: "Classic Polo 2025" },
          { key: "type", value: "T-shirts" },
        ],
      },
      {
        title: "Materials",
        info: [
          { key: "material", value: "95% Cotton, 5% Elastane" },
          { key: "Fabric Weight", value: "200 GSM" },
          { key: "Texture", value: "Pique Knit" },
          { key: "Stretch", value: "Slight Stretch" },
        ],
      },
      {
        title: "Fit & Sizing",
        info: [
          { key: "Fit Type", value: "Regular Fit" },
          { key: "Length", value: "Standard" },
          { key: "Sleeve Type", value: "Short Sleeve" },
          { key: "Collar", value: "Contrast Polo Collar" },
        ],
      },
      {
        title: "Care Instructions",
        info: [
          { key: "Washing", value: "Gentle machine wash" },
          { key: "Drying", value: "Line dry" },
          { key: "Ironing", value: "Low iron" },
          { key: "Bleaching", value: "Do not bleach" },
        ],
      },
    ],
    gallery: [
      "/images/polo-with-contrast-trims.png",
      "/images/coming-soon-2.png",
      "/images/coming-soon-3.png",
    ],
    reviews: [
      {
        author: "Liam W.",
        comment: "High-quality polo, love the trim detailing.",
        rating: 5,
        postDate: "March 30, 2023",
      },
    ],
  },
  {
    id: 34,
    name: "POLO WITH TIPPING DETAILS",
    description:
      "Refined polo with subtle tipping details on the collar and sleeves. Perfect mix of sporty and elegant style.",
    price: 160,
    basePrice: 180,
    discount: 10,
    rating: 4,
    quantity: 65,
    gender: "male",
    type: "T-shirts",
    brand: "Tommy Hilfiger",
    style: "Smart Casual",
    sizes: [
      { name: "Small", available: true },
      { name: "Medium", available: true },
      { name: "Large", available: true },
    ],
    colors: [
      { name: "navy", available: true },
      { name: "white", available: true },
      { name: "burgundy", available: false },
    ],
    details: [
      {
        title: "Product information",
        info: [
          { key: "gender", value: "male" },
          { key: "season", value: "Spring/Summer" },
          { key: "collection", value: "Heritage 2025" },
          { key: "type", value: "T-shirts" },
        ],
      },
      {
        title: "Materials",
        info: [
          { key: "material", value: "100% Cotton" },
          { key: "Fabric Weight", value: "190 GSM" },
          { key: "Texture", value: "Pique Cotton" },
          { key: "Stretch", value: "No Stretch" },
        ],
      },
      {
        title: "Fit & Sizing",
        info: [
          { key: "Fit Type", value: "Slim Fit" },
          { key: "Length", value: "Standard" },
          { key: "Sleeve Type", value: "Short Sleeve" },
          { key: "Collar", value: "Polo with Tipping" },
        ],
      },
      {
        title: "Care Instructions",
        info: [
          { key: "Washing", value: "Machine wash cold" },
          { key: "Drying", value: "Tumble dry low" },
          { key: "Ironing", value: "Warm iron" },
          { key: "Bleaching", value: "Do not bleach" },
        ],
      },
    ],
    gallery: [
      "/images/polo-with-tipping-details.png",
      "/images/coming-soon-2.png",
      "/images/coming-soon-3.png",
    ],
    reviews: [
      {
        author: "Aaron T.",
        comment: "Great fit, the tipping adds a nice touch.",
        rating: 4,
        postDate: "August 2, 2023",
      },
    ],
  },
  {
    id: 35,
    name: "SKINNY FIT JEANS",
    description:
      "Modern skinny fit jeans designed for everyday wear. Comfortable stretch denim with a clean and versatile look.",
    price: 220,
    basePrice: 250,
    discount: 12,
    rating: 5,
    quantity: 80,
    gender: "male",
    type: "Jeans",
    brand: "Levi’s",
    style: "Casual",
    sizes: [
      { name: "Small", available: true },
      { name: "Medium", available: true },
      { name: "Large", available: true },
      { name: "X-Large", available: false },
    ],
    colors: [
      { name: "dark-blue", available: true },
      { name: "black", available: true },
    ],
    details: [
      {
        title: "Product information",
        info: [
          { key: "gender", value: "male" },
          { key: "season", value: "All Seasons" },
          { key: "collection", value: "Urban Denim 2025" },
          { key: "type", value: "Jeans" },
        ],
      },
      {
        title: "Materials",
        info: [
          { key: "material", value: "99% Cotton, 1% Elastane" },
          { key: "Fabric Weight", value: "390 GSM" },
          { key: "Texture", value: "Denim" },
          { key: "Stretch", value: "Slight Stretch" },
        ],
      },
      {
        title: "Fit & Sizing",
        info: [
          { key: "Fit Type", value: "Skinny Fit" },
          { key: "Length", value: "Full Length" },
          { key: "Waist Rise", value: "Mid Rise" },
        ],
      },
      {
        title: "Care Instructions",
        info: [
          { key: "Washing", value: "Cold wash" },
          { key: "Drying", value: "Air dry" },
          { key: "Ironing", value: "Low iron" },
          { key: "Bleaching", value: "Do not bleach" },
        ],
      },
    ],
    gallery: [
      "/images/skinny-fit-jeans.png",
      "/images/coming-soon-2.png",
      "/images/coming-soon-3.png",
    ],
    reviews: [
      {
        author: "Jake M.",
        comment: "Perfect skinny fit and great color fade.",
        rating: 5,
        postDate: "May 15, 2023",
      },
    ],
  },
  {
    id: 36,
    name: "SLEEVE STRIPED T-SHIRT",
    description:
      "Casual t-shirt featuring sporty sleeve stripes. A retro-inspired piece that pairs perfectly with jeans or shorts.",
    price: 100,
    basePrice: 120,
    discount: 15,
    rating: 4,
    quantity: 85,
    gender: "male",
    type: "T-shirts",
    brand: "Adidas",
    style: "Casual",
    sizes: [
      { name: "Small", available: true },
      { name: "Medium", available: true },
      { name: "Large", available: true },
    ],
    colors: [
      { name: "white", available: true },
      { name: "gray", available: true },
      { name: "navy", available: false },
    ],
    details: [
      {
        title: "Product information",
        info: [
          { key: "gender", value: "male" },
          { key: "season", value: "Spring/Summer" },
          { key: "collection", value: "Retro Sports 2025" },
          { key: "type", value: "T-shirts" },
        ],
      },
      {
        title: "Materials",
        info: [
          { key: "material", value: "100% Cotton" },
          { key: "Fabric Weight", value: "180 GSM" },
          { key: "Texture", value: "Soft Knit" },
          { key: "Stretch", value: "No Stretch" },
        ],
      },
      {
        title: "Fit & Sizing",
        info: [
          { key: "Fit Type", value: "Regular Fit" },
          { key: "Length", value: "Standard" },
          { key: "Sleeve Type", value: "Short Sleeve" },
          { key: "Neckline", value: "Crew Neck" },
        ],
      },
      {
        title: "Care Instructions",
        info: [
          { key: "Washing", value: "Machine wash cold" },
          { key: "Drying", value: "Line dry" },
          { key: "Ironing", value: "Low heat" },
          { key: "Bleaching", value: "Do not bleach" },
        ],
      },
    ],
    gallery: [
      "/images/sleeve-striped-t-shirt.png",
      "/images/coming-soon-2.png",
      "/images/coming-soon-3.png",
    ],
    reviews: [
      {
        author: "Alex F.",
        comment: "Nice sporty look, fits great.",
        rating: 4,
        postDate: "July 1, 2023",
      },
    ],
  },
  {
    id: 37,
    name: "T-SHIRT WITH TAPE DETAILS",
    description:
      "Modern t-shirt with side tape detailing for a sporty edge. Lightweight and ideal for everyday casual wear.",
    price: 115,
    basePrice: 130,
    discount: 12,
    rating: 5,
    quantity: 100,
    gender: "male",
    type: "T-shirts",
    brand: "Puma",
    style: "Casual",
    sizes: [
      { name: "Small", available: true },
      { name: "Medium", available: true },
      { name: "Large", available: true },
      { name: "X-Large", available: true },
    ],
    colors: [
      { name: "black", available: true },
      { name: "white", available: true },
      { name: "gray", available: true },
    ],
    details: [
      {
        title: "Product information",
        info: [
          { key: "gender", value: "male" },
          { key: "season", value: "Summer" },
          { key: "collection", value: "Sport Street 2025" },
          { key: "type", value: "T-shirts" },
        ],
      },
      {
        title: "Materials",
        info: [
          { key: "material", value: "100% Cotton" },
          { key: "Fabric Weight", value: "175 GSM" },
          { key: "Texture", value: "Soft Jersey" },
          { key: "Stretch", value: "Slight Stretch" },
        ],
      },
      {
        title: "Fit & Sizing",
        info: [
          { key: "Fit Type", value: "Regular Fit" },
          { key: "Length", value: "Standard" },
          { key: "Sleeve Type", value: "Short Sleeve" },
          { key: "Neckline", value: "Crew Neck" },
        ],
      },
      {
        title: "Care Instructions",
        info: [
          { key: "Washing", value: "Machine wash cold" },
          { key: "Drying", value: "Tumble dry low" },
          { key: "Ironing", value: "Low iron" },
          { key: "Bleaching", value: "Do not bleach" },
        ],
      },
    ],
    gallery: [
      "/images/t-shirt-with-tape-details.png",
      "/images/coming-soon-2.png",
      "/images/coming-soon-3.png",
    ],
    reviews: [
      {
        author: "Noah S.",
        comment: "The tape detail looks stylish and modern.",
        rating: 5,
        postDate: "August 18, 2023",
      },
    ],
  },
  {
    id: 38,
    name: "VERTICAL STRIPED SHIRT",
    description:
      "Stay effortlessly stylish with this vertical striped shirt. Designed for both casual and semi-formal occasions, offering a clean and modern look.",
    price: 145,
    basePrice: 160,
    discount: 10,
    rating: 5,
    quantity: 90,
    gender: "male",
    type: "Shirts",
    brand: "zara",
    style: "Casual",
    sizes: [
      { name: "Small", available: true },
      { name: "Medium", available: true },
      { name: "Large", available: true },
      { name: "X-Large", available: true },
      { name: "XX-Large", available: false },
    ],
    colors: [
      { name: "white", available: true },
      { name: "blue", available: true },
      { name: "black", available: true },
      { name: "gray", available: false },
    ],
    details: [
      {
        title: "Product information",
        info: [
          { key: "gender", value: "male" },
          { key: "season", value: "Spring/Summer" },
          { key: "collection", value: "Urban Line 2025" },
          { key: "type", value: "Shirts" },
        ],
      },
      {
        title: "Materials",
        info: [
          { key: "material", value: "100% Cotton" },
          { key: "Fabric Weight", value: "160 GSM" },
          { key: "Texture", value: "Smooth Poplin" },
          { key: "Stretch", value: "No Stretch" },
        ],
      },
      {
        title: "Fit & Sizing",
        info: [
          { key: "Fit Type", value: "Slim Fit" },
          { key: "Length", value: "Regular Length" },
          { key: "Sleeve Type", value: "Long Sleeve" },
          { key: "Collar", value: "Classic Turn-Down Collar" },
        ],
      },
      {
        title: "Care Instructions",
        info: [
          { key: "Washing", value: "Machine wash cold (30°C max)" },
          { key: "Drying", value: "Line dry recommended" },
          { key: "Ironing", value: "Iron on low heat" },
          { key: "Bleaching", value: "Do not bleach" },
        ],
      },
    ],
    gallery: [
      "/images/vertical-striped-shirt.png",
      "/images/coming-soon-2.png",
      "/images/coming-soon-3.png",
    ],
    reviews: [
      {
        author: "Leo P.",
        comment:
          "Love the pattern — makes me look taller and the fabric feels premium.",
        rating: 5,
        postDate: "August 10, 2024",
      },
      {
        author: "Derek K.",
        comment:
          "Perfect for both office and casual wear. Great color contrast too!",
        rating: 4,
        postDate: "August 15, 2024",
      },
    ],
  },
  {
    id: 1,
    name: "T-SHIRT WITH TAPE DETAILS",
    description:
      "This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.",
    price: 160,
    basePrice: 200,
    discount: 20,
    rating: 4.5,
    quantity: 100,
    gender: "unisex",
    type: "T-shirts",
    brand: "gucci",
    style: "Casual",
    sizes: [
      { name: "Small", available: true },
      { name: "Medium", available: true },
      { name: "Large", available: true },
      { name: "X-Large", available: false },
    ],
    colors: [
      { name: "brown", available: true },
      { name: "green", available: false },
      { name: "purple", available: true },
      { name: "black", available: false },
    ],
    details: [
      {
        title: "Product information",
        info: [
          { key: "gender", value: "unisex" },
          { key: "season", value: "All Season" },
          { key: "collection", value: "Spring/Summer 2025" },
          { key: "type", value: "T-shirts" },
        ],
      },
      {
        title: "Materials",
        info: [
          { key: "material", value: "100% Cotton" },
          { key: "Fabric Weight", value: "180 GSM" },
          { key: "Texture", value: "Soft, Breathable" },
          { key: "Stretch", value: "Slight Stretch" },
        ],
      },
      {
        title: "Fit & Sizing",
        info: [
          { key: "Fit Type", value: "Regular Fit" },
          { key: "Length", value: "Standard Length" },
          { key: "Sleeve Type", value: "Short Sleeve" },
          { key: "Neckline", value: "Round Neck" },
        ],
      },
      {
        title: "Care Instructions",
        info: [
          { key: "Washing", value: "Machine wash cold (30°C max)" },
          { key: "Drying", value: "Tumble dry low or hang dry" },
          { key: "Ironing", value: "Iron on low heat, avoid print area" },
          { key: "Bleaching", value: "Do not bleach" },
        ],
      },
    ],
    gallery: [
      "/images/coming-soon.png",
      "/images/coming-soon.png",
      "/images/coming-soon.png",
    ],
    reviews: [
      {
        author: "Samantha D.",
        comment:
          "I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. It's become my favorite go-to shirt.",
        rating: 5,
        postDate: "August 14, 2023",
      },
      {
        author: "Alex M.",
        comment:
          "The t-shirt exceeded my expectations! The colors are vibrant and the print quality is top-notch. Being a UI/UX designer myself, I'm quite picky about aesthetics, and this t-shirt definitely gets a thumbs up from me.",
        rating: 4,
        postDate: "August 15, 2023",
      },
      {
        author: "Ethan R.",
        comment:
          "This t-shirt is a must-have for anyone who appreciates good design. The minimalistic yet stylish pattern caught my eye, and the fit is perfect. I can see the designer's touch in every aspect of this shirt.",
        rating: 5,
        postDate: "August 16, 2023",
      },
    ],
  },
  {
    id: 2,
    name: "SKINNY FIT JEANS",
    description:
      "These skinny fit jeans are designed for a modern, sleek look. Made from premium stretch denim, they provide exceptional comfort and flexibility for all-day wear.",
    price: 240,
    basePrice: 260,
    discount: 0,
    rating: 3.5,
    quantity: 85,
    gender: "male",
    type: "Jeans",
    brand: "zara",
    style: "Casual",
    sizes: [
      { name: "Medium", available: true },
      { name: "Large", available: true },
      { name: "X-Large", available: true },
      { name: "XX-Large", available: false },
    ],
    colors: [
      { name: "blue", available: true },
      { name: "black", available: true },
      { name: "gray", available: false },
    ],
    details: [
      {
        title: "Product information",
        info: [
          { key: "gender", value: "male" },
          { key: "season", value: "All Season" },
          { key: "collection", value: "Fall/Winter 2025" },
          { key: "type", value: "Jeans" },
        ],
      },
      {
        title: "Materials",
        info: [
          { key: "material", value: "98% Cotton, 2% Elastane" },
          { key: "Fabric Weight", value: "340 GSM" },
          { key: "Texture", value: "Stretch Denim" },
          { key: "Stretch", value: "High Stretch" },
        ],
      },
      {
        title: "Fit & Sizing",
        info: [
          { key: "Fit Type", value: "Skinny Fit" },
          { key: "Length", value: "Full Length" },
          { key: "Rise", value: "Mid Rise" },
          { key: "Closure", value: "Button & Zipper" },
        ],
      },
      {
        title: "Care Instructions",
        info: [
          { key: "Washing", value: "Machine wash cold (30°C max)" },
          { key: "Drying", value: "Hang dry recommended" },
          { key: "Ironing", value: "Iron on medium heat" },
          { key: "Bleaching", value: "Do not bleach" },
        ],
      },
    ],
    gallery: [
      "/images/coming-soon.png",
      "/images/coming-soon-2.png",
      "/images/coming-soon-3.png",
    ],
    reviews: [
      {
        author: "Michael B.",
        comment:
          "Great jeans, but the fit is a bit tighter than I expected. Quality is good though.",
        rating: 4,
        postDate: "July 22, 2023",
      },
      {
        author: "Ryan T.",
        comment: "Comfortable and stylish. Perfect for casual outings.",
        rating: 3,
        postDate: "July 25, 2023",
      },
      {
        author: "Michael B.",
        comment:
          "Great jeans, but the fit is a bit tighter than I expected. Quality is good though.",
        rating: 4,
        postDate: "July 22, 2023",
      },
    ],
  },
  {
    id: 3,
    name: "CHECKERED FORMAL SHIRT",
    description:
      "Elevate your professional wardrobe with this classic checkered shirt. Perfect for office wear or formal occasions, featuring a sharp collar and premium cotton blend.",
    price: 180,
    basePrice: 180,
    discount: 0,
    rating: 4.5,
    quantity: 60,
    gender: "male",
    type: "Shirts",
    brand: "prada",
    style: "Formal",
    sizes: [
      { name: "Small", available: true },
      { name: "Medium", available: true },
      { name: "Large", available: true },
      { name: "X-Large", available: true },
      { name: "XX-Large", available: false },
    ],
    colors: [
      { name: "white", available: true },
      { name: "blue", available: true },
      { name: "pink", available: false },
    ],
    details: [
      {
        title: "Product information",
        info: [
          { key: "gender", value: "male" },
          { key: "season", value: "All Season" },
          { key: "collection", value: "Business 2025" },
          { key: "type", value: "Shirts" },
        ],
      },
      {
        title: "Materials",
        info: [
          { key: "material", value: "60% Cotton, 40% Polyester" },
          { key: "Fabric Weight", value: "140 GSM" },
          { key: "Texture", value: "Smooth, Wrinkle-resistant" },
          { key: "Stretch", value: "No Stretch" },
        ],
      },
      {
        title: "Fit & Sizing",
        info: [
          { key: "Fit Type", value: "Slim Fit" },
          { key: "Length", value: "Standard Length" },
          { key: "Sleeve Type", value: "Long Sleeve" },
          { key: "Collar", value: "Button-down Collar" },
        ],
      },
      {
        title: "Care Instructions",
        info: [
          { key: "Washing", value: "Machine wash warm (40°C max)" },
          { key: "Drying", value: "Hang dry recommended" },
          { key: "Ironing", value: "Iron on medium-high heat" },
          { key: "Bleaching", value: "Do not bleach" },
        ],
      },
    ],
    gallery: [
      "/images/coming-soon.png",
      "/images/coming-soon-2.png",
      "/images/coming-soon-3.png",
    ],
    reviews: [
      {
        author: "David K.",
        comment:
          "Excellent shirt for work. The fit is perfect and it doesn't wrinkle easily.",
        rating: 5,
        postDate: "September 5, 2023",
      },
      {
        author: "James P.",
        comment:
          "Good quality fabric and nice pattern. Very professional looking.",
        rating: 4,
        postDate: "September 10, 2023",
      },
      {
        author: "Robert L.",
        comment:
          "Fits well and looks great with a tie. Highly recommend for office wear.",
        rating: 5,
        postDate: "September 12, 2023",
      },
    ],
  },
  {
    id: 4,
    name: "GRADIENT GRAPHIC HOODIE",
    description:
      "Stay cozy and stylish with this premium gradient hoodie. Features a modern graphic design and ultra-soft fleece lining for ultimate comfort during cooler days.",
    price: 145,
    basePrice: 290,
    discount: 50,
    rating: 5,
    quantity: 120,
    gender: "unisex",
    type: "Hoodie",
    brand: "versace",
    style: "Casual",
    sizes: [
      { name: "X-Small", available: true },
      { name: "Small", available: true },
      { name: "Medium", available: true },
      { name: "Large", available: true },
      { name: "X-Large", available: true },
      { name: "XX-Large", available: false },
    ],
    colors: [
      { name: "purple", available: true },
      { name: "pink", available: true },
      { name: "black", available: true },
      { name: "red", available: false },
    ],
    details: [
      {
        title: "Product information",
        info: [
          { key: "gender", value: "unisex" },
          { key: "season", value: "Fall/Winter" },
          { key: "collection", value: "Urban Street 2025" },
          { key: "type", value: "Hoodie" },
        ],
      },
      {
        title: "Materials",
        info: [
          { key: "material", value: "80% Cotton, 20% Polyester" },
          { key: "Fabric Weight", value: "320 GSM" },
          { key: "Texture", value: "Soft Fleece Interior" },
          { key: "Stretch", value: "Moderate Stretch" },
        ],
      },
      {
        title: "Fit & Sizing",
        info: [
          { key: "Fit Type", value: "Relaxed Fit" },
          { key: "Length", value: "Hip Length" },
          { key: "Sleeve Type", value: "Long Sleeve" },
          { key: "Hood", value: "Adjustable Drawstring Hood" },
        ],
      },
      {
        title: "Care Instructions",
        info: [
          { key: "Washing", value: "Machine wash cold (30°C max)" },
          { key: "Drying", value: "Tumble dry low" },
          { key: "Ironing", value: "Do not iron print area" },
          { key: "Bleaching", value: "Do not bleach" },
        ],
      },
    ],
    gallery: [
      "/images/coming-soon.png",
      "/images/coming-soon-2.png",
      "/images/coming-soon-3.png",
    ],
    reviews: [
      {
        author: "Emily S.",
        comment:
          "This hoodie is amazing! So soft and warm. The gradient design is even prettier in person.",
        rating: 5,
        postDate: "October 3, 2023",
      },
      {
        author: "Chris W.",
        comment:
          "Great quality for the price. Very comfortable and fits perfectly.",
        rating: 5,
        postDate: "October 8, 2023",
      },
      {
        author: "Taylor M.",
        comment:
          "Love the colors and the material. Definitely buying another one!",
        rating: 5,
        postDate: "October 12, 2023",
      },
      {
        author: "Jordan H.",
        comment:
          "Perfect for chilly evenings. The fleece lining is incredibly soft.",
        rating: 5,
        postDate: "October 15, 2023",
      },
    ],
  },
  {
    id: 5,
    name: "ATHLETIC GYM SHORTS",
    description:
      "Designed for peak performance, these lightweight gym shorts feature moisture-wicking technology and stretchy fabric for unrestricted movement during intense workouts.",
    price: 120,
    basePrice: 150,
    discount: 20,
    rating: 4,
    quantity: 95,
    gender: "male",
    type: "Shorts",
    brand: "calvinKlein",
    style: "Gym",
    sizes: [
      { name: "Small", available: true },
      { name: "Medium", available: true },
      { name: "Large", available: true },
      { name: "X-Large", available: true },
    ],
    colors: [
      { name: "black", available: true },
      { name: "gray", available: true },
      { name: "blue", available: true },
      { name: "green", available: false },
    ],
    details: [
      {
        title: "Product information",
        info: [
          { key: "gender", value: "male" },
          { key: "season", value: "All Season" },
          { key: "collection", value: "Active Performance 2025" },
          { key: "type", value: "Shorts" },
        ],
      },
      {
        title: "Materials",
        info: [
          { key: "material", value: "88% Polyester, 12% Spandex" },
          { key: "Fabric Weight", value: "140 GSM" },
          { key: "Texture", value: "Smooth, Moisture-wicking" },
          { key: "Stretch", value: "4-Way Stretch" },
        ],
      },
      {
        title: "Fit & Sizing",
        info: [
          { key: "Fit Type", value: "Athletic Fit" },
          { key: "Length", value: "Above Knee" },
          { key: "Waistband", value: "Elastic with Drawstring" },
          { key: "Pockets", value: "Side Zip Pockets" },
        ],
      },
      {
        title: "Care Instructions",
        info: [
          { key: "Washing", value: "Machine wash cold (30°C max)" },
          { key: "Drying", value: "Hang dry or tumble dry low" },
          { key: "Ironing", value: "Do not iron" },
          { key: "Bleaching", value: "Do not bleach" },
        ],
      },
    ],
    gallery: [
      "/images/coming-soon.png",
      "/images/coming-soon-2.png",
      "/images/coming-soon-3.png",
    ],
    reviews: [
      {
        author: "Marcus J.",
        comment:
          "Great shorts for working out. They don't ride up and dry quickly.",
        rating: 4,
        postDate: "June 18, 2023",
      },
      {
        author: "Kevin L.",
        comment: "Comfortable and functional. Good value for money.",
        rating: 4,
        postDate: "June 22, 2023",
      },
    ],
  },
  {
    id: 6,
    name: "FLORAL PARTY DRESS SHIRT",
    description:
      "Make a statement at your next event with this vibrant floral print shirt. Perfect for parties and social gatherings, combining bold style with comfortable wear.",
    price: 95,
    basePrice: 190,
    discount: 50,
    rating: 4,
    quantity: 45,
    gender: "male",
    type: "Shirts",
    brand: "zara",
    style: "Party",
    sizes: [
      { name: "Small", available: false },
      { name: "Medium", available: true },
      { name: "Large", available: true },
      { name: "X-Large", available: true },
      { name: "XX-Large", available: true },
    ],
    colors: [
      { name: "red", available: true },
      { name: "yellow", available: true },
      { name: "orange", available: false },
      { name: "green", available: true },
    ],
    details: [
      {
        title: "Product information",
        info: [
          { key: "gender", value: "male" },
          { key: "season", value: "Spring/Summer" },
          { key: "collection", value: "Party Collection 2025" },
          { key: "type", value: "Shirts" },
        ],
      },
      {
        title: "Materials",
        info: [
          { key: "material", value: "100% Viscose" },
          { key: "Fabric Weight", value: "120 GSM" },
          { key: "Texture", value: "Smooth, Lightweight" },
          { key: "Stretch", value: "No Stretch" },
        ],
      },
      {
        title: "Fit & Sizing",
        info: [
          { key: "Fit Type", value: "Regular Fit" },
          { key: "Length", value: "Standard Length" },
          { key: "Sleeve Type", value: "Short Sleeve" },
          { key: "Collar", value: "Cuban Collar" },
        ],
      },
      {
        title: "Care Instructions",
        info: [
          { key: "Washing", value: "Hand wash cold or machine wash delicate" },
          { key: "Drying", value: "Hang dry only" },
          { key: "Ironing", value: "Iron on low heat" },
          { key: "Bleaching", value: "Do not bleach" },
        ],
      },
    ],
    gallery: [
      "/images/coming-soon.png",
      "/images/coming-soon-2.png",
      "/images/coming-soon-3.png",
    ],
    reviews: [
      {
        author: "Diego R.",
        comment:
          "Got so many compliments at the party! The colors are vibrant and eye-catching.",
        rating: 5,
        postDate: "May 10, 2023",
      },
      {
        author: "Anthony G.",
        comment: "Fun shirt for summer events. Fabric is light and breathable.",
        rating: 4,
        postDate: "May 15, 2023",
      },
      {
        author: "Lucas P.",
        comment:
          "Nice print but runs a bit large. Still a great shirt for the price.",
        rating: 3,
        postDate: "May 20, 2023",
      },
    ],
  },
  {
    id: 7,
    name: "CLASSIC WHITE CASUAL TEE",
    description:
      "A wardrobe essential - this classic white t-shirt features a perfect cut and premium cotton fabric. Simple, versatile, and comfortable for everyday wear.",
    price: 100,
    basePrice: 100,
    discount: 0,
    rating: 4.5,
    quantity: 200,
    gender: "female",
    type: "T-shirts",
    brand: "gucci",
    style: "Casual",
    sizes: [
      { name: "XX-Small", available: true },
      { name: "X-Small", available: true },
      { name: "Small", available: true },
      { name: "Medium", available: true },
      { name: "Large", available: true },
    ],
    colors: [
      { name: "white", available: true },
      { name: "black", available: true },
      { name: "gray", available: true },
    ],
    details: [
      {
        title: "Product information",
        info: [
          { key: "gender", value: "female" },
          { key: "season", value: "All Season" },
          { key: "collection", value: "Basics 2025" },
          { key: "type", value: "T-shirts" },
        ],
      },
      {
        title: "Materials",
        info: [
          { key: "material", value: "100% Organic Cotton" },
          { key: "Fabric Weight", value: "160 GSM" },
          { key: "Texture", value: "Soft, Breathable" },
          { key: "Stretch", value: "Slight Stretch" },
        ],
      },
      {
        title: "Fit & Sizing",
        info: [
          { key: "Fit Type", value: "Relaxed Fit" },
          { key: "Length", value: "Standard Length" },
          { key: "Sleeve Type", value: "Short Sleeve" },
          { key: "Neckline", value: "Crew Neck" },
        ],
      },
      {
        title: "Care Instructions",
        info: [
          { key: "Washing", value: "Machine wash cold (30°C max)" },
          { key: "Drying", value: "Tumble dry low or hang dry" },
          { key: "Ironing", value: "Iron on medium heat" },
          { key: "Bleaching", value: "Non-chlorine bleach only" },
        ],
      },
    ],
    gallery: [
      "/images/coming-soon.png",
      "/images/coming-soon-2.png",
      "/images/coming-soon-3.png",
    ],
    reviews: [
      {
        author: "Sarah J.",
        comment:
          "Perfect basic tee! Soft fabric and great quality. I bought three.",
        rating: 5,
        postDate: "March 5, 2023",
      },
      {
        author: "Nicole P.",
        comment: "Comfortable and fits true to size. Goes with everything.",
        rating: 4,
        postDate: "March 12, 2023",
      },
      {
        author: "Amanda K.",
        comment: "Exactly what I was looking for. Simple and well-made.",
        rating: 5,
        postDate: "March 18, 2023",
      },
    ],
  },
  {
    id: 8,
    name: "LOOSE FIT BERMUDA SHORTS",
    description:
      "Comfortable and casual, these Bermuda shorts are perfect for warm weather. Featuring a relaxed fit and breathable cotton blend for all-day comfort.",
    price: 80,
    basePrice: 100,
    discount: 20,
    rating: 3,
    quantity: 70,
    gender: "unisex",
    type: "Shorts",
    brand: "prada",
    style: "Casual",
    sizes: [
      { name: "Small", available: true },
      { name: "Medium", available: false },
      { name: "Large", available: true },
      { name: "X-Large", available: true },
      { name: "XX-Large", available: false },
    ],
    colors: [
      { name: "beige", available: true },
      { name: "green", available: true },
      { name: "blue", available: false },
      { name: "black", available: true },
    ],
    details: [
      {
        title: "Product information",
        info: [
          { key: "gender", value: "unisex" },
          { key: "season", value: "Spring/Summer" },
          { key: "collection", value: "Summer Vibes 2025" },
          { key: "type", value: "Shorts" },
        ],
      },
      {
        title: "Materials",
        info: [
          { key: "material", value: "65% Cotton, 35% Linen" },
          { key: "Fabric Weight", value: "200 GSM" },
          { key: "Texture", value: "Breathable, Textured" },
          { key: "Stretch", value: "No Stretch" },
        ],
      },
      {
        title: "Fit & Sizing",
        info: [
          { key: "Fit Type", value: "Loose Fit" },
          { key: "Length", value: "Knee Length" },
          { key: "Waistband", value: "Button & Zipper Closure" },
          { key: "Pockets", value: "Front & Back Pockets" },
        ],
      },
      {
        title: "Care Instructions",
        info: [
          { key: "Washing", value: "Machine wash cold (30°C max)" },
          { key: "Drying", value: "Hang dry recommended" },
          { key: "Ironing", value: "Iron on medium heat if needed" },
          { key: "Bleaching", value: "Do not bleach" },
        ],
      },
    ],
    gallery: [
      "/images/coming-soon.png",
      "/images/coming-soon-2.png",
      "/images/coming-soon-3.png",
    ],
    reviews: [
      {
        author: "Tom H.",
        comment:
          "Decent shorts for the price. Comfortable but the fit is very loose.",
        rating: 3,
        postDate: "April 8, 2023",
      },
      {
        author: "Jessica R.",
        comment: "Nice summer shorts. They're breathable but wrinkle easily.",
        rating: 3,
        postDate: "April 14, 2023",
      },
    ],
  },
  {
    id: 9,
    name: "SPORTS PERFORMANCE HOODIE",
    description:
      "Engineered for athletes, this performance hoodie combines moisture-wicking technology with thermal insulation. Perfect for pre and post-workout wear.",
    price: 210,
    basePrice: 300,
    discount: 30,
    rating: 4.5,
    quantity: 55,
    gender: "male",
    type: "Hoodie",
    brand: "versace",
    style: "Gym",
    sizes: [
      { name: "Medium", available: true },
      { name: "Large", available: true },
      { name: "X-Large", available: true },
      { name: "XX-Large", available: true },
      { name: "3X-Large", available: false },
    ],
    colors: [
      { name: "black", available: true },
      { name: "gray", available: true },
      { name: "blue", available: true },
      { name: "red", available: false },
    ],
    details: [
      {
        title: "Product information",
        info: [
          { key: "gender", value: "male" },
          { key: "season", value: "All Season" },
          { key: "collection", value: "Athletic Pro 2025" },
          { key: "type", value: "Hoodie" },
        ],
      },
      {
        title: "Materials",
        info: [
          { key: "material", value: "92% Polyester, 8% Elastane" },
          { key: "Fabric Weight", value: "280 GSM" },
          { key: "Texture", value: "Technical Fabric, Quick-dry" },
          { key: "Stretch", value: "4-Way Stretch" },
        ],
      },
      {
        title: "Fit & Sizing",
        info: [
          { key: "Fit Type", value: "Athletic Fit" },
          { key: "Length", value: "Standard Length" },
          { key: "Sleeve Type", value: "Raglan Long Sleeve" },
          { key: "Hood", value: "Performance Hood with Drawstring" },
        ],
      },
      {
        title: "Care Instructions",
        info: [
          { key: "Washing", value: "Machine wash cold (30°C max)" },
          { key: "Drying", value: "Tumble dry low" },
          { key: "Ironing", value: "Do not iron" },
          { key: "Bleaching", value: "Do not bleach" },
        ],
      },
    ],
    gallery: [
      "/images/coming-soon.png",
      "/images/coming-soon-2.png",
      "/images/coming-soon-3.png",
    ],
    reviews: [
      {
        author: "Brandon C.",
        comment:
          "Excellent quality! Keeps me warm during outdoor runs without overheating.",
        rating: 5,
        postDate: "November 2, 2023",
      },
      {
        author: "Nathan W.",
        comment:
          "Perfect gym hoodie. The material is fantastic and it fits great.",
        rating: 4,
        postDate: "November 8, 2023",
      },
      {
        author: "Eric D.",
        comment:
          "Good hoodie but a bit pricey. The performance features are worth it though.",
        rating: 4,
        postDate: "November 15, 2023",
      },
    ],
  },
  {
    id: 10,
    name: "ELEGANT FORMAL BLAZER",
    description:
      "Sophisticated and timeless, this formal blazer is tailored to perfection. Ideal for business meetings, formal events, and professional settings.",
    price: 400,
    basePrice: 500,
    discount: 20,
    rating: 5,
    quantity: 30,
    gender: "female",
    type: "Formal",
    brand: "zara",
    style: "Formal",
    sizes: [
      { name: "X-Small", available: true },
      { name: "Small", available: true },
      { name: "Medium", available: true },
      { name: "Large", available: false },
      { name: "X-Large", available: false },
    ],
    colors: [
      { name: "black", available: true },
      { name: "blue", available: true },
      { name: "gray", available: true },
      { name: "white", available: false },
    ],
    details: [
      {
        title: "Product information",
        info: [
          { key: "gender", value: "female" },
          { key: "season", value: "All Season" },
          { key: "collection", value: "Executive 2025" },
          { key: "type", value: "Formal" },
        ],
      },
      {
        title: "Materials",
        info: [
          { key: "material", value: "70% Wool, 30% Polyester" },
          { key: "Fabric Weight", value: "350 GSM" },
          { key: "Texture", value: "Smooth, Structured" },
          { key: "Stretch", value: "Slight Stretch" },
        ],
      },
      {
        title: "Fit & Sizing",
        info: [
          { key: "Fit Type", value: "Tailored Fit" },
          { key: "Length", value: "Hip Length" },
          { key: "Sleeve Type", value: "Long Sleeve" },
          { key: "Closure", value: "Single Button" },
        ],
      },
      {
        title: "Care Instructions",
        info: [
          { key: "Washing", value: "Dry clean only" },
          { key: "Drying", value: "Professional dry cleaning" },
          { key: "Ironing", value: "Steam iron on low heat" },
          { key: "Bleaching", value: "Do not bleach" },
        ],
      },
    ],
    gallery: [
      "/images/coming-soon.png",
      "/images/coming-soon-2.png",
      "/images/coming-soon-3.png",
    ],
    reviews: [
      {
        author: "Victoria L.",
        comment:
          "Absolutely stunning blazer! The fit is perfect and the quality is exceptional.",
        rating: 5,
        postDate: "December 5, 2023",
      },
      {
        author: "Catherine M.",
        comment:
          "Professional and elegant. Worth every penny. Fits like a dream.",
        rating: 5,
        postDate: "December 10, 2023",
      },
      {
        author: "Rachel B.",
        comment:
          "Beautiful blazer for work. Gets compliments every time I wear it.",
        rating: 5,
        postDate: "December 18, 2023",
      },
    ],
  },
  {
    id: 11,
    name: "STRIPED PARTY POLO",
    description:
      "Add some flair to your party wardrobe with this vibrant striped polo. Features bold colors and a comfortable fit for all-night celebrations.",
    price: 130,
    basePrice: 130,
    discount: 0,
    rating: 4,
    quantity: 80,
    gender: "male",
    type: "T-shirts",
    brand: "calvinKlein",
    style: "Party",
    sizes: [
      { name: "Small", available: true },
      { name: "Medium", available: true },
      { name: "Large", available: true },
      { name: "X-Large", available: false },
      { name: "XX-Large", available: false },
    ],
    colors: [
      { name: "red", available: true },
      { name: "green", available: true },
      { name: "purple", available: false },
      { name: "orange", available: true },
    ],
    details: [
      {
        title: "Product information",
        info: [
          { key: "gender", value: "male" },
          { key: "season", value: "Spring/Summer" },
          { key: "collection", value: "Night Out 2025" },
          { key: "type", value: "T-shirts" },
        ],
      },
      {
        title: "Materials",
        info: [
          { key: "material", value: "95% Cotton, 5% Spandex" },
          { key: "Fabric Weight", value: "190 GSM" },
          { key: "Texture", value: "Pique Cotton" },
          { key: "Stretch", value: "Slight Stretch" },
        ],
      },
      {
        title: "Fit & Sizing",
        info: [
          { key: "Fit Type", value: "Regular Fit" },
          { key: "Length", value: "Standard Length" },
          { key: "Sleeve Type", value: "Short Sleeve" },
          { key: "Collar", value: "Polo Collar with Buttons" },
        ],
      },
      {
        title: "Care Instructions",
        info: [
          { key: "Washing", value: "Machine wash cold (30°C max)" },
          { key: "Drying", value: "Tumble dry low" },
          { key: "Ironing", value: "Iron on medium heat" },
          { key: "Bleaching", value: "Do not bleach" },
        ],
      },
    ],
    gallery: [
      "/images/coming-soon.png",
      "/images/coming-soon-2.png",
      "/images/coming-soon-3.png",
    ],
    reviews: [
      {
        author: "Miguel S.",
        comment:
          "Fun and colorful! Great for summer parties and casual outings.",
        rating: 4,
        postDate: "July 3, 2023",
      },
      {
        author: "Jake M.",
        comment: "Nice polo with vibrant stripes. Comfortable and looks good.",
        rating: 4,
        postDate: "July 9, 2023",
      },
    ],
  },
  {
    id: 12,
    name: "CLASSIC DENIM JEANS",
    description:
      "Timeless and versatile, these classic denim jeans are a must-have in every wardrobe. Features a comfortable mid-rise fit and durable denim construction.",
    price: 220,
    basePrice: 275,
    discount: 20,
    rating: 4.5,
    quantity: 110,
    gender: "female",
    type: "Jeans",
    brand: "gucci",
    style: "Casual",
    sizes: [
      { name: "XX-Small", available: true },
      { name: "X-Small", available: true },
      { name: "Small", available: true },
      { name: "Medium", available: true },
      { name: "Large", available: true },
      { name: "X-Large", available: false },
    ],
    colors: [
      { name: "blue", available: true },
      { name: "black", available: true },
      { name: "white", available: false },
    ],
    details: [
      {
        title: "Product information",
        info: [
          { key: "gender", value: "female" },
          { key: "season", value: "All Season" },
          { key: "collection", value: "Denim Essentials 2025" },
          { key: "type", value: "Jeans" },
        ],
      },
      {
        title: "Materials",
        info: [
          { key: "material", value: "99% Cotton, 1% Elastane" },
          { key: "Fabric Weight", value: "320 GSM" },
          { key: "Texture", value: "Classic Denim" },
          { key: "Stretch", value: "Slight Stretch" },
        ],
      },
      {
        title: "Fit & Sizing",
        info: [
          { key: "Fit Type", value: "Straight Leg" },
          { key: "Length", value: "Full Length" },
          { key: "Rise", value: "Mid Rise" },
          { key: "Closure", value: "Button & Zipper" },
        ],
      },
      {
        title: "Care Instructions",
        info: [
          { key: "Washing", value: "Machine wash cold (30°C max)" },
          { key: "Drying", value: "Hang dry or tumble dry low" },
          { key: "Ironing", value: "Iron on medium heat if needed" },
          { key: "Bleaching", value: "Do not bleach" },
        ],
      },
    ],
    gallery: [
      "/images/coming-soon.png",
      "/images/coming-soon-2.png",
      "/images/coming-soon-3.png",
    ],
    reviews: [
      {
        author: "Michelle R.",
        comment:
          "Perfect jeans! They fit great and are so comfortable for everyday wear.",
        rating: 5,
        postDate: "February 12, 2023",
      },
      {
        author: "Lisa K.",
        comment: "Good quality denim. True to size and flattering fit.",
        rating: 4,
        postDate: "February 20, 2023",
      },
      {
        author: "Jennifer A.",
        comment:
          "Love these jeans! They go with everything and hold their shape well.",
        rating: 5,
        postDate: "February 28, 2023",
      },
    ],
  },
  {
    id: 13,
    name: "OVERSIZED GRAPHIC TEE",
    description:
      "Make a bold statement with this oversized graphic tee. Features eye-catching artwork and a relaxed, comfortable fit perfect for streetwear enthusiasts.",
    price: 112,
    basePrice: 140,
    discount: 20,
    rating: 4,
    quantity: 90,
    gender: "unisex",
    type: "T-shirts",
    brand: "prada",
    style: "Casual",
    sizes: [
      { name: "Small", available: true },
      { name: "Medium", available: true },
      { name: "Large", available: true },
      { name: "X-Large", available: true },
      { name: "XX-Large", available: true },
    ],
    colors: [
      { name: "black", available: true },
      { name: "white", available: true },
      { name: "gray", available: false },
      { name: "purple", available: true },
    ],
    details: [
      {
        title: "Product information",
        info: [
          { key: "gender", value: "unisex" },
          { key: "season", value: "All Season" },
          { key: "collection", value: "Street Art 2025" },
          { key: "type", value: "T-shirts" },
        ],
      },
      {
        title: "Materials",
        info: [
          { key: "material", value: "100% Cotton" },
          { key: "Fabric Weight", value: "220 GSM" },
          { key: "Texture", value: "Heavy Cotton, Soft" },
          { key: "Stretch", value: "No Stretch" },
        ],
      },
      {
        title: "Fit & Sizing",
        info: [
          { key: "Fit Type", value: "Oversized Fit" },
          { key: "Length", value: "Extended Length" },
          { key: "Sleeve Type", value: "Short Sleeve" },
          { key: "Neckline", value: "Ribbed Crew Neck" },
        ],
      },
      {
        title: "Care Instructions",
        info: [
          { key: "Washing", value: "Machine wash cold (30°C max)" },
          { key: "Drying", value: "Tumble dry low" },
          { key: "Ironing", value: "Iron inside out, avoid graphic" },
          { key: "Bleaching", value: "Do not bleach" },
        ],
      },
    ],
    gallery: [
      "/images/coming-soon.png",
      "/images/coming-soon-2.png",
      "/images/coming-soon-3.png",
    ],
    reviews: [
      {
        author: "Alex P.",
        comment:
          "Love the oversized fit! The graphic is really cool and unique.",
        rating: 4,
        postDate: "January 15, 2023",
      },
      {
        author: "Jordan K.",
        comment: "Great streetwear piece. Comfortable and stylish.",
        rating: 4,
        postDate: "January 22, 2023",
      },
    ],
  },
  {
    id: 14,
    name: "COMPRESSION GYM SHIRT",
    description:
      "Maximize your workout performance with this compression shirt. Designed to support muscles and enhance blood flow during intense training sessions.",
    price: 165,
    basePrice: 220,
    discount: 25,
    rating: 4.5,
    quantity: 65,
    gender: "male",
    type: "T-shirts",
    brand: "versace",
    style: "Gym",
    sizes: [
      { name: "Small", available: true },
      { name: "Medium", available: true },
      { name: "Large", available: true },
      { name: "X-Large", available: true },
      { name: "XX-Large", available: false },
    ],
    colors: [
      { name: "black", available: true },
      { name: "blue", available: true },
      { name: "red", available: true },
      { name: "green", available: false },
    ],
    details: [
      {
        title: "Product information",
        info: [
          { key: "gender", value: "male" },
          { key: "season", value: "All Season" },
          { key: "collection", value: "Peak Performance 2025" },
          { key: "type", value: "T-shirts" },
        ],
      },
      {
        title: "Materials",
        info: [
          { key: "material", value: "85% Nylon, 15% Spandex" },
          { key: "Fabric Weight", value: "200 GSM" },
          { key: "Texture", value: "Smooth, Compression" },
          { key: "Stretch", value: "High Stretch" },
        ],
      },
      {
        title: "Fit & Sizing",
        info: [
          { key: "Fit Type", value: "Compression Fit" },
          { key: "Length", value: "Standard Length" },
          { key: "Sleeve Type", value: "Long Sleeve" },
          { key: "Neckline", value: "Mock Neck" },
        ],
      },
      {
        title: "Care Instructions",
        info: [
          { key: "Washing", value: "Machine wash cold (30°C max)" },
          { key: "Drying", value: "Hang dry only" },
          { key: "Ironing", value: "Do not iron" },
          { key: "Bleaching", value: "Do not bleach" },
        ],
      },
    ],
    gallery: [
      "/images/coming-soon.png",
      "/images/coming-soon-2.png",
      "/images/coming-soon-3.png",
    ],
    reviews: [
      {
        author: "Tyler J.",
        comment:
          "Excellent compression shirt! Really helps during heavy lifting sessions.",
        rating: 5,
        postDate: "September 8, 2023",
      },
      {
        author: "Derek M.",
        comment:
          "Good quality and comfortable. Fits snug as expected for compression wear.",
        rating: 4,
        postDate: "September 15, 2023",
      },
      {
        author: "Chris L.",
        comment: "Perfect for the gym. Stays in place and wicks moisture well.",
        rating: 4,
        postDate: "September 22, 2023",
      },
    ],
  },
  {
    id: 15,
    name: "SILK PARTY BLOUSE",
    description:
      "Luxurious and elegant, this silk blouse is perfect for special occasions. Features delicate details and a flattering silhouette that turns heads.",
    price: 280,
    basePrice: 350,
    discount: 20,
    rating: 5,
    quantity: 40,
    gender: "female",
    type: "Shirts",
    brand: "zara",
    style: "Party",
    sizes: [
      { name: "XX-Small", available: false },
      { name: "X-Small", available: true },
      { name: "Small", available: true },
      { name: "Medium", available: true },
      { name: "Large", available: true },
    ],
    colors: [
      { name: "red", available: true },
      { name: "black", available: true },
      { name: "pink", available: true },
      { name: "white", available: false },
    ],
    details: [
      {
        title: "Product information",
        info: [
          { key: "gender", value: "female" },
          { key: "season", value: "All Season" },
          { key: "collection", value: "Evening Elegance 2025" },
          { key: "type", value: "Shirts" },
        ],
      },
      {
        title: "Materials",
        info: [
          { key: "material", value: "100% Silk" },
          { key: "Fabric Weight", value: "80 GSM" },
          { key: "Texture", value: "Smooth, Luxurious" },
          { key: "Stretch", value: "No Stretch" },
        ],
      },
      {
        title: "Fit & Sizing",
        info: [
          { key: "Fit Type", value: "Relaxed Fit" },
          { key: "Length", value: "Hip Length" },
          { key: "Sleeve Type", value: "Long Sleeve" },
          { key: "Neckline", value: "V-Neck" },
        ],
      },
      {
        title: "Care Instructions",
        info: [
          { key: "Washing", value: "Hand wash cold or dry clean" },
          { key: "Drying", value: "Lay flat to dry" },
          { key: "Ironing", value: "Iron on silk setting" },
          { key: "Bleaching", value: "Do not bleach" },
        ],
      },
    ],
    gallery: [
      "/images/coming-soon.png",
      "/images/coming-soon-2.png",
      "/images/coming-soon-3.png",
    ],
    reviews: [
      {
        author: "Sophia G.",
        comment:
          "Absolutely gorgeous! The silk feels amazing and it drapes beautifully.",
        rating: 5,
        postDate: "April 5, 2023",
      },
      {
        author: "Isabella N.",
        comment: "Perfect for dressy occasions. So elegant and well-made.",
        rating: 5,
        postDate: "April 12, 2023",
      },
      {
        author: "Emma D.",
        comment: "Love this blouse! Worth the investment for special events.",
        rating: 5,
        postDate: "April 20, 2023",
      },
    ],
  },
  {
    id: 16,
    name: "CARGO SHORTS UTILITY",
    description:
      "Functional and stylish cargo shorts with multiple pockets. Perfect for outdoor activities and casual adventures with their durable construction.",
    price: 140,
    basePrice: 175,
    discount: 20,
    rating: 4,
    quantity: 75,
    gender: "male",
    type: "Shorts",
    brand: "gucci",
    style: "Casual",
    sizes: [
      { name: "Small", available: true },
      { name: "Medium", available: true },
      { name: "Large", available: true },
      { name: "X-Large", available: true },
      { name: "XX-Large", available: true },
    ],
    colors: [
      { name: "green", available: true },
      { name: "black", available: true },
      { name: "beige", available: true },
      { name: "gray", available: false },
    ],
    details: [
      {
        title: "Product information",
        info: [
          { key: "gender", value: "male" },
          { key: "season", value: "Spring/Summer" },
          { key: "collection", value: "Outdoor Adventure 2025" },
          { key: "type", value: "Shorts" },
        ],
      },
      {
        title: "Materials",
        info: [
          { key: "material", value: "100% Cotton Canvas" },
          { key: "Fabric Weight", value: "280 GSM" },
          { key: "Texture", value: "Durable, Rugged" },
          { key: "Stretch", value: "No Stretch" },
        ],
      },
      {
        title: "Fit & Sizing",
        info: [
          { key: "Fit Type", value: "Regular Fit" },
          { key: "Length", value: "Above Knee" },
          { key: "Waistband", value: "Belt Loops with Button Closure" },
          { key: "Pockets", value: "Multiple Cargo Pockets" },
        ],
      },
      {
        title: "Care Instructions",
        info: [
          { key: "Washing", value: "Machine wash warm (40°C max)" },
          { key: "Drying", value: "Tumble dry medium" },
          { key: "Ironing", value: "Iron on high heat" },
          { key: "Bleaching", value: "Do not bleach" },
        ],
      },
    ],
    gallery: [
      "/images/coming-soon.png",
      "/images/coming-soon-2.png",
      "/images/coming-soon-3.png",
    ],
    reviews: [
      {
        author: "Mark R.",
        comment:
          "Great cargo shorts with plenty of pocket space. Very practical.",
        rating: 4,
        postDate: "May 18, 2023",
      },
      {
        author: "Steve H.",
        comment:
          "Solid quality and comfortable fit. Perfect for hiking and outdoor activities.",
        rating: 4,
        postDate: "May 25, 2023",
      },
    ],
  },
  {
    id: 17,
    name: "LUXURY CASHMERE HOODIE",
    description:
      "Indulge in ultimate comfort with this premium cashmere blend hoodie. Soft, warm, and incredibly luxurious for those who appreciate quality.",
    price: 560,
    basePrice: 700,
    discount: 20,
    rating: 5,
    quantity: 25,
    gender: "unisex",
    type: "Hoodie",
    brand: "calvinKlein",
    style: "Casual",
    sizes: [
      { name: "Small", available: true },
      { name: "Medium", available: true },
      { name: "Large", available: true },
      { name: "X-Large", available: false },
    ],
    colors: [
      { name: "gray", available: true },
      { name: "black", available: true },
      { name: "white", available: false },
      { name: "blue", available: true },
    ],
    details: [
      {
        title: "Product information",
        info: [
          { key: "gender", value: "unisex" },
          { key: "season", value: "Fall/Winter" },
          { key: "collection", value: "Luxury Lounge 2025" },
          { key: "type", value: "Hoodie" },
        ],
      },
      {
        title: "Materials",
        info: [
          { key: "material", value: "70% Cashmere, 30% Merino Wool" },
          { key: "Fabric Weight", value: "400 GSM" },
          { key: "Texture", value: "Ultra Soft, Luxurious" },
          { key: "Stretch", value: "Slight Stretch" },
        ],
      },
      {
        title: "Fit & Sizing",
        info: [
          { key: "Fit Type", value: "Regular Fit" },
          { key: "Length", value: "Standard Length" },
          { key: "Sleeve Type", value: "Long Sleeve" },
          { key: "Hood", value: "Lined Hood with Drawstring" },
        ],
      },
      {
        title: "Care Instructions",
        info: [
          { key: "Washing", value: "Dry clean only" },
          { key: "Drying", value: "Professional care recommended" },
          { key: "Ironing", value: "Do not iron" },
          { key: "Bleaching", value: "Do not bleach" },
        ],
      },
    ],
    gallery: [
      "/images/coming-soon.png",
      "/images/coming-soon-2.png",
      "/images/coming-soon-3.png",
    ],
    reviews: [
      {
        author: "Patricia W.",
        comment:
          "Incredibly soft and luxurious! Worth every penny. Best hoodie I've ever owned.",
        rating: 5,
        postDate: "November 28, 2023",
      },
      {
        author: "Richard T.",
        comment:
          "The quality is outstanding. So warm and comfortable for winter.",
        rating: 5,
        postDate: "December 2, 2023",
      },
      {
        author: "Margaret S.",
        comment: "Pure luxury. The cashmere is divine and the fit is perfect.",
        rating: 5,
        postDate: "December 8, 2023",
      },
    ],
  },
  {
    id: 18,
    name: "LINEN BEACH SHORTS",
    description:
      "Lightweight and breathable linen shorts perfect for beach days and tropical vacations. Features a relaxed fit and comfortable elastic waistband.",
    price: 90,
    basePrice: 120,
    discount: 25,
    rating: 4,
    quantity: 85,
    gender: "male",
    type: "Shorts",
    brand: "prada",
    style: "Casual",
    sizes: [
      { name: "Small", available: true },
      { name: "Medium", available: true },
      { name: "Large", available: true },
      { name: "X-Large", available: false },
    ],
    colors: [
      { name: "white", available: true },
      { name: "blue", available: true },
      { name: "yellow", available: true },
      { name: "green", available: false },
    ],
    details: [
      {
        title: "Product information",
        info: [
          { key: "gender", value: "male" },
          { key: "season", value: "Spring/Summer" },
          { key: "collection", value: "Beach Life 2025" },
          { key: "type", value: "Shorts" },
        ],
      },
      {
        title: "Materials",
        info: [
          { key: "material", value: "100% Linen" },
          { key: "Fabric Weight", value: "160 GSM" },
          { key: "Texture", value: "Lightweight, Breathable" },
          { key: "Stretch", value: "No Stretch" },
        ],
      },
      {
        title: "Fit & Sizing",
        info: [
          { key: "Fit Type", value: "Relaxed Fit" },
          { key: "Length", value: "Above Knee" },
          { key: "Waistband", value: "Elastic Waistband with Drawstring" },
          { key: "Pockets", value: "Side Pockets" },
        ],
      },
      {
        title: "Care Instructions",
        info: [
          { key: "Washing", value: "Machine wash cold (30°C max)" },
          { key: "Drying", value: "Hang dry recommended" },
          { key: "Ironing", value: "Iron on medium heat while damp" },
          { key: "Bleaching", value: "Do not bleach" },
        ],
      },
    ],
    gallery: [
      "/images/coming-soon.png",
      "/images/coming-soon-2.png",
      "/images/coming-soon-3.png",
    ],
    reviews: [
      {
        author: "Carlos M.",
        comment: "Perfect for hot summer days! Very comfortable and airy.",
        rating: 4,
        postDate: "June 8, 2023",
      },
      {
        author: "Daniel F.",
        comment: "Love the linen material. Great for beach vacations.",
        rating: 4,
        postDate: "June 15, 2023",
      },
    ],
  },
  {
    id: 19,
    name: "BUSINESS FORMAL TROUSERS",
    description:
      "Impeccably tailored formal trousers designed for the modern professional. Features a sharp crease and premium wool blend for a polished look.",
    price: 320,
    basePrice: 400,
    discount: 20,
    rating: 4.5,
    quantity: 50,
    gender: "male",
    type: "Formal",
    brand: "versace",
    style: "Formal",
    sizes: [
      { name: "Small", available: true },
      { name: "Medium", available: true },
      { name: "Large", available: true },
      { name: "X-Large", available: true },
      { name: "XX-Large", available: false },
    ],
    colors: [
      { name: "black", available: true },
      { name: "gray", available: true },
      { name: "blue", available: true },
    ],
    details: [
      {
        title: "Product information",
        info: [
          { key: "gender", value: "male" },
          { key: "season", value: "All Season" },
          { key: "collection", value: "Corporate Elite 2025" },
          { key: "type", value: "Formal" },
        ],
      },
      {
        title: "Materials",
        info: [
          { key: "material", value: "65% Wool, 35% Polyester" },
          { key: "Fabric Weight", value: "300 GSM" },
          { key: "Texture", value: "Smooth, Structured" },
          { key: "Stretch", value: "Slight Stretch" },
        ],
      },
      {
        title: "Fit & Sizing",
        info: [
          { key: "Fit Type", value: "Slim Fit" },
          { key: "Length", value: "Full Length" },
          { key: "Rise", value: "Mid Rise" },
          { key: "Closure", value: "Hook & Button Closure" },
        ],
      },
      {
        title: "Care Instructions",
        info: [
          { key: "Washing", value: "Dry clean only" },
          { key: "Drying", value: "Professional care recommended" },
          { key: "Ironing", value: "Steam press recommended" },
          { key: "Bleaching", value: "Do not bleach" },
        ],
      },
    ],
    gallery: [
      "/images/coming-soon.png",
      "/images/coming-soon-2.png",
      "/images/coming-soon-3.png",
    ],
    reviews: [
      {
        author: "William H.",
        comment:
          "Excellent trousers for the office. Perfect fit and high quality.",
        rating: 5,
        postDate: "October 5, 2023",
      },
      {
        author: "Henry P.",
        comment: "Professional and well-tailored. Worth the investment.",
        rating: 4,
        postDate: "October 12, 2023",
      },
      {
        author: "George K.",
        comment: "Great quality fabric and construction. Highly recommend.",
        rating: 5,
        postDate: "October 18, 2023",
      },
    ],
  },
  {
    id: 20,
    name: "VINTAGE BAND T-SHIRT",
    description:
      "Rock your style with this vintage-inspired band t-shirt. Features a distressed print and comfortable worn-in feel for authentic retro vibes.",
    price: 110,
    basePrice: 110,
    discount: 0,
    rating: 4.5,
    quantity: 120,
    gender: "unisex",
    type: "T-shirts",
    brand: "zara",
    style: "Casual",
    sizes: [
      { name: "X-Small", available: true },
      { name: "Small", available: true },
      { name: "Medium", available: true },
      { name: "Large", available: true },
      { name: "X-Large", available: true },
      { name: "XX-Large", available: false },
    ],
    colors: [
      { name: "black", available: true },
      { name: "gray", available: true },
      { name: "white", available: false },
    ],
    details: [
      {
        title: "Product information",
        info: [
          { key: "gender", value: "unisex" },
          { key: "season", value: "All Season" },
          { key: "collection", value: "Retro Revival 2025" },
          { key: "type", value: "T-shirts" },
        ],
      },
      {
        title: "Materials",
        info: [
          { key: "material", value: "100% Cotton" },
          { key: "Fabric Weight", value: "180 GSM" },
          { key: "Texture", value: "Soft, Vintage Feel" },
          { key: "Stretch", value: "Slight Stretch" },
        ],
      },
      {
        title: "Fit & Sizing",
        info: [
          { key: "Fit Type", value: "Regular Fit" },
          { key: "Length", value: "Standard Length" },
          { key: "Sleeve Type", value: "Short Sleeve" },
          { key: "Neckline", value: "Crew Neck" },
        ],
      },
      {
        title: "Care Instructions",
        info: [
          { key: "Washing", value: "Machine wash cold (30°C max)" },
          { key: "Drying", value: "Tumble dry low" },
          { key: "Ironing", value: "Iron inside out on low heat" },
          { key: "Bleaching", value: "Do not bleach" },
        ],
      },
    ],
    gallery: [
      "/images/coming-soon.png",
      "/images/coming-soon-2.png",
      "/images/coming-soon-3.png",
    ],
    reviews: [
      {
        author: "Austin R.",
        comment: "Love the vintage look! The distressed print is perfect.",
        rating: 5,
        postDate: "August 20, 2023",
      },
      {
        author: "Maya C.",
        comment:
          "Great quality and super comfortable. Perfect for casual wear.",
        rating: 4,
        postDate: "August 28, 2023",
      },
      {
        author: "Tyler B.",
        comment: "Awesome shirt! Fits well and the design is cool.",
        rating: 4,
        postDate: "September 3, 2023",
      },
    ],
  },
  {
    id: 21,
    name: "YOGA TRAINING HOODIE",
    description:
      "Designed for flexibility and movement, this yoga hoodie features soft, stretchy fabric perfect for meditation, yoga sessions, and light workouts.",
    price: 192,
    basePrice: 240,
    discount: 20,
    rating: 4.5,
    quantity: 60,
    gender: "female",
    type: "Hoodie",
    brand: "gucci",
    style: "Gym",
    sizes: [
      { name: "XX-Small", available: true },
      { name: "X-Small", available: true },
      { name: "Small", available: true },
      { name: "Medium", available: true },
      { name: "Large", available: false },
    ],
    colors: [
      { name: "pink", available: true },
      { name: "purple", available: true },
      { name: "gray", available: true },
      { name: "black", available: false },
    ],
    details: [
      {
        title: "Product information",
        info: [
          { key: "gender", value: "female" },
          { key: "season", value: "All Season" },
          { key: "collection", value: "Mindful Movement 2025" },
          { key: "type", value: "Hoodie" },
        ],
      },
      {
        title: "Materials",
        info: [
          { key: "material", value: "88% Polyester, 12% Spandex" },
          { key: "Fabric Weight", value: "240 GSM" },
          { key: "Texture", value: "Soft, Stretchy" },
          { key: "Stretch", value: "4-Way Stretch" },
        ],
      },
      {
        title: "Fit & Sizing",
        info: [
          { key: "Fit Type", value: "Fitted" },
          { key: "Length", value: "Hip Length" },
          { key: "Sleeve Type", value: "Long Sleeve" },
          { key: "Hood", value: "Lightweight Hood" },
        ],
      },
      {
        title: "Care Instructions",
        info: [
          { key: "Washing", value: "Machine wash cold (30°C max)" },
          { key: "Drying", value: "Hang dry or tumble dry low" },
          { key: "Ironing", value: "Do not iron" },
          { key: "Bleaching", value: "Do not bleach" },
        ],
      },
    ],
    gallery: [
      "/images/coming-soon.png",
      "/images/coming-soon-2.png",
      "/images/coming-soon-3.png",
    ],
    reviews: [
      {
        author: "Lily M.",
        comment: "Perfect for yoga class! So soft and stretchy, I love it.",
        rating: 5,
        postDate: "July 10, 2023",
      },
      {
        author: "Hannah S.",
        comment:
          "Great quality and very comfortable. The fit is flattering too.",
        rating: 4,
        postDate: "July 18, 2023",
      },
      {
        author: "Grace W.",
        comment:
          "Love this hoodie for my morning yoga sessions. Highly recommend!",
        rating: 5,
        postDate: "July 25, 2023",
      },
    ],
  },
  {
    id: 22,
    name: "DISTRESSED SLIM JEANS",
    description:
      "Edgy and stylish, these distressed slim jeans feature trendy rips and a modern fit. Perfect for creating contemporary casual looks.",
    price: 200,
    basePrice: 250,
    discount: 20,
    rating: 4,
    quantity: 95,
    gender: "female",
    type: "Jeans",
    brand: "prada",
    style: "Casual",
    sizes: [
      { name: "XX-Small", available: false },
      { name: "X-Small", available: true },
      { name: "Small", available: true },
      { name: "Medium", available: true },
      { name: "Large", available: true },
      { name: "X-Large", available: true },
    ],
    colors: [
      { name: "blue", available: true },
      { name: "black", available: true },
      { name: "gray", available: false },
    ],
    details: [
      {
        title: "Product information",
        info: [
          { key: "gender", value: "female" },
          { key: "season", value: "All Season" },
          { key: "collection", value: "Urban Edge 2025" },
          { key: "type", value: "Jeans" },
        ],
      },
      {
        title: "Materials",
        info: [
          { key: "material", value: "98% Cotton, 2% Elastane" },
          { key: "Fabric Weight", value: "330 GSM" },
          { key: "Texture", value: "Distressed Denim" },
          { key: "Stretch", value: "Moderate Stretch" },
        ],
      },
      {
        title: "Fit & Sizing",
        info: [
          { key: "Fit Type", value: "Slim Fit" },
          { key: "Length", value: "Full Length" },
          { key: "Rise", value: "Mid Rise" },
          { key: "Closure", value: "Button & Zipper" },
        ],
      },
      {
        title: "Care Instructions",
        info: [
          { key: "Washing", value: "Machine wash cold (30°C max)" },
          { key: "Drying", value: "Hang dry recommended" },
          { key: "Ironing", value: "Iron on low heat if needed" },
          { key: "Bleaching", value: "Do not bleach" },
        ],
      },
    ],
    gallery: [
      "/images/coming-soon.png",
      "/images/coming-soon-2.png",
      "/images/coming-soon-3.png",
    ],
    reviews: [
      {
        author: "Chloe T.",
        comment: "Love the distressed look! Fits perfectly and very trendy.",
        rating: 4,
        postDate: "May 5, 2023",
      },
      {
        author: "Zoe L.",
        comment:
          "Great jeans with a cool edgy vibe. Comfortable to wear all day.",
        rating: 4,
        postDate: "May 12, 2023",
      },
    ],
  },
  {
    id: 23,
    name: "SEQUIN PARTY DRESS TOP",
    description:
      "Shine bright at any party with this stunning sequin top. Features dazzling embellishments and a flattering cut for unforgettable nights out.",
    price: 168,
    basePrice: 240,
    discount: 30,
    rating: 5,
    quantity: 45,
    gender: "female",
    type: "T-shirts",
    brand: "calvinKlein",
    style: "Party",
    sizes: [
      { name: "X-Small", available: true },
      { name: "Small", available: true },
      { name: "Medium", available: true },
      { name: "Large", available: false },
    ],
    colors: [
      { name: "black", available: true },
      { name: "red", available: true },
      { name: "pink", available: true },
      { name: "purple", available: false },
    ],
    details: [
      {
        title: "Product information",
        info: [
          { key: "gender", value: "female" },
          { key: "season", value: "All Season" },
          { key: "collection", value: "Glamour Nights 2025" },
          { key: "type", value: "T-shirts" },
        ],
      },
      {
        title: "Materials",
        info: [
          { key: "material", value: "95% Polyester, 5% Spandex with Sequins" },
          { key: "Fabric Weight", value: "200 GSM" },
          { key: "Texture", value: "Sequined, Sparkly" },
          { key: "Stretch", value: "Slight Stretch" },
        ],
      },
      {
        title: "Fit & Sizing",
        info: [
          { key: "Fit Type", value: "Fitted" },
          { key: "Length", value: "Cropped Length" },
          { key: "Sleeve Type", value: "Sleeveless" },
          { key: "Neckline", value: "Scoop Neck" },
        ],
      },
      {
        title: "Care Instructions",
        info: [
          { key: "Washing", value: "Hand wash cold only" },
          { key: "Drying", value: "Lay flat to dry" },
          { key: "Ironing", value: "Do not iron" },
          { key: "Bleaching", value: "Do not bleach" },
        ],
      },
    ],
    gallery: [
      "/images/coming-soon.png",
      "/images/coming-soon-2.png",
      "/images/coming-soon-3.png",
    ],
    reviews: [
      {
        author: "Ava M.",
        comment: "Absolutely stunning! Got so many compliments at the party.",
        rating: 5,
        postDate: "December 15, 2023",
      },
      {
        author: "Mia K.",
        comment:
          "Beautiful top! The sequins are high quality and it fits perfectly.",
        rating: 5,
        postDate: "December 22, 2023",
      },
      {
        author: "Charlotte R.",
        comment: "Love it! Perfect for New Year's Eve celebrations.",
        rating: 5,
        postDate: "December 28, 2023",
      },
    ],
  },
  {
    id: 24,
    name: "CLASSIC OXFORD SHIRT",
    description:
      "A timeless wardrobe staple, this Oxford shirt combines traditional style with modern comfort. Perfect for formal and smart-casual occasions.",
    price: 150,
    basePrice: 150,
    discount: 0,
    rating: 4.5,
    quantity: 70,
    gender: "male",
    type: "Shirts",
    brand: "versace",
    style: "Formal",
    sizes: [
      { name: "Small", available: true },
      { name: "Medium", available: true },
      { name: "Large", available: true },
      { name: "X-Large", available: true },
      { name: "XX-Large", available: true },
    ],
    colors: [
      { name: "white", available: true },
      { name: "blue", available: true },
      { name: "pink", available: true },
    ],
    details: [
      {
        title: "Product information",
        info: [
          { key: "gender", value: "male" },
          { key: "season", value: "All Season" },
          { key: "collection", value: "Classic Essentials 2025" },
          { key: "type", value: "Shirts" },
        ],
      },
      {
        title: "Materials",
        info: [
          { key: "material", value: "100% Cotton Oxford" },
          { key: "Fabric Weight", value: "150 GSM" },
          { key: "Texture", value: "Textured, Durable" },
          { key: "Stretch", value: "No Stretch" },
        ],
      },
      {
        title: "Fit & Sizing",
        info: [
          { key: "Fit Type", value: "Regular Fit" },
          { key: "Length", value: "Standard Length" },
          { key: "Sleeve Type", value: "Long Sleeve" },
          { key: "Collar", value: "Button-down Collar" },
        ],
      },
      {
        title: "Care Instructions",
        info: [
          { key: "Washing", value: "Machine wash warm (40°C max)" },
          { key: "Drying", value: "Tumble dry low or hang dry" },
          { key: "Ironing", value: "Iron on medium-high heat" },
          { key: "Bleaching", value: "Do not bleach" },
        ],
      },
    ],
    gallery: [
      "/images/coming-soon.png",
      "/images/coming-soon-2.png",
      "/images/coming-soon-3.png",
    ],
    reviews: [
      {
        author: "Andrew S.",
        comment:
          "Excellent quality Oxford shirt. Perfect for work and weekends.",
        rating: 5,
        postDate: "March 8, 2023",
      },
      {
        author: "Benjamin L.",
        comment: "Great fit and quality. Very versatile shirt.",
        rating: 4,
        postDate: "March 15, 2023",
      },
      {
        author: "Samuel D.",
        comment: "Classic and well-made. A must-have in any wardrobe.",
        rating: 5,
        postDate: "March 22, 2023",
      },
    ],
  },
  {
    id: 25,
    name: "ATHLETIC MESH SHORTS",
    description:
      "Ultra-breathable mesh shorts designed for high-intensity training. Features moisture-wicking technology and maximum ventilation for peak performance.",
    price: 75,
    basePrice: 100,
    discount: 25,
    rating: 4,
    quantity: 100,
    gender: "unisex",
    type: "Shorts",
    brand: "zara",
    style: "Gym",
    sizes: [
      { name: "Small", available: true },
      { name: "Medium", available: true },
      { name: "Large", available: true },
      { name: "X-Large", available: true },
      { name: "XX-Large", available: true },
    ],
    colors: [
      { name: "black", available: true },
      { name: "blue", available: true },
      { name: "red", available: true },
      { name: "green", available: true },
    ],
    details: [
      {
        title: "Product information",
        info: [
          { key: "gender", value: "unisex" },
          { key: "season", value: "All Season" },
          { key: "collection", value: "Train Hard 2025" },
          { key: "type", value: "Shorts" },
        ],
      },
      {
        title: "Materials",
        info: [
          { key: "material", value: "100% Polyester Mesh" },
          { key: "Fabric Weight", value: "120 GSM" },
          { key: "Texture", value: "Mesh, Breathable" },
          { key: "Stretch", value: "Moderate Stretch" },
        ],
      },
      {
        title: "Fit & Sizing",
        info: [
          { key: "Fit Type", value: "Athletic Fit" },
          { key: "Length", value: "Above Knee" },
          { key: "Waistband", value: "Elastic with Drawstring" },
          { key: "Pockets", value: "Side Pockets" },
        ],
      },
      {
        title: "Care Instructions",
        info: [
          { key: "Washing", value: "Machine wash cold (30°C max)" },
          { key: "Drying", value: "Tumble dry low or air dry" },
          { key: "Ironing", value: "Do not iron" },
          { key: "Bleaching", value: "Do not bleach" },
        ],
      },
    ],
    gallery: [
      "/images/coming-soon.png",
      "/images/coming-soon-2.png",
      "/images/coming-soon-3.png",
    ],
    reviews: [
      {
        author: "Jason P.",
        comment: "Great shorts for basketball and running. Very breathable.",
        rating: 4,
        postDate: "April 10, 2023",
      },
      {
        author: "Ryan M.",
        comment: "Comfortable and lightweight. Perfect for intense workouts.",
        rating: 4,
        postDate: "April 18, 2023",
      },
    ],
  },
  {
    id: 26,
    name: "COZY KNIT CARDIGAN",
    description:
      "Wrap yourself in comfort with this cozy knit cardigan. Perfect for layering during cooler months with its soft texture and relaxed fit.",
    price: 280,
    basePrice: 350,
    discount: 20,
    rating: 5,
    quantity: 55,
    gender: "female",
    type: "Casual",
    brand: "gucci",
    style: "Casual",
    sizes: [
      { name: "X-Small", available: true },
      { name: "Small", available: true },
      { name: "Medium", available: true },
      { name: "Large", available: true },
      { name: "X-Large", available: false },
    ],
    colors: [
      { name: "beige", available: true },
      { name: "gray", available: true },
      { name: "pink", available: true },
      { name: "white", available: false },
    ],
    details: [
      {
        title: "Product information",
        info: [
          { key: "gender", value: "female" },
          { key: "season", value: "Fall/Winter" },
          { key: "collection", value: "Cozy Comfort 2025" },
          { key: "type", value: "Casual" },
        ],
      },
      {
        title: "Materials",
        info: [
          { key: "material", value: "60% Acrylic, 30% Wool, 10% Cashmere" },
          { key: "Fabric Weight", value: "380 GSM" },
          { key: "Texture", value: "Soft Knit" },
          { key: "Stretch", value: "Moderate Stretch" },
        ],
      },
      {
        title: "Fit & Sizing",
        info: [
          { key: "Fit Type", value: "Relaxed Fit" },
          { key: "Length", value: "Hip Length" },
          { key: "Sleeve Type", value: "Long Sleeve" },
          { key: "Closure", value: "Open Front" },
        ],
      },
      {
        title: "Care Instructions",
        info: [
          { key: "Washing", value: "Hand wash cold or dry clean" },
          { key: "Drying", value: "Lay flat to dry" },
          { key: "Ironing", value: "Do not iron" },
          { key: "Bleaching", value: "Do not bleach" },
        ],
      },
    ],
    gallery: [
      "/images/coming-soon.png",
      "/images/coming-soon-2.png",
      "/images/coming-soon-3.png",
    ],
    reviews: [
      {
        author: "Elizabeth T.",
        comment: "So soft and cozy! Perfect for chilly evenings. Love it!",
        rating: 5,
        postDate: "November 10, 2023",
      },
      {
        author: "Anna W.",
        comment:
          "Beautiful cardigan! The quality is excellent and it's so warm.",
        rating: 5,
        postDate: "November 18, 2023",
      },
      {
        author: "Laura H.",
        comment:
          "My favorite cardigan! Goes with everything and feels amazing.",
        rating: 5,
        postDate: "November 25, 2023",
      },
    ],
  },
];

export const indexedProducts = buildSearchIndex(mockProducts);
