import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../Style/style.css";

export const Order_confirmed = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { orderId, total, formData } = location.state || {};

  useEffect(() => {
    if (!orderId) {
      navigate("/store");
    }
  }, [orderId, navigate]);

  if (!orderId) return null;

  return (
    <div className="order-confirmed-container">
      <div className="order-confirmed-content">
        {/* Success Icon */}
        <div className="order-confirmed-icon">
          <div className="order-confirmed-checkmark">
            <svg viewBox="0 0 52 52">
              <circle
                className="order-confirmed-checkmark-circle"
                cx="26"
                cy="26"
                r="25"
                fill="none"
              />
              <path
                className="order-confirmed-checkmark-check"
                fill="none"
                d="M14.1 27.2l7.1 7.2 16.7-16.8"
              />
            </svg>
          </div>
        </div>

        {/* Success Message */}
        <h1 className="order-confirmed-title">Order Confirmed!</h1>
        <p className="order-confirmed-message">
          Thank you for your purchase. Your order <strong>#{orderId}</strong>{" "}
          has been confirmed and will be shipped shortly.
        </p>

        {/* Order Details */}
        <div className="order-confirmed-details">
          <div className="order-confirmed-detail-row">
            <span className="order-confirmed-label">Order Number:</span>
            <span className="order-confirmed-value">{orderId}</span>
          </div>
          <div className="order-confirmed-detail-row">
            <span className="order-confirmed-label">Total Amount:</span>
            <span className="order-confirmed-value">${total?.toFixed(2)}</span>
          </div>
          <div className="order-confirmed-detail-row">
            <span className="order-confirmed-label">Email:</span>
            <span className="order-confirmed-value">{formData?.email}</span>
          </div>
          <div className="order-confirmed-detail-row">
            <span className="order-confirmed-label">Shipping Address:</span>
            <span className="order-confirmed-value">
              {formData?.address}, {formData?.city}, {formData?.state}{" "}
              {formData?.zipCode}
            </span>
          </div>
        </div>

        {/* What's Next */}
        <div className="order-confirmed-next-steps">
          <h2 className="order-confirmed-next-title">What's Next?</h2>
          <div className="order-confirmed-steps">
            <div className="order-confirmed-step">
              <div className="order-confirmed-step-icon">📧</div>
              <div className="order-confirmed-step-content">
                <h3>Confirmation Email</h3>
                <p>
                  You'll receive a confirmation email with your order details
                </p>
              </div>
            </div>
            <div className="order-confirmed-step">
              <div className="order-confirmed-step-icon">📦</div>
              <div className="order-confirmed-step-content">
                <h3>Order Processing</h3>
                <p>We'll prepare your order for shipment within 24 hours</p>
              </div>
            </div>
            <div className="order-confirmed-step">
              <div className="order-confirmed-step-icon">🚚</div>
              <div className="order-confirmed-step-content">
                <h3>Shipping Notification</h3>
                <p>Track your package with the tracking number we'll send</p>
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="order-confirmed-actions">
          <button
            className="order-confirmed-btn primary"
            onClick={() => navigate("/store")}
          >
            Continue Shopping
          </button>
          <button
            className="order-confirmed-btn secondary"
            onClick={() => navigate("/")}
          >
            Return to Dashboard
          </button>
        </div>

        {/* Additional Info */}
        <div className="order-confirmed-info">
          <p>
            💡 Need help? Contact our support team at support@gymfitsport.com
          </p>
        </div>
      </div>
    </div>
  );
};
