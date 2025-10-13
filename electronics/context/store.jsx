import { createContext, useContext, useState } from "react";


export const StoragePoint = createContext();

export const StorageProvider = ({ children }) => {
  //* Products on main page
  const products = [
    {
      id: 1,
      name: "Smart LED TV 55” 4K UHD",
      category: "Electronics",
      price: "145,000",
      qty: 1,
      img: "https://www.vizio.com/content/dam/vizio/2023/tv/quantum-pro/visual-desktop.jpg",
    },
    {
      id: 2,
      name: "Bluetooth Soundbar",
      category: "Audio",
      price: "18,999",
      qty: 1,
      img: "https://www.reliant.co.uk/blog/wp-content/uploads/2024/02/place-a-soundbar.jpg",
    },
    {
      id: 3,
      name: "Smart Refrigerator",
      category: "Appliances",
      price: "245,000",
      qty: 1,
      img: "https://www.cnet.com/a/img/resize/2d2e0487bdd32b0892ba5538b1b1219ba72f5be0/hub/2016/10/27/a11c03cc-bc86-427c-b200-fa5c9f4e2f20/lginstaviewproductphotos-8.jpg?auto=webp&width=1200",
    },
    {
      id: 4,
      name: "Air Conditioner 1.5 Ton",
      category: "Cooling",
      price: "165,000",
      qty: 1,
      img: "https://www.hitachiaircon.com/au/storage/images/news/news_image_header_76b0a121c20f00d904f71765166f137e.jpg",
    },
    {
      id: 5,
      name: "Wireless Home Speaker",
      category: "Audio",
      price: "22,499",
      qty: 1,
      img: "https://ae01.alicdn.com/kf/S398259ab6abe4e45b8cca827cbf24e643.jpg",
    },
    {
      id: 6,
      name: "Smart Washing Machine",
      category: "Appliances",
      price: "198,000",
      qty: 1,
      img: "https://img.global.news.samsung.com/in/wp-content/uploads/2024/03/19532_WM-FAFL-AI_PR-Banner_728x410.jpg",
    },
    {
      id: 7,
      name: "Smart Coffee Maker",
      category: "Kitchen",
      price: "42,999",
      qty: 1,
      img: "https://www.digitaltrends.com/wp-content/uploads/2021/12/atomi-smart-coffee-maker.jpg?fit=720%2C720&p=1",
    },

  ];


  const brands = [
    {
      id: 1,
      name: "Samsung",
      tagline: "Innovation for Every Home",
      logo: "https://i.pinimg.com/736x/64/7a/2c/647a2ca1c7675ddef0df9f0f3c1098d6.jpg",
      bg: "https://img.global.news.samsung.com/global/wp-content/uploads/2024/07/Samsung-Mobile-Flip6-Fold6-Ring-Watch-Ultra-Watch7-Buds3-series-Announcement-News_main1.jpg",
    },
    {
      id: 2,
      name: "LG",
      tagline: "Life’s Good with Smart Living",
      logo: "https://www.lg.com/content/dam/lge/global/our-brand/src/mocks/bs0009/download-assets-item-thumb--logo.png",
      bg: "https://www.lg.com/content/dam/lge/in/migration/appliances-catalogue/images/banner-large.jpg",
    },
    {
      id: 3,
      name: "Sony",
      tagline: "Experience the Extraordinary",
      logo: "https://static.vecteezy.com/system/resources/previews/016/460/776/non_2x/sony-company-logo-with-realistic-shadow-popular-computer-and-laptop-manufacturing-companies-logotype-free-png.png",
      bg: "https://analyticsindiamag.com/wp-content/uploads/2020/07/Sony-research-center.jpg",
    },
    {
      id: 4,
      name: "Haier",
      tagline: "Inspired Living for You",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBCIkwco_3y_UGb9iYzD-KcQ9AAJtkpA-RyA&s",
      bg: "https://i.brecorder.com/primary/2021/03/6050cf14c98a7.jpg",
    },
  ];

  const Category = [
    { cat: "Smart TVs", name: "Electronics" },
    { cat: "Air Conditioners", name: "Cooling" },
    { cat: "Refrigerators", name: "Appliances" },
    { cat: "Audio Systems", name: "Audio" },
    { cat: "Laptops", name: "Electronics" },
    { cat: "Microwaves", name: "Kitchen" },
  ]

  // {
  //   id:'',
  //   name:"",
  //   category: "",
  //   price: "",
  //   img: "",
  // }

  const [cartItems, setcartItems] = useState([])
  const [user, setUser] = useState([])
  console.log(cartItems);


  return (
    <StoragePoint.Provider value={{ products, brands, Category, cartItems, setcartItems, user, setUser }}>
      {children}
    </StoragePoint.Provider>
  );
};


export const customhook = () => useContext(StoragePoint);