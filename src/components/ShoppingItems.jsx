import React, { useState, useEffect } from "react";
import Shopitem from "./Shopitem";

const ShoppingItems = ({ itemdata, addToCart, increment, decrement }) => {
  const getItemQuantity = (itemId) => {
    const Item = itemdata.find((item) => item.id === itemId);
    return Item?.quantity;
  };
  return (
    <>
      <div className="flex flex-col md:grid md:grid-cols-2 lg:grid-cols-3 gap-3.5 w-full">
        {itemdata?.map((item, index) => {
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
              toCart={addToCart}
              onIncrease={increment}
              onDecrease={decrement}
            />
          );
        })}
      </div>
    </>
  );
};

export default ShoppingItems;
