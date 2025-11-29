import { useCart } from "../../../../Context/CartContext";
import { useNavigate } from "react-router-dom";
import "../Style/style.css";

export const Shopping_cart = () => {
  const navigate = useNavigate();
  const { cartItems, removeFromCart, updateQuantity, getCartTotal, clearCart } =
    useCart();

  const subtotal = getCartTotal();
  const shipping = subtotal > 50 ? 0 : 9.99;
  const tax = subtotal * 0.08;
  const total = subtotal + shipping + tax;

  if (cartItems.length === 0) {
    return (
      <div className="shopping-cart-empty">
        <div className="shopping-cart-empty-content">
          <div className="shopping-cart-empty-icon">🛒</div>
          <h2>Your Cart is Empty</h2>
          <p>Add some products to get started!</p>
          <button
            className="shopping-cart-continue-btn"
            onClick={() => navigate("/store")}
          >
            Continue Shopping
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="shopping-cart-container">
      <div className="shopping-cart-header">
        <h1 className="shopping-cart-title">
          Shopping Cart ({cartItems.length})
        </h1>
        <button
          className="shopping-cart-back-btn"
          onClick={() => navigate("/store")}
        >
          ← Back to Market
        </button>
      </div>

      <div className="shopping-cart-content">
        {/* Cart Items */}
        <div className="shopping-cart-items">
          {cartItems.map((item) => (
            <div key={item.id} className="shopping-cart-item">
              <div className="shopping-cart-item-image">
                <div className="shopping-cart-item-placeholder">
                  {item.name.charAt(0)}
                </div>
              </div>

              <div className="shopping-cart-item-details">
                <h3 className="shopping-cart-item-name">{item.name}</h3>
                <p className="shopping-cart-item-category">
                  {item.category.charAt(0).toUpperCase() +
                    item.category.slice(1)}
                </p>
                <p className="shopping-cart-item-price">
                  ${item.price.toFixed(2)}
                </p>
              </div>

              <div className="shopping-cart-item-quantity">
                <button
                  className="shopping-cart-quantity-btn"
                  onClick={() => updateQuantity(item.id, item.quantity - 1)}
                >
                  -
                </button>
                <input
                  type="number"
                  className="shopping-cart-quantity-input"
                  value={item.quantity}
                  onChange={(e) => {
                    const val = parseInt(e.target.value);
                    if (val > 0) updateQuantity(item.id, val);
                  }}
                  min="1"
                />
                <button
                  className="shopping-cart-quantity-btn"
                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                >
                  +
                </button>
              </div>

              <div className="shopping-cart-item-total">
                <p className="shopping-cart-item-total-price">
                  ${(item.price * item.quantity).toFixed(2)}
                </p>
                <button
                  className="shopping-cart-remove-btn"
                  onClick={() => removeFromCart(item.id)}
                >
                  🗑️ Remove
                </button>
              </div>
            </div>
          ))}

          <button className="shopping-cart-clear-btn" onClick={clearCart}>
            Clear Cart
          </button>
        </div>

        {/* Order Summary */}
        <div className="shopping-cart-summary">
          <h2 className="shopping-cart-summary-title">Order Summary</h2>

          <div className="shopping-cart-summary-row">
            <span>Subtotal</span>
            <span>${subtotal.toFixed(2)}</span>
          </div>

          <div className="shopping-cart-summary-row">
            <span>Shipping</span>
            <span>{shipping === 0 ? "Free" : `$${shipping.toFixed(2)}`}</span>
          </div>

          <div className="shopping-cart-summary-row">
            <span>Tax (Estimated)</span>
            <span>${tax.toFixed(2)}</span>
          </div>

          <div className="shopping-cart-summary-divider"></div>

          <div className="shopping-cart-summary-total">
            <span>Total</span>
            <span className="shopping-cart-total-amount">
              ${total.toFixed(2)}
            </span>
          </div>

          {subtotal < 50 && (
            <p className="shopping-cart-shipping-notice">
              💡 Add ${(50 - subtotal).toFixed(2)} more for free shipping!
            </p>
          )}

          <button
            className="shopping-cart-checkout-btn"
            onClick={() => navigate("/store/checkout")}
          >
            Proceed to Checkout →
          </button>

          <div className="shopping-cart-benefits">
            <div className="shopping-cart-benefit">
              <span className="shopping-cart-benefit-icon">🚚</span>
              <span>Free Shipping over $50</span>
            </div>
            <div className="shopping-cart-benefit">
              <span className="shopping-cart-benefit-icon">🔄</span>
              <span>30 Day Returns</span>
            </div>
            <div className="shopping-cart-benefit">
              <span className="shopping-cart-benefit-icon">🛡️</span>
              <span>2 Year Warranty</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
