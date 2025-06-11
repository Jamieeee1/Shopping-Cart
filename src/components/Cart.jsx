import React, { useState } from "react";
import { FaXmark } from "react-icons/fa6";

const Cart = ({ cartItems, resetButton, resetAll }) => {
  const [showSummary, setShowSummary] = useState(false);
  const handleCloseSummary = () => {
    setShowSummary(false);
    resetAll();
  };
  return (
    <>
      <div className="min-w-full md:min-w-[300px] lg:min-w-[400px] max-h-fit mx-auto flex flex-col items-center justify-center gap-4 p-4 bg-rose-50">
        <h2 className="text-red text-3xl font-3">
          Your Cart ({Object.keys(cartItems).length})
        </h2>

        {Object.keys(cartItems).length === 0 ? (
          <>
            <img
              src="/assets/images/illustration-empty-cart.svg"
              alt="Empty Cart"
            />
            <h3 className="text-rose-500">Your added items will appear here</h3>
          </>
        ) : (
          <div className="flex flex-col gap-4 w-full">
            {Object.entries(cartItems).map(([itemName, itemDetails]) => (
              <div
                key={itemName}
                className="border-b border-b-rose-300 flex justify-between"
              >
                <div className="flex flex-col">
                  <h2 className="text-rose-900">{itemDetails.label}</h2>
                  <div>
                    <span className="text-red mr-3.5">
                      {itemDetails.quantity}x
                    </span>
                    <span className="mr-2.5 text-rose-300">
                      @{itemDetails.displayAmount}
                    </span>
                    <span className="text-gray-800 text-rose-500">
                      ${itemDetails.total.toFixed(2)}
                    </span>
                  </div>
                </div>
                <div>
                  <span className="flex items-center gap-2 border p-0.5 rounded-full cursor-pointer">
                    <FaXmark
                      onClick={() => {
                        resetButton(itemDetails.id);
                      }}
                    />
                  </span>
                </div>
              </div>
            ))}

            <div className="flex justify-between items-center">
              <span className="font-2">Order Total</span>
              <span className="font-3">
                $
                {Object.values(cartItems).reduce(
                  (sum, obj) => sum + obj.total,
                  0
                )}
              </span>
            </div>
            <div className="flex flex-col justify-center gap-4">
              {Object.keys(cartItems).length > 0 && (
                <>
                  <p className="flex justify-center items-center gap-2 text-rose-500 p-2.5 rounded-md bg-rose-100  ">
                    <span>
                      <img
                        src="/assets/images/icon-carbon-neutral.svg"
                        alt=""
                        srcset=""
                      />
                    </span>
                    This is a <span className="font-3">carbon-neutral</span>{" "}
                    delivery
                  </p>
                  <button
                    className="bg-red text-rose-50 py-2 px-4 rounded-full cursor-pointer"
                    onClick={() => setShowSummary(true)}
                  >
                    Checkout
                  </button>
                </>
              )}
            </div>
          </div>
        )}
      </div>
      {showSummary && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm"
          style={{ pointerEvents: "auto" }}
        >
          <div
            className={`
        bg-rose-50 rounded-lg shadow-lg p-6 w-full max-w-md
        ${
          window.innerWidth < 768
            ? "fixed bottom-0 left-0 right-0 rounded-b-none animate-slideUp"
            : "relative"
        }
      `}
            style={{
              maxHeight: "80vh",
              overflowY: "auto",
              pointerEvents: "auto",
            }}
          >
            <p>
              <img src="/assets/images/icon-order-confirmed.svg" alt="" />
            </p>
            <h2 className="text-2xl font-bold mb-4 text-center">
              Order Confirmed
            </h2>
            <p>We hope you enjoyed your meal</p>
            <ul className="mt-4 p-4 rounded-t-md bg-rose-100">
              {Object.values(cartItems).map((item) => (
                <li
                  key={item.id}
                  className="flex border-b border-b-rose-300 pb-2 justify-between mb-2 items-center"
                >
                  <div className="flex items-center gap-2">
                    <div>
                      <img src={item.srcs} alt="" className="size-8/12" />
                    </div>
                    <div>
                      <h3>{item.label}</h3>
                      <span className="mr-2 text-red font-2 text-xl">
                        {item.quantity}x
                      </span>
                      <span className="text-rose-500 text-lg">
                        {item.displayAmount}
                      </span>
                    </div>
                  </div>
                  <div>
                    <span className="text-rose-900 font-2 text-xl">
                      ${item.total.toFixed(2)}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
            <div className="flex justify-between rounded-b-md bg-rose-100 p-4 mb-4">
              <span className="text-lg">Order Total</span>
              <span className="font-3 text-rose-900 text-2xl">
                $
                {Object.values(cartItems)
                  .reduce((sum, obj) => sum + obj.total, 0)
                  .toFixed(2)}
              </span>
            </div>
            <button
              className="w-full bg-red mt-2 text-rose-50 py-2 px-4 rounded-full cursor-pointer"
              onClick={() => handleCloseSummary()}
            >
              Start New Order
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Cart;
