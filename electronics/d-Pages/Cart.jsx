import React, { useEffect, useState } from "react";
import { Container, Row, Col, Button, Table } from "react-bootstrap";
import { Trash3, ArrowRightCircle } from "react-bootstrap-icons";
import "../CSS/CartSection.css";
import { customhook } from "../context/store";
import useNav from "../Components/NavLink";
import { deleteFromCART, userAllinCART } from "../Axoius/axiousAPI";
import { toast, ToastContainer } from "react-toastify";

const CartSection = () => {
  const { cartItems, setcartItems, user } = customhook()
  const { navgate } = useNav()

  const [total, setTotal] = useState(0)

  // const cartItems = [
  //   { id: 1, name: "Smart LED TV 55”", price: 95000, qty: 1, img: "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04" },
  //   { id: 2, name: "Wireless Headphones", price: 18000, qty: 2, img: "https://plus.unsplash.com/premium_photo-1682090667164-d1b42a433544?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170" },
  //   { id: 3, name: "Portable Speaker", price: 12000, qty: 1, img: "https://images.unsplash.com/photo-1615526674998-2ea0930bfe24?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=686" },
  // ];

  console.log(cartItems);

  const run = async () => {
    try {
      const result = await userAllinCART(user._id)
      if (result) {
        console.log(result);
        const mycarts = result.data.data
        console.log(mycarts);
        setcartItems(mycarts)
      }
    } catch (error) {
      console.log(error);
      toast.info(error.response.data.message)
    }
  }
  useEffect(() => {
    run()
  }, [])

  useEffect(() => {
  const calculatedTotal = cartItems.reduce((sum, item) => {
    const price = Number(item.price.replace(/,/g, ""));
    return sum + price * item.quantity;
  }, 0);

  setTotal(calculatedTotal);
}, [cartItems]);


  const handleQtyChange = (id, change) => {
    setcartItems(prev =>
      prev.map(item =>
        item._id === id
          ? { ...item, quantity: Math.max(1, item.quantity + change) }
          : item
      )
    );
  
  };
  
  // setTotal( cartItems.reduce((sum, item) => {
  //   const numericPrice = Number(item.price.replace(/[^0-9.-]+/g, ""));
  //   return sum + numericPrice;
  // }, 0))
  const handleDelate = async (id) => {
    console.log(id);
    
    try {
      const result = await deleteFromCART(id)
      console.log(result);
      toast.success(result.data.message)
    } catch (error) {
      toast.done(error)
    }
    const newCartItems = cartItems.filter((ci, i) => {
      return ci._id !== id
    })
    console.log(newCartItems);
    setcartItems(newCartItems)
  }

  // const total = cartItems.reduce((sum, item) => {console.log('itm ',item);
  // })

  // },[cartItems])item.qty

  return (
    <section className="cart-section py-5 text-light">
      <ToastContainer autoClose={2000} />
      <Container>
        <h2 className="text-center mb-4 section-title">
          Your <span className="brand-glow">Shopping Cart</span>
        </h2>

        <Row>
          <Col lg={8} className="mt-2">
            <div className="cart-table-wrapper p-3 rounded-4 shadow-sm">
              <Table className="align-middle mb-0 text-light bg-dark">
                {/* responsive borderless */}
                <thead className="cart-table-head">
                  <tr>
                    <th>Product</th>
                    <th className="text-center">Quantity</th>
                    <th className="text-center">Price</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {cartItems.map((item) => (
                    <tr key={item.id} className="cart-row">
                      <td>
                        {/* {console.log(item)} */}
                        <div className="d-flex align-items-center">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="cart-item-img rounded me-3"
                          />
                          <div>
                            <h6 className="fw-semibold mb-1">{item.name}</h6>
                            <small className="text-secondary">SKU #{item.id}</small>
                          </div>
                        </div>
                      </td>
                      <td className="text-center">
                        <div className="qty-wrapper">
                          <button
                            className="qty-btn"
                            onClick={() => handleQtyChange(item._id, -1)}
                            disabled={item.quantity <= 1}
                          >
                            −
                          </button>

                          <span className="qty-value">{item.quantity}</span>

                          <button
                            className="qty-btn"
                            onClick={() => handleQtyChange(item._id, 1)}
                            disabled={item.quantity >= 7}
                          >
                            +
                          </button>
                        </div>
                      </td>

                      {/* <td className="text-center">Rs. {item.price.toLocaleString()}</td> */}
                      <td className="text-center">Rs. {(Number((item.price).replaceAll(',', '')) * item.quantity).toLocaleString()}</td>
                      <td className="text-center">
                        <Button
                          variant="outline-danger"
                          size="sm"
                          className="rounded-circle border-0 cart-del-btn"
                          onClick={() => { handleDelate(item._id) }}
                        >
                          <Trash3 size={18} />
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </div>
          </Col>

          <Col lg={4} className="mt-4 mt-lg-0">
            <div className="cart-summary p-4 rounded-4 shadow-lg">
              <h5 className="fw-bold mb-3">Order Summary</h5>
              <hr className="border-light" />
              <div className="d-flex justify-content-between mb-2">
                <span>Subtotal</span>
                <span>Rs. {total.toLocaleString()}</span>
              </div>
              <div className="d-flex justify-content-between mb-2">
                <span>Shipping</span>
                <span>Rs. {total / 500}</span>
              </div>
              <hr className="border-light" />
              <div className="d-flex justify-content-between fw-bold fs-5 mb-4">
                <span>Total</span>
                <span className="brand-glow-text">Rs. {(total + 500).toLocaleString()}</span>
              </div>
              <Button className="w-100 checkout-btn" onClick={() => navgate('/CheckDetails')}>
                Proceed to Checkout <ArrowRightCircle className="ms-2" />
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default CartSection;
