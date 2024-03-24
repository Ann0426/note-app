
import React from 'react';
import { Link } from "react-router-dom";
import { useStateValue } from "../StateProvider";
import styles from "./Header.module.css";
const Header = () => {
	const [{  user }, dispatch] = useStateValue();
	return (
		
		<div className='header'>
			<h1>Notes</h1> 
		<div className = {styles.header__option} >
			{!user?<span className = {styles.header__optionLineOne} >Hello ! </span> :
                  <span className = {styles.header__optionLineOne} >Hello { user.email } ! </span> }
		</div>
		</div>
	);
};

export default Header;