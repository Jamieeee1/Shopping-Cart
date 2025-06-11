import React from "react";

const Shopitem = ({
  name,
  label,
  amount,
  src1,
  src2,
  src3,
  itemNumber,
  displayAmount,
  quantity,
  onIncrease,
  onDecrease,
  toCart,
  id,
}) => {
  const imageSrcSet = `${src1} 480w, ${src2} 768w, ${src3} 1200w
  `;

  const sizes = `
    (max-width: 480px) 480px,
    (max-width: 768px) 768px,
    1200px
  `;

  const borderProperties = (quantity) => {
    if (quantity >= 1) {
      return "border-2 border-red";
    }
  };

  return (
    <div className="mx-3 h-fit">
      <div
        className={`relative flex flex-col items-center justify-center rounded-lg w-full ${borderProperties(
          quantity
        )}`}
      >
        <img
          src={src3}
          srcSet={imageSrcSet}
          sizes={sizes}
          alt={`${name} picture`}
          className=" rounded-lg w-full h-auto object-cover"
        />
        <div className="flex items-center justify-center absolute -bottom-4 left-1/2 transform -translate-x-1/2">
          {quantity < 1 ? (
            <button
              className="flex py-1.5 px-5 bg-rose-50 border-2 border-rose-500 rounded-4xl items-center gap-2 hover:bg-rose-100 transition-colors duration-300 hover:border-red hover:text-red"
              onClick={() => toCart(id, 1)}
            >
              <img src="src/assets/images/icon-add-to-cart.svg" alt="" />
              Add to Cart
            </button>
          ) : (
            <div className="w-[150px] flex justify-between items-center grid-cols-3 py-1.5 px-5 bg-red rounded-4xl">
              <button
                className="flex items-center justify-center w-4 h-4 rounded-full border border-rose-50 cursor-pointer"
                onClick={() => onDecrease(id, 1)}
              >
                <img
                  src="src/assets/images/icon-decrement-quantity.svg"
                  alt=""
                />
              </button>
              <span className="text-rose-50 font-2">{quantity}</span>
              <button
                className="flex items-center justify-center w-4 h-4 rounded-full border border-rose-50 cursor-pointer"
                onClick={() => onIncrease(id, 1)}
              >
                <img
                  src="src/assets/images/icon-increment-quantity.svg"
                  alt=""
                />
              </button>
            </div>
          )}
        </div>
      </div>
      <div className="flex flex-col pt-6">
        <span className="font-1 text-rose-300">{name}</span>
        <span className="font-3 text-rose-900">{label}</span>
        <span className="font-2 text-red">{displayAmount}</span>
      </div>
    </div>
  );
};

export default Shopitem;
