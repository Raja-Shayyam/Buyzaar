import { createContext, useContext, useState } from "react";


export const StoragePoint = createContext();

export const StorageProvider = ({ children }) => {
  //* Products on main page
// const products = [
//   {
//     id: 1,
//     name: "Classic Cotton Shirt",
//     category: "Shirts",
//     price: "3,499",
//     qty: 1,
//     img: "https://images.unsplash.com/photo-1625934672939-3798deedf2eb?auto=format&fit=crop&q=80&w=627",
//     rating: 4.3,
//     description:
//       "A timeless cotton shirt crafted for comfort and breathability. Perfect for both casual and semi-formal looks.",
//     comments: [
//       { name: "Ali Raza", rating: 5, comment: "Super soft and fits really well!", avatar: "https://i.pravatar.cc/50?img=12" },
//       { name: "Hassan Malik", rating: 4, comment: "Good quality fabric for the price.", avatar: "https://i.pravatar.cc/50?img=5" },
//       { name: "Usman Tariq", rating: 4, comment: "Would recommend for daily wear.", avatar: "https://i.pravatar.cc/50?img=18" }
//     ],
//     gallery: [
//       "https://images.unsplash.com/photo-1625934672899-3798deedf2ea?auto=format&fit=crop&q=80&w=600",
//       "https://images.unsplash.com/photo-1618354696397-1a507d8bb1ce?auto=format&fit=crop&q=80&w=600",
//       "https://images.unsplash.com/photo-1620331311529-d4bbff798b14?auto=format&fit=crop&q=80&w=600"
//     ]
//   },
//   {
//     id: 2,
//     name: "Slim Fit Denim Shirt",
//     category: "Shirts",
//     price: "4,199",
//     qty: 1,
//     img: "https://images.unsplash.com/photo-1630355734650-55fe91e1e5c7?auto=format&fit=crop&q=80&w=1171",
//     rating: 4.6,
//     description:
//       "A premium slim-fit denim shirt with a modern finish. Stylish and durable for every occasion.",
//     comments: [
//       { name: "Saad Khan", rating: 5, comment: "Looks great with jeans!", avatar: "https://i.pravatar.cc/50?img=7" },
//       { name: "Zain Ali", rating: 4, comment: "Denim texture feels premium.", avatar: "https://i.pravatar.cc/50?img=15" },
//       { name: "Faisal Rafi", rating: 4, comment: "Color stays even after multiple washes.", avatar: "https://i.pravatar.cc/50?img=23" }
//     ],
//     gallery: [
//       "https://images.unsplash.com/photo-1589383568883-cbe16ee7c4c6?auto=format&fit=crop&q=80&w=600",
//       "https://images.unsplash.com/photo-1605993403794-0e2e5f2c8742?auto=format&fit=crop&q=80&w=600",
//       "https://images.unsplash.com/photo-1620812099440-cf0b4dfe96e0?auto=format&fit=crop&q=80&w=600"
//     ]
//   },
//   {
//     id: 3,
//     name: "Rolex Submariner Automatic Watch",
//     category: "Watches",
//     price: "2,750,000",
//     qty: 1,
//     img: "https://dgh-jewellers.com/cdn/shop/files/IMG_8884_900x.jpg?v=1728397593",
//     rating: 4.9,
//     description:
//       "Iconic luxury diving watch with precision Swiss automatic movement and timeless craftsmanship.",
//     comments: [
//       { name: "Ahmed Noor", rating: 5, comment: "An absolute masterpiece!", avatar: "https://i.pravatar.cc/50?img=3" },
//       { name: "Bilal Hussain", rating: 5, comment: "The detail and shine are unmatched.", avatar: "https://i.pravatar.cc/50?img=20" },
//       { name: "Omar Iqbal", rating: 5, comment: "Worth every penny.", avatar: "https://i.pravatar.cc/50?img=17" }
//     ],
//     gallery: [
//       "https://dgh-jewellers.com/cdn/shop/files/IMG_8891_900x.jpg?v=1728397593",
//       "https://dgh-jewellers.com/cdn/shop/files/IMG_8879_900x.jpg?v=1728397593",
//       "https://dgh-jewellers.com/cdn/shop/files/IMG_8882_900x.jpg?v=1728397593"
//     ]
//   },
//   {
//     id: 4,
//     name: "Zip-Up Fleece Hoodie",
//     category: "Hoodies",
//     price: "4,799",
//     qty: 1,
//     img: "https://images.unsplash.com/photo-1661110546899-732bffb4cb85?auto=format&fit=crop&q=80&w=880",
//     rating: 4.2,
//     description:
//       "Warm and cozy fleece hoodie ideal for chilly evenings. Designed with soft lining and durable zippers.",
//     comments: [
//       { name: "Maryam Khan", rating: 5, comment: "Very soft interior!", avatar: "https://i.pravatar.cc/50?img=10" },
//       { name: "Waleed Aslam", rating: 4, comment: "A bit loose fit but comfy.", avatar: "https://i.pravatar.cc/50?img=24" },
//       { name: "Farhan Ali", rating: 4, comment: "Perfect for winters.", avatar: "https://i.pravatar.cc/50?img=6" }
//     ],
//     gallery: [
//       "https://images.unsplash.com/photo-1627044836811-04f9d8ee0b4b?auto=format&fit=crop&q=80&w=600",
//       "https://images.unsplash.com/photo-1634220760081-54f97bd7859e?auto=format&fit=crop&q=80&w=600",
//       "https://images.unsplash.com/photo-1627574685267-5bfc321c99d1?auto=format&fit=crop&q=80&w=600"
//     ]
//   },
//   {
//     id: 5,
//     name: "Luxury Leather Watch",
//     category: "Watches",
//     price: "18,999",
//     qty: 1,
//     img: "https://images.unsplash.com/photo-1701532387119-7ef6c3de106f?auto=format&fit=crop&q=80&w=687",
//     rating: 4.5,
//     description:
//       "Elegant timepiece featuring a genuine leather strap and precise quartz movement.",
//     comments: [
//       { name: "Sara Imran", rating: 5, comment: "Looks way more expensive than it is!", avatar: "https://i.pravatar.cc/50?img=9" },
//       { name: "Taimoor Bashir", rating: 4, comment: "Excellent finish and comfort.", avatar: "https://i.pravatar.cc/50?img=14" },
//       { name: "Yasir Junaid", rating: 5, comment: "Goes well with formals.", avatar: "https://i.pravatar.cc/50?img=2" }
//     ],
//     gallery: [
//       "https://images.unsplash.com/photo-1601218871752-7a65a93e8c38?auto=format&fit=crop&q=80&w=600",
//       "https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?auto=format&fit=crop&q=80&w=600",
//       "https://images.unsplash.com/photo-1601132355985-bcf371efbba7?auto=format&fit=crop&q=80&w=600"
//     ]
//   },
//   {
//     id: 6,
//     name: "Oversized Graphic Hoodie",
//     category: "Hoodies",
//     price: "5,299",
//     qty: 1,
//     img: "https://images.unsplash.com/photo-1603808033192-082d6919d864?auto=format&fit=crop&q=80&w=600",
//     rating: 4.4,
//     description:
//       "Trendy oversized hoodie featuring a bold print and heavy-weight cotton blend.",
//     comments: [
//       { name: "Areeba Khalid", rating: 5, comment: "Love the print! Super comfortable.", avatar: "https://i.pravatar.cc/50?img=25" },
//       { name: "Hamza Rizwan", rating: 4, comment: "Thick and warm material.", avatar: "https://i.pravatar.cc/50?img=16" },
//       { name: "Junaid Yousaf", rating: 4, comment: "Slightly oversized but I like the style.", avatar: "https://i.pravatar.cc/50?img=21" }
//     ],
//     gallery: [
//       "https://images.unsplash.com/photo-1618354697229-f84b7f1c1a2d?auto=format&fit=crop&q=80&w=600",
//       "https://images.unsplash.com/photo-1606921868497-7b32a0b3baf5?auto=format&fit=crop&q=80&w=600",
//       "https://images.unsplash.com/photo-1603808025577-3ecf7d6e00c7?auto=format&fit=crop&q=80&w=600"
//     ]
//   },
//   {
//     id: 7,
//     name: "ChronoSport Wrist Watch",
//     category: "Watches",
//     price: "14,499",
//     qty: 1,
//     img: "https://images.unsplash.com/photo-1508057198894-247b23fe5ade?auto=format&fit=crop&q=80&w=600",
//     rating: 4.7,
//     description:
//       "Sporty analog watch with a chronograph function and stainless steel strap. Built for endurance and precision.",
//     comments: [
//       { name: "Asad Mehmood", rating: 5, comment: "Perfect balance of sporty and elegant!", avatar: "https://i.pravatar.cc/50?img=8" },
//       { name: "Faiza Tariq", rating: 4, comment: "Heavy but feels premium.", avatar: "https://i.pravatar.cc/50?img=11" },
//       { name: "Rizwan Haider", rating: 5, comment: "Accurate timekeeping and stylish.", avatar: "https://i.pravatar.cc/50?img=27" }
//     ],
//     gallery: [
//       "https://images.unsplash.com/photo-1599941630667-f9cb3e4dc1b2?auto=format&fit=crop&q=80&w=600",
//       "https://images.unsplash.com/photo-1517821099609-2f59a23a2b64?auto=format&fit=crop&q=80&w=600",
//       "https://images.unsplash.com/photo-1603190287605-76d4cb2755c4?auto=format&fit=crop&q=80&w=600"
//     ]
//   },
//   {
//     id: 8,
//     name: "Casual Linen Shirt",
//     category: "Shirts",
//     price: "3,999",
//     qty: 1,
//     img: "https://images.unsplash.com/photo-1626814026161-b5e3c4f0c2de?auto=format&fit=crop&q=80&w=600",
//     rating: 4.1,
//     description:
//       "Breathable and lightweight linen shirt that keeps you cool and stylish throughout the day.",
//     comments: [
//       { name: "Rafay Zubair", rating: 5, comment: "Super comfy and airy.", avatar: "https://i.pravatar.cc/50?img=4" },
//       { name: "Hiba Shah", rating: 4, comment: "Perfect summer shirt.", avatar: "https://i.pravatar.cc/50?img=26" },
//       { name: "Nouman Gill", rating: 4, comment: "A bit thin but great for hot weather.", avatar: "https://i.pravatar.cc/50?img=28" }
//     ],
//     gallery: [
//       "https://images.unsplash.com/photo-1585914267132-22c52865e3e3?auto=format&fit=crop&q=80&w=600",
//       "https://images.unsplash.com/photo-1593032457860-3b9a7c1a6e07?auto=format&fit=crop&q=80&w=600",
//       "https://images.unsplash.com/photo-1594223274512-ad480373b2a3?auto=format&fit=crop&q=80&w=600"
//     ]
//   },
//   {
//     id: 9,
//     name: "Minimalist Analog Watch",
//     category: "Watches",
//     price: "8,499",
//     qty: 1,
//     img: "https://images.unsplash.com/photo-1599941630667-f9cb3e4dc1b2?auto=format&fit=crop&q=80&w=687",
//     rating: 4.5,
//     description:
//       "A clean, minimalist design featuring a brushed steel case and adjustable leather strap.",
//     comments: [
//       { name: "Mehreen Akhtar", rating: 5, comment: "Love the simplicity!", avatar: "https://i.pravatar.cc/50?img=29" },
//       { name: "Imran Asghar", rating: 4, comment: "Good quality, elegant look.", avatar: "https://i.pravatar.cc/50?img=30" },
//       { name: "Kashan Siddiq", rating: 4, comment: "Understated and classy.", avatar: "https://i.pravatar.cc/50?img=31" }
//     ],
//     gallery: [
//       "https://images.unsplash.com/photo-1508057198894-247b23fe5ade?auto=format&fit=crop&q=80&w=600",
//       "https://images.unsplash.com/photo-1617137968427-85924c800b48?auto=format&fit=crop&q=80&w=600",
//       "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=600"
//     ]
//   },
//   {
//     id: 10,
//     name: "Pullover Hoodie",
//     category: "Hoodies",
//     price: "3,999",
//     qty: 1,
//     img: "https://images.unsplash.com/photo-1603808033188-5b5e9d6c9478?auto=format&fit=crop&q=80&w=600",
//     rating: 4.3,
//     description:
//       "Soft pullover hoodie made from cotton fleece. Ideal for layering and casual wear.",
//     comments: [
//       { name: "Fatima Nawaz", rating: 5, comment: "Stylish and warm!", avatar: "https://i.pravatar.cc/50?img=32" },
//       { name: "Haider Jutt", rating: 4, comment: "Fits nicely, good material.", avatar: "https://i.pravatar.cc/50?img=33" },
//       { name: "Umair Javed", rating: 4, comment: "Perfect for everyday use.", avatar: "https://i.pravatar.cc/50?img=34" }
//     ],
//     gallery: [
//       "https://images.unsplash.com/photo-1618354696408-510ceccc5d54?auto=format&fit=crop&q=80&w=600",
//       "https://images.unsplash.com/photo-1627044836794-b16e6cb07a43?auto=format&fit=crop&q=80&w=600",
//       "https://images.unsplash.com/photo-1620331311546-7c9b0e2e38b5?auto=format&fit=crop&q=80&w=600"
//     ]
//   },
//   {
//     id: 11,
//     name: "Formal Dress Shirt",
//     category: "Shirts",
//     price: "5,499",
//     qty: 1,
//     img: "https://images.unsplash.com/photo-1626814026161-b5e3c4f0c2de?auto=format&fit=crop&q=80&w=600",
//     rating: 4.8,
//     description:
//       "A sharp, crisp formal shirt designed for a tailored fit and professional look.",
//     comments: [
//       { name: "Adeel Ahmed", rating: 5, comment: "Looks great with suits!", avatar: "https://i.pravatar.cc/50?img=35" },
//       { name: "Salman Rauf", rating: 4, comment: "Premium feel and perfect stitching.", avatar: "https://i.pravatar.cc/50?img=36" },
//       { name: "Irfan Baig", rating: 5, comment: "Quality exceeds expectations.", avatar: "https://i.pravatar.cc/50?img=37" }
//     ],
//     gallery: [
//       "https://images.unsplash.com/photo-1606813903445-8c0f9e6a5a6d?auto=format&fit=crop&q=80&w=600",
//       "https://images.unsplash.com/photo-1621622294863-93c1fc9c8458?auto=format&fit=crop&q=80&w=600",
//       "https://images.unsplash.com/photo-1599941630667-f9cb3e4dc1b2?auto=format&fit=crop&q=80&w=600"
//     ]
//   },
//   {
//     id: 12,
//     name: "Classic Black Hoodie",
//     category: "Hoodies",
//     price: "4,299",
//     qty: 1,
//     img: "https://images.unsplash.com/photo-1603808033192-082d6919d864?auto=format&fit=crop&q=80&w=600",
//     rating: 4.4,
//     description:
//       "Minimal black hoodie made with cotton-poly blend,



const products = [
  {
    id: 1,
    name: "Classic Cotton Shirt",
    category: "Shirts",
    price: "3,499",
    qty: 1,
    img: "https://images.unsplash.com/photo-1625934672939-3798deedf2eb?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=627",
    rating: 4.3,
    description:
      "A timeless cotton shirt crafted for comfort and breathability. Perfect for both casual and semi-formal looks.",
    comments: [
      {
        name: "Ali Raza",
        rating: 5,
        comment: "Super soft and fits really well!",
        avatar: "https://i.pravatar.cc/50?img=12"
      },
      {
        name: "Sophia Lee",
        rating: 4,
        comment: "Good quality fabric for the price.",
        avatar: "https://i.pravatar.cc/50?img=34"
      },
      {
        name: "John Smith",
        rating: 5,
        comment: "Would recommend for daily wear.",
        avatar: "https://i.pravatar.cc/50?img=3"
      }
    ],
    gallery: [
      "https://images.unsplash.com/photo-1670955107412-577b4da66a49?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170",
      "https://images.unsplash.com/photo-1739487599425-0283f6f0ce4e?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687",
      "https://plus.unsplash.com/premium_photo-1678218594563-9fe0d16c6838?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687"
    ]
  },
  {
    id: 2,
    name: "Slim Fit Denim Shirt",
    category: "Shirts",
    price: "4,199",
    qty: 1,
    img: "https://images.unsplash.com/photo-1630355734650-55fe91e1e5c7?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=1171",
    rating: 4.6,
    description:
      "A premium slim-fit denim shirt with a modern finish. Stylish and durable for every occasion.",
    comments: [
      {
        name: "Mia Chen",
        rating: 5,
        comment: "Looks great with jeans!",
        avatar: "https://i.pravatar.cc/50?img=25"
      },
      {
        name: "Lucas Brown",
        rating: 4,
        comment: "Denim texture feels premium.",
        avatar: "https://i.pravatar.cc/50?img=45"
      },
      {
        name: "Emily White",
        rating: 5,
        comment: "Color stays even after multiple washes.",
        avatar: "https://i.pravatar.cc/50?img=19"
      }
    ],
    gallery: [
      "https://plus.unsplash.com/premium_photo-1691367279376-624618a5aac9?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170",
      "https://images.unsplash.com/photo-1666358086199-975d5538947c?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170",
      "https://plus.unsplash.com/premium_photo-1682096256314-4e400282610e?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2070"
    ]
  },
  {
    id: 3,
    name: "Rolex Submariner Automatic Watch",
    category: "Watches",
    price: "2,750,000",
    qty: 1,
    img: "https://img.chrono24.com/images/uhren/gttdymiep78k-t62moqpj0smjqqnz8i4nsl5m-ExtraLarge.jpg",
    rating: 4.9,
    description:
      "Iconic luxury diving watch with precision Swiss automatic movement and timeless craftsmanship.",
    comments: [
      {
        name: "Arjun Patel",
        rating: 5,
        comment: "An absolute masterpiece!",
        avatar: "https://i.pravatar.cc/50?img=28"
      },
      {
        name: "Nina Gomez",
        rating: 5,
        comment: "The detail and shine are unmatched.",
        avatar: "https://i.pravatar.cc/50?img=7"
      },
      {
        name: "William Clark",
        rating: 5,
        comment: "Worth every penny.",
        avatar: "https://i.pravatar.cc/50?img=22"
      }
    ],
    gallery: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSu-E2CrYls_JZ_pcqOolfU94YLpd5PdnQvbA&s",
      'https://i.pinimg.com/736x/3c/fc/9e/3cfc9e65d0a23f417c9bd2c54cfeed5a.jpg',
      "https://dgh-jewellers.com/cdn/shop/files/IMG_8884_900x.jpg?v=1728397593"
    ]
  },
  {
    id: 4,
    name: "Zip-Up Fleece Hoodie",
    category: "Hoodies",
    price: "4,799",
    qty: 1,
    img: "https://images.unsplash.com/photo-1661110546899-732bffb4cb85?auto=format&fit=crop&q=80&w=880",
    rating: 4.2,
    description:
      "Warm and cozy fleece hoodie ideal for chilly evenings. Designed with soft lining and durable zippers.",
    comments: [
      {
        name: "Liam Jones",
        rating: 4,
        comment: "Very soft interior!",
        avatar: "https://i.pravatar.cc/50?img=37"
      },
      {
        name: "Ava Williams",
        rating: 3,
        comment: "A bit loose fit but comfy.",
        avatar: "https://i.pravatar.cc/50?img=41"
      },
      {
        name: "Ethan Davis",
        rating: 5,
        comment: "Perfect for winters.",
        avatar: "https://i.pravatar.cc/50?img=9"
      }
    ],
    gallery: [
      "https://images.unsplash.com/photo-1621862904972-f5913f294d2e?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170",
      "https://images.unsplash.com/photo-1641839451594-e3293357422a?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687",
      "https://plus.unsplash.com/premium_photo-1759736767175-765e3320dcaf?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170"
    ]
  },
  {
    id: 5,
    name: "Luxury Leather Watch",
    category: "Watches",
    price: "18,999",
    qty: 1,
    img: "https://images.unsplash.com/photo-1618215649907-b51d8accb1ec?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1331",
    rating: 4.5,
    description:
      "Elegant timepiece featuring a genuine leather strap and precise quartz movement.",
    comments: [
      {
        name: "Zara Khan",
        rating: 5,
        comment: "Looks way more expensive than it is!",
        avatar: "https://i.pravatar.cc/50?img=32"
      },
      {
        name: "Noah Miller",
        rating: 4,
        comment: "Excellent finish and comfort.",
        avatar: "https://i.pravatar.cc/50?img=13"
      },
      {
        name: "Olivia Green",
        rating: 5,
        comment: "Goes well with formals.",
        avatar: "https://i.pravatar.cc/50?img=16"
      }
    ],
    gallery: [
      "https://images.unsplash.com/photo-1701532387119-7ef6c3de106f?auto=format&fit=crop&q=80&w=687",
      "https://images.unsplash.com/photo-1643310791165-c3d14834df67?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=627",
      "https://images.unsplash.com/photo-1604242692760-2f7b0c26856d?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1169"
    ]
  },
  {
    id: 6,
    name: "Minimalist Silver Watch",
    category: "Watches",
    price: "12,499",
    qty: 1,
    img: "https://images.unsplash.com/photo-1607299008952-7179a3f826f7?auto=format&fit=crop&q=80&w=1074",
    rating: 4.4,
    description:
      "A clean, minimalist design with polished silver finishing and accurate Japanese movement.",
    comments: [
      {
        name: "David Lee",
        rating: 5,
        comment: "Stylish and light on the wrist.",
        avatar: "https://i.pravatar.cc/50?img=38"
      },
      {
        name: "Emma Martinez",
        rating: 4,
        comment: "Perfect minimalist piece.",
        avatar: "https://i.pravatar.cc/50?img=10"
      },
      {
        name: "James Wilson",
        rating: 5,
        comment: "Great for office wear.",
        avatar: "https://i.pravatar.cc/50?img=23"
      }
    ],
    gallery: [
      "https://plus.unsplash.com/premium_photo-1728582543518-5cc829c512d4?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170",
      "https://images.unsplash.com/photo-1704783354115-a59dcf0bd2ac?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2070",
      "https://images.unsplash.com/photo-1642034434365-6c8e8f6de1db?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1866"
    ]
  },
  {
    id: 7,
    name: "Graphic Streetwear Hoodie",
    category: "Hoodies",
    price: "6,099",
    qty: 1,
    img: "https://images.unsplash.com/photo-1639005077913-b2f9eb7e6ead?auto=format&fit=crop&q=80&w=800",
    rating: 4.7,
    description:
      "Trendy streetwear hoodie with high-quality graphic prints. Made from durable and breathable cotton blend.",
    comments: [
      {
        name: "Samuel Turner",
        rating: 5,
        comment: "Cool graphics!",
        avatar: "https://i.pravatar.cc/50?img=44"
      },
      {
        name: "Isabella Roberts",
        rating: 5,
        comment: "Quality print that doesn’t fade.",
        avatar: "https://i.pravatar.cc/50?img=39"
      },
      {
        name: "Henry Walker",
        rating: 4,
        comment: "Stylish and fits perfectly.",
        avatar: "https://i.pravatar.cc/50?img=48"
      }
    ],
    gallery: [
      "https://images.unsplash.com/photo-1713825034636-660157b75c91?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1169",
      "https://plus.unsplash.com/premium_photo-1692650759344-84ff0f26ff1e?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170",
      "https://images.unsplash.com/photo-1558014356-f7c41bc744f7?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170"
    ]
  },
  {
    id: 8,
    name: "Formal White Shirt",
    category: "Formal Shirts",
    price: "3,199",
    qty: 1,
    img: "https://images.unsplash.com/photo-1602810319250-a663f0af2f75?auto=format&fit=crop&q=80&w=800",
    rating: 4.5,
    description:
      "Elegant white formal shirt crafted from breathable cotton. Perfect for office and events.",
    comments: [
      {
        name: "Grace Baker",
        rating: 5,
        comment: "Crisp and elegant look.",
        avatar: "https://i.pravatar.cc/50?img=20"
      },
      {
        name: "Jack Young",
        rating: 4,
        comment: "Good stitching quality.",
        avatar: "https://i.pravatar.cc/50?img=47"
      },
      {
        name: "Chloe Harris",
        rating: 4,
        comment: "Fits true to size.",
        avatar: "https://i.pravatar.cc/50?img=14"
      }
    ],
    gallery: [
      "https://plus.unsplash.com/premium_photo-1723662277377-41d88486f6f0?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170",
      "https://plus.unsplash.com/premium_photo-1723925110801-110c00d392a3?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170",
      "https://images.unsplash.com/photo-1603252109303-2751441dd157?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687"
    ]
  },
  {
    id: 9,
    name: "Chronograph Sports Watch",
    category: "Smart Watches",
    price: "22,999",
    qty: 1,
    img: "https://images.unsplash.com/photo-1700647235832-58f018fcc79f?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170",
    rating: 4.8,
    description:
      "Durable sports chronograph with stopwatch functionality, water resistance, and bold design.",
    comments: [
      {
        name: "Benjamin King",
        rating: 5,
        comment: "Looks sporty and stylish!",
        avatar: "https://i.pravatar.cc/50?img=24"
      },
      {
        name: "Ella Moore",
        rating: 5,
        comment: "The chronograph works great.",
        avatar: "https://i.pravatar.cc/50?img=11"
      },
      {
        name: "Matthew Scott",
        rating: 4,
        comment: "Sturdy and waterproof.",
        avatar: "https://i.pravatar.cc/50?img=15"
      }
    ],
    gallery: [
      "https://images.unsplash.com/photo-1587400519568-1fe0329bfb2e?auto=format&fit=crop&q=80&w=1170",
      "https://images.unsplash.com/photo-1511463394364-68d07d119d95?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2043",
      "https://images.unsplash.com/photo-1611163950958-a2ec5ccccd18?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687"
    ]
  },
  {
    id: 10,
    name: "Heavy Cotton Pullover Hoodie",
    category: "Hoodies",
    price: "5,899",
    qty: 1,
    img: "https://plus.unsplash.com/premium_photo-1733701621462-a74d3d408319?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=800",
    rating: 4.3,
    description:
      "Premium heavy cotton pullover hoodie offering warmth, style, and long-lasting comfort.",
    comments: [
      {
        name: "Sophie Hall",
        rating: 5,
        comment: "Perfect thickness for winters.",
        avatar: "https://i.pravatar.cc/50?img=18"
      },
      {
        name: "Mason Allen",
        rating: 4,
        comment: "Color is vibrant and rich.",
        avatar: "https://i.pravatar.cc/50?img=42"
      },
      {
        name: "Charlotte Adams",
        rating: 5,
        comment: "Good fit and cozy.",
        avatar: "https://i.pravatar.cc/50?img=6"
      }
    ],
    gallery: [
      "https://plus.unsplash.com/premium_photo-1758742058868-b59fb3305631?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170",
      "https://plus.unsplash.com/premium_photo-1758742058756-22301e8fabea?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1171",
      "https://plus.unsplash.com/premium_photo-1733701621492-cb33ed46b733?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170"
    ]
  },
  {
    id: 11,
    name: "Casio G-Shock GA-2100 Carbon Core",
    category: "Watches",
    price: "48,999",
    qty: 1,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVMzV9EMP0DDawJHN1CrlLbAUkjhYecLLIeA&s",
    rating: 4.6,
    description:
      "Tough carbon-core G-Shock designed for adventure. Shock-resistant and waterproof.",
    comments: [
      {
        name: "Ryan Thomas",
        rating: 5,
        comment: "The durability is insane!",
        avatar: "https://i.pravatar.cc/50?img=43"
      },
      {
        name: "Layla Evans",
        rating: 4,
        comment: "Love the matte finish.",
        avatar: "https://i.pravatar.cc/50?img=5"
      },
      {
        name: "Daniel Lewis",
        rating: 5,
        comment: "Battery lasts forever.",
        avatar: "https://i.pravatar.cc/50?img=31"
      }
    ],
    gallery: [
      "https://images.unsplash.com/photo-1587466412525-87497b34fc88?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1173",
      "https://images.unsplash.com/photo-1629616157581-dda2b4d8823b?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170",
      "https://images.unsplash.com/photo-1585123334904-845d60e97b29?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=735"
    ]
  },
  {
    id: 12,
    name: "Casual Oversized Hoodie",
    category: "Hoodies",
    price: "5,299",
    qty: 1,
    img: "https://images.unsplash.com/photo-1546052725-72b0b8b9f4b6?auto=format&fit=clip&q=80&w=500",
    rating: 4.1,
    description:
      "Relaxed-fit oversized hoodie for effortless casual style and maximum comfort.",
    comments: [
      {
        name: "Ella Murphy",
        rating: 5,
        comment: "Super comfy and stylish.",
        avatar: "https://i.pravatar.cc/50?img=21"
      },
      {
        name: "Jacob Wood",
        rating: 4,
        comment: "Runs slightly large.",
        avatar: "https://i.pravatar.cc/50?img=30"
      },
      {
        name: "Lily Russell",
        rating: 5,
        comment: "Great for lounging.",
        avatar: "https://i.pravatar.cc/50?img=8"
      }
    ],
    gallery: [
      "https://images.unsplash.com/photo-1552405462-5da656f0261e?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1588932250351-36235af5c0f0?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1641377061384-61e0ce81f717?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170"
    ]
  },
  {
    id: 13,
    name: "Apple Watch Series 9 (GPS, 45mm)",
    category: "Smart Watches",
    price: "165,000",
    qty: 1,
    img: "https://m.media-amazon.com/images/I/81C8zw3D4YL._AC_SL1500_.jpg",
    rating: 4.9,
    description:
      "Advanced smartwatch with fitness tracking, blood oxygen monitoring, and ultra-bright Retina display.",
    comments: [
      {
        name: "Alex Morgan",
        rating: 5,
        comment: "The best smartwatch on the market!",
        avatar: "https://i.pravatar.cc/50?img=29"
      },
      {
        name: "Harper Bell",
        rating: 5,
        comment: "Seamless sync with iPhone.",
        avatar: "https://i.pravatar.cc/50?img=36"
      },
      {
        name: "Megan Foster",
        rating: 5,
        comment: "Battery life improved.",
        avatar: "https://i.pravatar.cc/50?img=26"
      }
    ],
    gallery: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfmdJhKfR8AfOITn7xlbEYr6C3E-8r3OI8FQ&s",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyIGWfJyxuXwIfAvS_dvmVTUdU3ecMlTeIbQ&s",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSxA0BXlKbC-b04Jg5k_UXwU7MoYOuATV2SQ&s"
    ]
  }
];

  const brands = [
    {
      id: 1,
      name: "ZARA",
      tagline: "Effortless Style, Modern Living",
      logo: "https://www.freepnglogos.com/uploads/zara-brand/2020-new-zara-logo-black-background-wallpaper-4.jpg",
      bg: "https://identity.ae/wp-content/uploads/2019/09/zara-showroom-dubai-mall-3.jpg",

    },
    {
      id: 2,
      name: "Puma",
      tagline: "Forever Faster in Style",
      logo: "https://static.vecteezy.com/system/resources/previews/010/994/433/non_2x/puma-logo-name-white-symbol-clothes-design-icon-abstract-football-illustration-with-black-background-free-vector.jpg",
      bg: "https://www.modaes.com/files//000_2016/puma/puma%20tienda%20nueva%20728.png",
    },
    {
      id: 3,
      name: "Rolex",
      tagline: "The Symbol of Timeless Luxury",
      logo: "https://www.dafontfree.io/wp-content/uploads/2021/08/Rolex-Logo-Font.jpg",
      bg: "https://images.squarespace-cdn.com/content/v1/5d6c01b8387da8000156ac34/453f6c63-65b9-4f03-8574-73952dfa3011/coronet-rolex-sign-building-chene-bourg-logo+2.jpg",
    },
    {
      id: 4,
      name: "Casio",
      tagline: "Technology in Every Tick",
      logo: "https://logodix.com/logo/383841.jpg",
      bg: "https://cdn.archilovers.com/projects/4046d218-1ce1-482d-bc52-68e05298e8c5.jpg",
    },
  ];


  const Category = [
    { cat: "Casual Shirts", name: "Shirts" },
    { cat: "Formal Shirts", name: "Formal Shirts" },
    { cat: "Zip-Up Hoodies", name: "Hoodies" },
    { cat: "Luxury Watches", name: "Watches" },
    { cat: "Pullover Hoodies", name: "Hoodies" },
    { cat: "Smart & Sports Watches", name: "Smart Watches" },
  ];


  // {
  //   id:'',
  //   name:"",
  //   category: "",
  //   price: "",
  //   img: "",
  // }

  const [cartItems, setcartItems] = useState([])
  const [selectedDetails, setselectedDetails] = useState({
    id: 0,
    name: "",
    category: "",
    price: "",
    qty: 0,
    img: "",
    rating: 0,
    description: "",
    comments: [],
    gallery: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfmdJhKfR8AfOITn7xlbEYr6C3E-8r3OI8FQ&s",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyIGWfJyxuXwIfAvS_dvmVTUdU3ecMlTeIbQ&s",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSxA0BXlKbC-b04Jg5k_UXwU7MoYOuATV2SQ&s"
    ]

  })
  const [user, setUser] = useState([])
  const [ulog, setUlog] = useState(false)
  console.log(cartItems);


  return (
    <StoragePoint.Provider value={{ products, brands, Category, cartItems, setcartItems, user, setUser, setselectedDetails, selectedDetails, ulog, setUlog }}>
      {children}
    </StoragePoint.Provider>
  );
};


export const customhook = () => useContext(StoragePoint);