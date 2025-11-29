import { useCart } from "../../../../Context/CartContext";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "../Style/style.css";

export const Checkout = () => {
  const navigate = useNavigate();
  const { cartItems, getCartTotal, clearCart } = useCart();

  const [formData, setFormData] = useState({
    // Contact Info
    email: "",
    phone: "",
    // Shipping Address
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
    country: "United States",
    // Payment
    cardName: "",
    cardNumber: "",
    expiryDate: "",
    cvv: "",
    paymentMethod: "credit-card",
  });

  const [errors, setErrors] = useState({});
  const [isProcessing, setIsProcessing] = useState(false);

  const subtotal = getCartTotal();
  const shipping = subtotal > 50 ? 0 : 9.99;
  const tax = subtotal * 0.08;
  const total = subtotal + shipping + tax;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    // Email validation
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }

    // Phone validation
    if (!formData.phone) {
      newErrors.phone = "Phone is required";
    }

    // Required fields
    const requiredFields = [
      "firstName",
      "lastName",
      "address",
      "city",
      "state",
      "zipCode",
    ];
    requiredFields.forEach((field) => {
      if (!formData[field]) {
        newErrors[field] = `${
          field.charAt(0).toUpperCase() + field.slice(1)
        } is required`;
      }
    });

    // Payment validation
    if (formData.paymentMethod === "credit-card") {
      if (!formData.cardName) {
        newErrors.cardName = "Cardholder name is required";
      }
      if (!formData.cardNumber) {
        newErrors.cardNumber = "Card number is required";
      } else if (formData.cardNumber.replace(/\s/g, "").length !== 16) {
        newErrors.cardNumber = "Card number must be 16 digits";
      }
      if (!formData.expiryDate) {
        newErrors.expiryDate = "Expiry date is required";
      }
      if (!formData.cvv) {
        newErrors.cvv = "CVV is required";
      } else if (formData.cvv.length !== 3) {
        newErrors.cvv = "CVV must be 3 digits";
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsProcessing(true);

    // Simulate payment processing
    setTimeout(() => {
      const orderId = `VY-${Math.random()
        .toString(36)
        .substr(2, 9)
        .toUpperCase()}`;
      clearCart();
      navigate("/store/order-confirmed", {
        state: {
          orderId,
          total,
          formData,
        },
      });
    }, 2000);
  };

  if (cartItems.length === 0) {
    navigate("/store/cart");
    return null;
  }

  return (
    <div className="checkout-container">
      <div className="checkout-header">
        <h1 className="checkout-title">Secure Checkout</h1>
        <p className="checkout-subtitle">
          All transactions are secure and encrypted
        </p>
      </div>

      <div className="checkout-content">
        {/* Checkout Form */}
        <div className="checkout-form-section">
          <form onSubmit={handleSubmit}>
            {/* Contact Information */}
            <div className="checkout-section">
              <h2 className="checkout-section-title">Contact Information</h2>
              <div className="checkout-form-grid">
                <div className="checkout-form-group full-width">
                  <label className="checkout-label">Email</label>
                  <input
                    type="email"
                    name="email"
                    className={`checkout-input ${errors.email ? "error" : ""}`}
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john.doe@example.com"
                  />
                  {errors.email && (
                    <span className="checkout-error">{errors.email}</span>
                  )}
                </div>
                <div className="checkout-form-group full-width">
                  <label className="checkout-label">Phone</label>
                  <input
                    type="tel"
                    name="phone"
                    className={`checkout-input ${errors.phone ? "error" : ""}`}
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+1 (555) 123-4567"
                  />
                  {errors.phone && (
                    <span className="checkout-error">{errors.phone}</span>
                  )}
                </div>
              </div>
            </div>

            {/* Shipping Address */}
            <div className="checkout-section">
              <h2 className="checkout-section-title">Shipping Address</h2>
              <div className="checkout-form-grid">
                <div className="checkout-form-group">
                  <label className="checkout-label">First Name</label>
                  <input
                    type="text"
                    name="firstName"
                    className={`checkout-input ${
                      errors.firstName ? "error" : ""
                    }`}
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder="John"
                  />
                  {errors.firstName && (
                    <span className="checkout-error">{errors.firstName}</span>
                  )}
                </div>
                <div className="checkout-form-group">
                  <label className="checkout-label">Last Name</label>
                  <input
                    type="text"
                    name="lastName"
                    className={`checkout-input ${
                      errors.lastName ? "error" : ""
                    }`}
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder="Doe"
                  />
                  {errors.lastName && (
                    <span className="checkout-error">{errors.lastName}</span>
                  )}
                </div>
                <div className="checkout-form-group full-width">
                  <label className="checkout-label">Address</label>
                  <input
                    type="text"
                    name="address"
                    className={`checkout-input ${
                      errors.address ? "error" : ""
                    }`}
                    value={formData.address}
                    onChange={handleChange}
                    placeholder="123 Main Street"
                  />
                  {errors.address && (
                    <span className="checkout-error">{errors.address}</span>
                  )}
                </div>
                <div className="checkout-form-group">
                  <label className="checkout-label">City</label>
                  <input
                    type="text"
                    name="city"
                    className={`checkout-input ${errors.city ? "error" : ""}`}
                    value={formData.city}
                    onChange={handleChange}
                    placeholder="New York"
                  />
                  {errors.city && (
                    <span className="checkout-error">{errors.city}</span>
                  )}
                </div>
                <div className="checkout-form-group">
                  <label className="checkout-label">State</label>
                  <input
                    type="text"
                    name="state"
                    className={`checkout-input ${errors.state ? "error" : ""}`}
                    value={formData.state}
                    onChange={handleChange}
                    placeholder="NY"
                  />
                  {errors.state && (
                    <span className="checkout-error">{errors.state}</span>
                  )}
                </div>
                <div className="checkout-form-group">
                  <label className="checkout-label">ZIP Code</label>
                  <input
                    type="text"
                    name="zipCode"
                    className={`checkout-input ${
                      errors.zipCode ? "error" : ""
                    }`}
                    value={formData.zipCode}
                    onChange={handleChange}
                    placeholder="10001"
                  />
                  {errors.zipCode && (
                    <span className="checkout-error">{errors.zipCode}</span>
                  )}
                </div>
                <div className="checkout-form-group">
                  <label className="checkout-label">Country</label>
                  <select
                    name="country"
                    className="checkout-input"
                    value={formData.country}
                    onChange={handleChange}
                  >
                    <option value="United States">United States</option>
                    <option value="Canada">Canada</option>
                    <option value="Mexico">Mexico</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Payment Method */}
            <div className="checkout-section">
              <h2 className="checkout-section-title">Payment Method</h2>
              <p className="checkout-secure-notice">
                All transactions are secure and encrypted
              </p>

              <div className="checkout-payment-methods">
                <label className="checkout-payment-option">
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="credit-card"
                    checked={formData.paymentMethod === "credit-card"}
                    onChange={handleChange}
                  />
                  <span>Credit Card</span>
                </label>
                <label className="checkout-payment-option">
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="paypal"
                    checked={formData.paymentMethod === "paypal"}
                    onChange={handleChange}
                  />
                  <span>PayPal</span>
                </label>
              </div>

              {formData.paymentMethod === "credit-card" && (
                <div className="checkout-form-grid">
                  <div className="checkout-form-group full-width">
                    <label className="checkout-label">Cardholder Name</label>
                    <input
                      type="text"
                      name="cardName"
                      className={`checkout-input ${
                        errors.cardName ? "error" : ""
                      }`}
                      value={formData.cardName}
                      onChange={handleChange}
                      placeholder="John Doe"
                    />
                    {errors.cardName && (
                      <span className="checkout-error">{errors.cardName}</span>
                    )}
                  </div>
                  <div className="checkout-form-group full-width">
                    <label className="checkout-label">Card Number</label>
                    <input
                      type="text"
                      name="cardNumber"
                      className={`checkout-input ${
                        errors.cardNumber ? "error" : ""
                      }`}
                      value={formData.cardNumber}
                      onChange={handleChange}
                      placeholder="0000 0000 0000 0000"
                      maxLength="19"
                    />
                    {errors.cardNumber && (
                      <span className="checkout-error">
                        {errors.cardNumber}
                      </span>
                    )}
                  </div>
                  <div className="checkout-form-group">
                    <label className="checkout-label">Expiry Date</label>
                    <input
                      type="text"
                      name="expiryDate"
                      className={`checkout-input ${
                        errors.expiryDate ? "error" : ""
                      }`}
                      value={formData.expiryDate}
                      onChange={handleChange}
                      placeholder="MM/YY"
                      maxLength="5"
                    />
                    {errors.expiryDate && (
                      <span className="checkout-error">
                        {errors.expiryDate}
                      </span>
                    )}
                  </div>
                  <div className="checkout-form-group">
                    <label className="checkout-label">CVC</label>
                    <input
                      type="text"
                      name="cvv"
                      className={`checkout-input ${errors.cvv ? "error" : ""}`}
                      value={formData.cvv}
                      onChange={handleChange}
                      placeholder="123"
                      maxLength="3"
                    />
                    {errors.cvv && (
                      <span className="checkout-error">{errors.cvv}</span>
                    )}
                  </div>
                </div>
              )}

              {formData.paymentMethod === "paypal" && (
                <div className="checkout-paypal-notice">
                  <p>
                    You will be redirected to PayPal to complete your purchase
                    securely.
                  </p>
                </div>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="checkout-submit-btn"
              disabled={isProcessing}
            >
              {isProcessing ? (
                <>
                  <span className="checkout-spinner"></span>
                  Processing...
                </>
              ) : (
                <>🔒 Pay Now</>
              )}
            </button>

            <p className="checkout-security-notice">
              🛡️ 256-bit SSL Secure Payment
            </p>
          </form>
        </div>

        {/* Order Review */}
        <div className="checkout-review-section">
          <h2 className="checkout-review-title">Order Review</h2>

          <div className="checkout-review-items">
            {cartItems.map((item) => (
              <div key={item.id} className="checkout-review-item">
                <div className="checkout-review-item-image">
                  {item.name.charAt(0)}
                </div>
                <div className="checkout-review-item-details">
                  <h4>{item.name}</h4>
                  <p>Qty: {item.quantity}</p>
                </div>
                <div className="checkout-review-item-price">
                  ${(item.price * item.quantity).toFixed(2)}
                </div>
              </div>
            ))}
          </div>

          <div className="checkout-review-summary">
            <div className="checkout-review-row">
              <span>Subtotal</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <div className="checkout-review-row">
              <span>Shipping</span>
              <span>{shipping === 0 ? "Free" : `$${shipping.toFixed(2)}`}</span>
            </div>
            <div className="checkout-review-row">
              <span>Tax</span>
              <span>${tax.toFixed(2)}</span>
            </div>
            <div className="checkout-review-divider"></div>
            <div className="checkout-review-total">
              <span>Total</span>
              <span>${total.toFixed(2)}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
