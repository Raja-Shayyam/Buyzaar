import React, { useState } from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import { StarFill, CartPlus, ChatDots } from "react-bootstrap-icons";
import { CmntSection } from "../Components/productsDetails/cmntSection";
import { MainSection } from "../Components/productsDetails/mainSection";
import { customhook } from "../context/store";

const ProductDetails = () => {
  const [quantity, setQuantity] = useState(1);
  const {selectedDetails}=customhook()

  // const [comments, setComments] = useState([
  //   {
  //     name: "Ali Raza",
  //     rating: 5,
  //     comment: "Amazing quality! The picture clarity is superb and setup was quick.",
  //     avatar: "https://i.pravatar.cc/50?img=12",
  //   },
  //   {
  //     name: "Fatima Khan",
  //     rating: 4,
  //     comment: "Good value for money, colors are vibrant though sound could be louder.",
  //     avatar: "https://i.pravatar.cc/50?img=47",
  //   },
  // ]);
  // const product = {
  //   id: 1,
  //   name: "Smart LED TV 55” 4K UHD",
  //   category: "Electronics / Home Entertainment",
  //   price: "145,000 PKR",
  //   rating: 4.5,
  //   img: "https://images.samsung.com/is/image/samsung/p6pim/pk/ua55au7000uxtw/gallery/pk-uhd-4k-tv-ua55au7000uxtw-front-black-thumb-531845973?$650_519_PNG$",
  //   gallery: [
  //     "https://images.samsung.com/is/image/samsung/p6pim/pk/ua55au7000uxtw/gallery/pk-uhd-4k-tv-ua55au7000uxtw-front-black-thumb-531845973?$650_519_PNG$",
  //     "https://images.samsung.com/is/image/samsung/p6pim/pk/ua55au7000uxtw/gallery/pk-uhd-4k-tv-ua55au7000uxtw-side-black-thumb-531845979?$650_519_PNG$",
  //     "https://images.samsung.com/is/image/samsung/p6pim/pk/ua55au7000uxtw/gallery/pk-uhd-4k-tv-ua55au7000uxtw-back-black-thumb-531845982?$650_519_PNG$",
  //   ],
  //   description:
  //     "Experience ultra-realistic picture quality with the Smart LED TV 55” 4K UHD. Powered by an advanced Crystal Processor, enjoy vivid colors, deep contrast, and seamless streaming from your favorite apps.",
  // };

 

  return (
    <section
      className="py-5"
      style={{
        background: "linear-gradient(180deg, #0d1b2a 0%, #1b263b 60%, #0a192f 100%)",
        color: "#e0e0e0",
      }}
    >
      <Container>
        <MainSection setQuantity={setQuantity} quantity={quantity} product={selectedDetails}/>
        <CmntSection  comments={selectedDetails.comments}/>
      </Container>
    </section>
  );
};

export default ProductDetails;
