import React from 'react'
import "./Hero.scss"
import Card from "../../Assets/Img/1.png"

const Hero = () => {
    return (
        <div className="card__wraper">
            <div className="card">
                <div className="box">
                    <div className="lol"></div>
                    <h1>Pythonda dasturlash
                        asoslari</h1> 

                    <p>Dasturlash asoslariga oid o‘zbek tilidagi ilk eng mukammal qo‘llanma. Kitobning har bir bo‘limi uchun maxsus video darslar yozilgan bo‘lib, ularga kitobda ko‘rsatilgan QR kod orqali o‘tish mumkin.</p>

                    <button>Buyurtma berish</button>
                </div>


                <div className="box">
                    <div className="img">
                        <img src={Card} alt="" />
                    </div>
                </div>
            </div>
        </div>  
    )
}

export default Hero