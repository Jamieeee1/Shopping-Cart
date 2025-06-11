import React, { useState } from "react";
import ShoppingItems from "./components/ShoppingItems";
import Cart from "./components/Cart";

const initialItems = [
  {
    name: "waffle",
    label: "waffle with Berries",
    amount: 6.5,
    displayAmount: "$6.50",
    itemNumber: 1,
    src1: "/assets/images/image-waffle-mobile.jpg",
    src2: "/assets/images/image-waffle-tablet.jpg",
    src3: "/assets/images/image-waffle-desktop.jpg",
    srcs: "/assets/images/image-waffle-thumbnail.jpg",
    quantity: 0,
    total: 0,
    id: "4752",
  },
  {
    name: "Creme Brulee",
    label: "Vanilla Bean Creme Brulee",
    amount: 7,
    displayAmount: "$7.00",
    itemNumber: 2,
    src1: "/assets/images/image-creme-brulee-mobile.jpg",
    src2: "/assets/images/image-creme-brulee-tablet.jpg",
    src3: "/assets/images/image-creme-brulee-desktop.jpg",
    srcs: "/assets/images/image-creme-brulee-thumbnail.jpg",
    quantity: 0,
    total: 0,
    id: "e4b6",
  },
  {
    name: "Macaron",
    label: "Macaron Mix of Five",
    amount: 8,
    displayAmount: "$8.00",
    itemNumber: 3,
    src1: "/assets/images/image-macaron-mobile.jpg",
    src2: "/assets/images/image-macaron-tablet.jpg",
    src3: "/assets/images/image-macaron-desktop.jpg",
    srcs: "/assets/images/image-macaron-thumbnail.jpg",
    quantity: 0,
    total: 0,
    id: "d4ff",
  },
  {
    name: "Tiramisu",
    label: "Classic Tiramisu",
    amount: 5.5,
    displayAmount: "$5.50",
    itemNumber: 4,
    src1: "/assets/images/image-tiramisu-mobile.jpg",
    src2: "/assets/images/image-tiramisu-tablet.jpg",
    src3: "/assets/images/image-tiramisu-desktop.jpg",
    srcs: "/assets/images/image-tiramisu-thumbnail.jpg",
    quantity: 0,
    total: 0,
    id: "833b",
  },
  {
    name: "Baklava",
    label: "Pistachio Baklava",
    amount: 4,
    displayAmount: "$4.00",
    itemNumber: 5,
    src1: "/assets/images/image-baklava-mobile.jpg",
    src2: "/assets/images/image-baklava-tablet.jpg",
    src3: "/assets/images/image-baklava-desktop.jpg",
    srcs: "/assets/images/image-baklava-thumbnail.jpg",
    quantity: 0,
    total: 0,
    id: "5057",
  },
  {
    name: "Pie",
    label: "Lemon Meringue Pie",
    amount: 5,
    displayAmount: "$5.00",
    itemNumber: 6,
    src1: "/assets/images/image-meringue-mobile.jpg",
    src2: "/assets/images/image-meringue-tablet.jpg",
    src3: "/assets/images/image-meringue-desktop.jpg",
    srcs: "/assets/images/image-meringue-thumbnail.jpg",
    quantity: 0,
    total: 0,
    id: "13ea",
  },
  {
    name: "Cake",
    label: "Red Velvet Cake",
    amount: 4.5,
    displayAmount: "$4.50",
    itemNumber: 7,
    src1: "/assets/images/image-cake-mobile.jpg",
    src2: "/assets/images/image-cake-tablet.jpg",
    src3: "/assets/images/image-cake-desktop.jpg",
    srcs: "/assets/images/image-cake-thumbnail.jpg",
    quantity: 0,
    total: 0,
    id: "258f",
  },
  {
    name: "Brownie",
    label: "Salted Caramel Brownie",
    amount: 5.5,
    displayAmount: "$5.50",
    itemNumber: 8,
    src1: "/assets/images/image-brownie-mobile.jpg",
    src2: "/assets/images/image-brownie-tablet.jpg",
    src3: "/assets/images/image-brownie-desktop.jpg",
    srcs: "/assets/images/image-brownie-thumbnail.jpg",
    quantity: 0,
    total: 0,
    id: "575d",
  },
  {
    name: "Panna Cotta",
    label: "Vanilla Panna Cotta",
    amount: 6.5,
    displayAmount: "$6.50",
    itemNumber: 9,
    src1: "/assets/images/image-panna-cotta-mobile.jpg",
    src2: "/assets/images/image-panna-cotta-tablet.jpg",
    src3: "/assets/images/image-panna-cotta-desktop.jpg",
    srcs: "/assets/images/image-panna-cotta-thumbnail.jpg",
    quantity: 0,
    total: 0,
    id: "5548",
  },
];

const App = () => {
  const [cartItems, setCartItems] = useState({});
  const [items, setItems] = useState(initialItems);

  const updateCart = (updatedItems) => {
    const cart = {};
    updatedItems.forEach((item) => {
      if (item.quantity > 0) {
        cart[item.id] = { ...item };
      }
    });
    setCartItems(cart);
  };

  const addToCart = (id) => {
    setItems((prevItems) => {
      const updatedItems = prevItems.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: item.quantity + 1,
              total: (item.quantity + 1) * item.amount,
            }
          : item
      );
      updateCart(updatedItems);
      return updatedItems;
    });
  };

  const resetItem = (id) => {
    setItems((prevItems) => {
      const updatedItems = prevItems.map((item) =>
        item.id === id ? { ...item, quantity: 0, total: 0 } : item
      );
      updateCart(updatedItems);
      return updatedItems;
    });
  };

  const resetAllItems = () => {
    setItems((prevItems) =>
      prevItems.map((item) => ({ ...item, quantity: 0, total: 0 }))
    );
    setCartItems({});
  };

  const increaseQuantity = (id, increment = 1) => {
    setItems((prevItems) => {
      const updatedItems = prevItems.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: item.quantity + increment,
              total: (item.quantity + increment) * item.amount,
            }
          : item
      );
      updateCart(updatedItems);
      return updatedItems;
    });
  };

  const decreaseQuantity = (id, decrement = 1) => {
    setItems((prevItems) => {
      const updatedItems = prevItems.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: Math.max(0, item.quantity - decrement),
              total: Math.max(0, item.quantity - decrement) * item.amount,
            }
          : item
      );
      updateCart(updatedItems);
      return updatedItems;
    });
  };

  return (
    <>
      <h1 className="text-rose-500 font-3 text-4xl m-2 p-2.5">Desserts</h1>
      <div className="flex flex-col md:flex-row gap-4 justify-between items-start lg:px-8 py-3">
        <ShoppingItems
          itemdata={items}
          addToCart={addToCart}
          increment={increaseQuantity}
          decrement={decreaseQuantity}
        />

        <Cart
          cartItems={cartItems}
          resetButton={resetItem}
          resetAll={resetAllItems}
        />
      </div>
    </>
  );
};

export default App;
