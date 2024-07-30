import React from 'react';
import "./Header.css"
import AnchorTemporaryDrawer from "./Drawer"
import Button from "../Button/Button"
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='navbar'>
            <h1 className='logo'>CryptoTreasure <span style={{color:"var(--blue)"}}>...</span></h1>
            <div className='links'>
                <Link to="/"> <p className="link">Home</p> </Link>
                <Link to="/dashboard"> 
                    <Button text={"dashboard"} 
                        // outlined={true}
                    onClick={()=>console.log("Btn clicked")}
                    />
                </Link>
            </div>
            <div className="mobile-drawer">
                <AnchorTemporaryDrawer />
            </div>
        </div>
    );
}

export default Header;
