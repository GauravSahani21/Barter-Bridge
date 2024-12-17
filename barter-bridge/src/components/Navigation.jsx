import styles from "./Navigation.module.css";
import React from "react";

const Navigation = () => {
  return (
    <nav className={styles.navbar}>
    {/* Logo */}
      <div className={styles.logo}>BarterBridge</div>
      
    {/* Search Bar */}
      <div className={styles.searchContainer}>
        <input
          type="text"
          placeholder="Search..."
          className={styles.searchBar}
        />
        <button className={styles.searchButton}>
          <img
            src="https://cdn-icons-png.flaticon.com/512/54/54481.png"
            alt="Search"
            className={styles.searchIcon}
          />
        </button>
      </div>

    {/* Navigation Icons */}
      <ul className={styles.navLinks}>
        <li className={styles.navItem}>
          <img
            src="https://cdn-icons-png.flaticon.com/512/1170/1170576.png"
            alt="Cart"
            className={styles.navIcon}
          />
          <span className={styles.iconText}>Cart</span>
        </li>
        <li className={styles.navItem}>
          <img
            src="https://cdn-icons-png.flaticon.com/512/833/833472.png"
            alt="Like"
            className={styles.navIcon}
          />
          <span className={styles.iconText}>Wishlist</span>
        </li>
        <li className={styles.navItem}>
          <img
            src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
            alt="Profile"
            className={styles.navIcon}
          />
          <span className={styles.iconText}>Profile</span>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
