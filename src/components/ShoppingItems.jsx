import React, { useState, useEffect, useContext } from "react";
import Shopitem from "./Shopitem";
import { CartContext } from "../App";

const ShoppingItems = () => {
  const { items } = useContext(CartContext);
  const getItemQuantity = (itemId) => {
    const Item = items.find((item) => item.id === itemId);
    return Item?.quantity;
  };
  return (
    <>
      <div className="flex flex-col md:grid md:grid-cols-2 lg:grid-cols-3 gap-3.5 w-full">
        {items.map((item, index) => {
          const quantity = getItemQuantity(item.id);
          return (
            <Shopitem
              key={item.id || index}
              name={item.name}
              label={item.label}
              amount={item.amount}
              displayAmount={`$${item.amount.toFixed(2)}`}
              itemNumber={item.itemNumber}
              src1={item.src1}
              src2={item.src2}
              src3={item.src3}
              quantity={item.quantity}
              id={item.id}
            />
          );
        })}
      </div>
    </>
  );
};

export default ShoppingItems;
