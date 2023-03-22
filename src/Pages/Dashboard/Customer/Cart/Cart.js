import React from "react";
import "./Cart.css";

const Cart = (props) => {
  const { cart, clearCart, children } = props;
  // console.log(cart);
  let total = 0;
  let shipping = 0;
  let quantity = 0;
  for (const product of cart) {
    quantity = quantity + product.quantity;
    total = total + product.price * product.quantity;
    shipping = shipping + product.shipping;
  }
  let grandTotal=0;
  if(total > 0)
  {
     grandTotal = total +  20;
  }
  

  const handleCheckOut=()=>{


    console.log(cart)
  }
  
  return (
    <div className="cart border m-5">
      <h4 className="text-2xl mb-4">Order Summary</h4>
      <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
         
          <tbody>
            <tr class="border-b border-gray-200 dark:border-gray-700">
              <th
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800"
              >
                Items Order (Quantity)
              </th>

              <td class="px-8 py-4">{quantity} </td>
            </tr>
            <tr class="border-b border-gray-200 dark:border-gray-700">
              <th
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800"
              >
                Subtotal (Taka)
              </th>

              <td class="px-8 py-4">{total}</td>
            </tr>
            <tr class="border-b border-gray-200 dark:border-gray-700">
              <th
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800"
              >
                Delivery Fee (Taka)
              </th>

              <td class="px-8 py-4">{quantity ?  "20.00" : "00"}</td>
            </tr>
            <tr class="border-b border-gray-200 dark:border-gray-700">
              <th
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800"
              >
                Total (Taka)
              </th>

              <td class="px-8 py-4">{grandTotal.toFixed(2)}</td>
            </tr>
          </tbody>
        </table>

        <div className="flex">
         
          <button onClick={handleCheckOut} className="btn btn-success m-5" >
            Checkout
          </button>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Cart;
