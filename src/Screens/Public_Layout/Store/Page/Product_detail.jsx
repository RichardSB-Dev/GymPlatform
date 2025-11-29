import { useNavigate, useParams } from "react-router-dom";
import { useCart } from "../../../../Context/CartContext";
import { ProductsData } from "../Data/ProductsData";
import { useState } from "react";
import "../Style/style.css";

export const Product_detail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();

  const product = ProductsData.find((p) => p.id === parseInt(id));
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  if (!product) {
    return (
      <div className="product-detail-not-found">
        <h2>Product Not Found</h2>
        <button
          className="product-detail-back-btn"
          onClick={() => navigate("/store")}
        >
          ← Back to Store
        </button>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart(product, quantity);
    setShowSuccessMessage(true);
    setTimeout(() => setShowSuccessMessage(false), 3000);
  };

  const incrementQuantity = () => setQuantity(quantity + 1);
  const decrementQuantity = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  return (
    <div className="product-detail-container">
      {/* Success Message */}
      {showSuccessMessage && (
        <div className="product-detail-success-toast">
          ✓ Added to cart successfully!
        </div>
      )}

      {/* Back Button */}
      <button
        className="product-detail-back"
        onClick={() => navigate("/store")}
      >
        ← Back to Market
      </button>

      <div className="product-detail-content">
        {/* Left Column - Images */}
        <div className="product-detail-images">
          <div className="product-detail-main-image">
            {product.badge && (
              <div className="product-detail-badge">{product.badge}</div>
            )}
            <div className="product-detail-image-placeholder">
              {product.name.charAt(0)}
            </div>
          </div>

          {product.images && product.images.length > 1 && (
            <div className="product-detail-thumbnails">
              {product.images.map((img, index) => (
                <div
                  key={index}
                  className={`product-detail-thumbnail ${
                    selectedImage === index ? "active" : ""
                  }`}
                  onClick={() => setSelectedImage(index)}
                >
                  {product.name.charAt(index)}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Right Column - Info */}
        <div className="product-detail-info">
          {/* Stock Status */}
          <div className="product-detail-stock">{product.stock}</div>

          {/* Product Name */}
          <h1 className="product-detail-title">{product.name}</h1>

          {/* Category */}
          <p className="product-detail-category">
            {product.category.charAt(0).toUpperCase() +
              product.category.slice(1)}
          </p>

          {/* Rating */}
          <div className="product-detail-rating">
            <div className="product-detail-stars">
              <span className="product-detail-star">⭐</span>
              <span className="product-detail-rating-value">
                {product.rating}
              </span>
            </div>
            <span className="product-detail-reviews">
              ({product.reviews} reviews)
            </span>
          </div>

          {/* Price */}
          <div className="product-detail-price">
            ${product.price.toFixed(2)}
          </div>

          {/* Short Description */}
          <p className="product-detail-description">{product.description}</p>

          {/* Key Features */}
          {product.features && (
            <div className="product-detail-features">
              <h3 className="product-detail-section-title">Key Features</h3>
              <div className="product-detail-features-grid">
                {product.features.map((feature, index) => (
                  <div key={index} className="product-detail-feature-item">
                    <span className="product-detail-feature-icon">✓</span>
                    {feature}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Quantity Selector */}
          <div className="product-detail-quantity-section">
            <label className="product-detail-quantity-label">Quantity</label>
            <div className="product-detail-quantity-controls">
              <button
                className="product-detail-quantity-btn"
                onClick={decrementQuantity}
              >
                -
              </button>
              <input
                type="number"
                className="product-detail-quantity-input"
                value={quantity}
                onChange={(e) => {
                  const val = parseInt(e.target.value);
                  if (val > 0) setQuantity(val);
                }}
                min="1"
              />
              <button
                className="product-detail-quantity-btn"
                onClick={incrementQuantity}
              >
                +
              </button>
            </div>
          </div>

          {/* Add to Cart Button */}
          <button
            className="product-detail-add-cart-btn"
            onClick={handleAddToCart}
          >
            🛒 Add to Cart
          </button>

          {/* Additional Info */}
          <div className="product-detail-additional-info">
            <div className="product-detail-info-item">
              <span className="product-detail-info-icon">🚚</span>
              <span>Free Shipping over $50</span>
            </div>
            <div className="product-detail-info-item">
              <span className="product-detail-info-icon">🔄</span>
              <span>30 Day Returns</span>
            </div>
            <div className="product-detail-info-item">
              <span className="product-detail-info-icon">🛡️</span>
              <span>2 Year Warranty</span>
            </div>
          </div>
        </div>
      </div>

      {/* Long Description */}
      {product.longDescription && (
        <div className="product-detail-long-description">
          <h2 className="product-detail-section-title">Product Details</h2>
          <p>{product.longDescription}</p>
        </div>
      )}

      {/* Benefits */}
      {product.benefits && (
        <div className="product-detail-benefits">
          <h2 className="product-detail-section-title">Benefits</h2>
          <ul className="product-detail-benefits-list">
            {product.benefits.map((benefit, index) => (
              <li key={index}>{benefit}</li>
            ))}
          </ul>
        </div>
      )}

      {/* Specifications */}
      {product.specifications && (
        <div className="product-detail-specifications">
          <h2 className="product-detail-section-title">Specifications</h2>
          <div className="product-detail-specs-grid">
            {Object.entries(product.specifications).map(([key, value]) => (
              <div key={key} className="product-detail-spec-item">
                <span className="product-detail-spec-label">
                  {key.charAt(0).toUpperCase() +
                    key.slice(1).replace(/([A-Z])/g, " $1")}
                  :
                </span>
                <span className="product-detail-spec-value">{value}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
