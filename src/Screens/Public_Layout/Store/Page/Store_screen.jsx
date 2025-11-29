import { useCart } from "../../../../Context/CartContext";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { ProductsData } from "../Data/ProductsData";
import "../Style/style.css";

export const Store_screen = () => {
  const navigate = useNavigate();
  const { addToCart, getCartItemsCount } = useCart();

  const [selectedCategory, setSelectedCategory] = useState("all");
  const [showFilters, setShowFilters] = useState(false);
  const [priceRange, setPriceRange] = useState([0, 300]);
  const [sortBy, setSortBy] = useState("featured");

  const categories = [
    { id: "all", name: "All Products", count: ProductsData.length },
    {
      id: "supplements",
      name: "Supplements",
      count: ProductsData.filter((p) => p.category === "supplements").length,
    },
    {
      id: "gear",
      name: "Gear & Equipment",
      count: ProductsData.filter((p) => p.category === "gear").length,
    },
    {
      id: "apparel",
      name: "Apparel",
      count: ProductsData.filter((p) => p.category === "apparel").length,
    },
  ];

  const filteredProducts = ProductsData.filter((product) => {
    if (selectedCategory !== "all" && product.category !== selectedCategory)
      return false;
    if (product.price < priceRange[0] || product.price > priceRange[1])
      return false;
    return true;
  }).sort((a, b) => {
    if (sortBy === "price-low") return a.price - b.price;
    if (sortBy === "price-high") return b.price - a.price;
    if (sortBy === "rating") return b.rating - a.rating;
    return 0;
  });

  const handleProductClick = (productId) => {
    navigate(`/store/product/${productId}`);
  };

  const handleQuickAdd = (e, product) => {
    e.stopPropagation();
    addToCart(product, 1);
  };

  return (
    <section className="gym-store-section">
      <div className="gym-store-container">
        <div className="gym-store-header">
          <div className="gym-store-title-area">
            <h1 className="gym-store-title">
              Vythra <span className="gym-store-title-highlight">Market</span>
            </h1>
            <p className="gym-store-subtitle">
              Premium supplements and gear for elite performance.
            </p>
          </div>
          <div className="gym-store-header-actions">
            <button
              className="gym-store-filter-btn"
              onClick={() => setShowFilters(!showFilters)}
            >
              🔍 Filters
            </button>
            <button
              className="gym-store-cart-btn"
              onClick={() => navigate("/store/cart")}
            >
              🛒 View Cart ({getCartItemsCount()})
            </button>
          </div>
        </div>

        <div className="gym-store-categories">
          {categories.map((cat) => (
            <button
              key={cat.id}
              className={`gym-store-category-tab ${
                selectedCategory === cat.id ? "active" : ""
              }`}
              onClick={() => setSelectedCategory(cat.id)}
            >
              {cat.name}
              <span className="gym-store-category-count">({cat.count})</span>
            </button>
          ))}
        </div>

        {showFilters && (
          <div className="gym-store-filters-panel">
            <div className="gym-store-filter-group">
              <label className="gym-store-filter-label">Sort By</label>
              <select
                className="gym-store-filter-select"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
              >
                <option value="featured">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
              </select>
            </div>

            <div className="gym-store-filter-group">
              <label className="gym-store-filter-label">
                Price Range: ${priceRange[0]} - ${priceRange[1]}
              </label>
              <div className="gym-store-price-inputs">
                <input
                  type="number"
                  className="gym-store-price-input"
                  value={priceRange[0]}
                  onChange={(e) =>
                    setPriceRange([Number(e.target.value), priceRange[1]])
                  }
                  placeholder="Min"
                />
                <span>-</span>
                <input
                  type="number"
                  className="gym-store-price-input"
                  value={priceRange[1]}
                  onChange={(e) =>
                    setPriceRange([priceRange[0], Number(e.target.value)])
                  }
                  placeholder="Max"
                />
              </div>
            </div>

            <button
              className="gym-store-reset-filters"
              onClick={() => {
                setPriceRange([0, 300]);
                setSortBy("featured");
                setSelectedCategory("all");
              }}
            >
              Reset Filters
            </button>
          </div>
        )}

        <div className="gym-store-products-grid">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="gym-store-product-card"
              onClick={() => handleProductClick(product.id)}
            >
              {product.badge && (
                <div className="gym-store-product-badge">{product.badge}</div>
              )}

              <div className="gym-store-product-image">
                <div className="gym-store-product-placeholder">
                  {product.name.charAt(0)}
                </div>
              </div>

              <div className="gym-store-product-info">
                <h3 className="gym-store-product-name">{product.name}</h3>
                <p className="gym-store-product-category">
                  {product.category.charAt(0).toUpperCase() +
                    product.category.slice(1)}
                </p>

                <div className="gym-store-product-rating">
                  <span className="gym-store-rating-star">⭐</span>
                  <span className="gym-store-rating-value">
                    {product.rating}
                  </span>
                  <span className="gym-store-rating-reviews">
                    ({product.reviews} reviews)
                  </span>
                </div>

                <div className="gym-store-product-footer">
                  <span className="gym-store-product-price">
                    ${product.price.toFixed(2)}
                  </span>
                  <button
                    className="gym-store-add-to-cart"
                    onClick={(e) => handleQuickAdd(e, product)}
                  >
                    + Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="gym-store-no-results">
            <p>No products found matching your filters.</p>
            <button
              className="gym-store-reset-filters"
              onClick={() => {
                setPriceRange([0, 300]);
                setSortBy("featured");
                setSelectedCategory("all");
              }}
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
