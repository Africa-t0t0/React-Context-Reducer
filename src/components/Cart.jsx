import { useContext } from "react";

import { CartContext } from "../store/shopping-cart-context";

// now we are deprecating the use of items property, this was the previous function.
// export default function Cart({ items, onUpdateItemQuantity }) {


// and this is the updated function
export default function Cart() {

  const { items, updateItemQuantity} = useContext(CartContext);

  // you can also destructure the component to obtain certains props, for example:
  // const { items } = useContextß(CartContext);
  // const cartCtx = useContext(CartContext);

  // const { items } = useContext(CartContext);

  // instead of using items, we will use cartCtx that contains the items!

  const totalPrice = items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const formattedTotalPrice = `$${totalPrice.toFixed(2)}`;

  return (
    <div id="cart">
      {/* we can use both ways */}
      {/* {cartCtx.items.length === 0 && <p>No items in cart!</p>} */}
      {items.length === 0 && <p>No items in cart!</p>}
      {items.length > 0 &&  (
        <ul id="cart-items">
          {items.map((item) => {
            const formattedPrice = `$${item.price.toFixed(2)}`;

            return (
              <li key={item.id}>
                <div>
                  <span>{item.name}</span>
                  <span> ({formattedPrice})</span>
                </div>
                <div className="cart-item-actions">
                  <button onClick={() => updateItemQuantity(item.id, -1)}>
                    -
                  </button>
                  <span>{item.quantity}</span>
                  <button onClick={() => updateItemQuantity(item.id, 1)}>
                    +
                  </button>
                </div>
              </li>
            );
          })}
        </ul>
      )}
      <p id="cart-total-price">
        Cart Total: <strong>{formattedTotalPrice}</strong>
      </p>
    </div>
  );
}
