import React from 'react'
import '../assets/Styles/SearchBar.css'

const Product = () => {
  return (
    <div>
        <div className="search-container">
  <input
    type="text"
    className="search-input"
    placeholder="Tìm kiếm sản phẩm..."
  />
  <button className="search-btn">🔍</button>
</div>

    </div>
  )
}

export default Product