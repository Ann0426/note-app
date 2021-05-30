
import React from 'react';
import { auth } from "../firebase";
import { Link } from "react-router-dom";
import { useStateValue } from "../StateProvider";
import styles from "./Header.module.css";
const Header = () => {
	const [{  user }, dispatch] = useStateValue();
	const handleAuthenticaton = () => {
	  if (user) {
		  auth.signOut();
	  }
	}
	return (
		
		<div className='header'>
			<h1>Notes</h1> 
		 
		<div className = {styles.header__option} >
			{!user?<span className = {styles.header__optionLineOne} >Hello ! </span> :
                  <span className = {styles.header__optionLineOne} >Hello { user.email } ! </span> }
        <Link to = {!user && './login' } className={styles.logoContainer}>
        <span className = {styles.header__optionLineTwo} onClick = { handleAuthenticaton }> {user ? 'Sign Out' : 'Sign In'} </span> </Link>
		</div>
		</div>
	);
};

export default Header;