import React from 'react';
// import { Link } from 'react-router-dom';
import styles from "./Nav2.module.css";
const Nav2 = () => {
  return (
            <>
            <div className={styles.navbar}>
                <div className={styles.left}>
                    <select className={styles.dropdown} >
                        <option value="">-- All Category --</option>
                        <option value="Electronics">Electronics</option>
                        <option value="Clothing">Clothing</option>
                        <option value="Books">Books</option>
                        <option value="Home & Garden">Home & Garden</option>
                        <option value="Sports & Outdoors">Sports & Outdoors</option>
                        <option value="Other">Other</option>  
                    </select>
    
                    <button className={styles.button}>Exchange</button>
                    <button className={styles.button}>Workshops</button>
                    <button className={styles.button}>Customer Care</button>
                </div>
    
                <div className={styles.right}>
                    <p>Follow us :</p>
                    <a href="https://facebook.com" target="_blank" rel="noreferrer">
                        <img
                            src="https://cdn-icons-png.flaticon.com/512/733/733547.png"
                            alt="Facebook"
                            className={styles.icon}
                        />
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noreferrer">
                        <img
                            src="https://cdn-icons-png.flaticon.com/512/733/733579.png"
                            alt="Twitter"
                            className={styles.icon}
                        />
                    </a>
                    <a href="https://instagram.com" target="_blank" rel="noreferrer">
                        <img
                            src="https://cdn-icons-png.flaticon.com/512/733/733558.png"
                            alt="Instagram"
                            className={styles.icon}
                        />
                    </a>
                    <select className={styles.dropdown2} >
                        <option value="">Eng</option>
                        <option value="Electronics">spanish</option>
                        <option value="Clothing">French</option>
                        <option value="Books">Chinese</option>
                    </select>
                    <button className={styles.button}>Log in</button>
                </div>
            </div>
            </>
  )    
    
  
}

export default Nav2

{/* <Link to="./LoginSignup.jsx">Log in</Link> */}