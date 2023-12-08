import React from 'react'
import "./Header.scss"
import Logo from "../../Assets/Img/logo.png"


const Header = () => {
    return (
        <header>
            <nav>
                <ul>
                    <li>
                        <a href="#"><img src={Logo} alt="" /></a>
                    </li>
                </ul>

                <ul>
                    <li><a href="#">Bosh sahifa</a></li>
                    <li><a href="#">Kitoblar</a></li>
                    <li><a href="#">Aksiyalar</a></li>
                    <li><a href="#">Kontaktlar</a></li>
                    <li><button>Ro’yxatdan o’tish</button></li>
                </ul>
            </nav>
        </header> 
    )
}

export default Header