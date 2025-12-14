import React from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import ShoppingCart from "react-bootstrap-icons/dist/icons/cart";
import "../CSS/productsSection.css";
import { customhook } from "../context/store";
import useNav from "../Components/NavLink";
import { ToastContainer, toast } from "react-toastify";
import customPointer from '../src/assets/mouse-hand-cursor-color-icon.png'
import { prodInCART } from "../Axoius/axiousAPI";
//! for that we wil do like that 
//* cursor: `url${(customPointer)}, pointer`
//in below

const ProductGrid = () => {
  const { products, setselectedDetails, user } = customhook()
  const { navgate } = useNav()


  const handleCartItems = async (e,product) => {
    e.stopPropagation();
    e.preventDefault();
    // setcartItems((prev) => [...prev, product])
    console.log(product,user);
    // const rslt = await
    try {
      const result = await prodInCART(user._id, product)
      console.log(result);
      
    } catch (error) {
      console.log(error);
      
      toast.warning(error.response.data.message)
      
    } 

    
    
  }

  return (
    <div className="product-section py-5">
      <Container>
        <h2 className="text-center mb-5 section-title">
          Featured Products
        </h2>
          <ToastContainer autoClose={2000}/>

        <Row className="g-4">
          {products.map((product) => (
            <Col key={product.id} md={6} lg={3}
            // style={{ boxShadow: ' 0 0 25px rgba(0, 255, 255, 0.1' }}
            >
              <Card className="product-card text-center">
                <div className="img-wrapper">
                  <Card.Img variant="top" src={product.img} />
                </div>
                <Card.Body
                  style={{
                    cursor: "url('../src/assets/mouse-hand-cursor-color-icon.png'), pointer"
                  }}
                  onClick={
                    () => {
                      setselectedDetails(product)
                      navgate('/ProductDetails')
                    }}

                >
                  <h6 className="product-category">{product.category}</h6>
                  <Card.Title className="product-title">
                    {product.name}
                  </Card.Title>
                  <p className="price mb-3">Rs. {product.price}</p>
                  <Button className="add-btn"
                    onClick={(e)=>handleCartItems(e,product)}
                  >
                    <ShoppingCart size={18} className="me-2" />
                    Add to Cart
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default ProductGrid;
