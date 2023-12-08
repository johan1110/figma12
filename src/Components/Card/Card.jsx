import React from 'react'
import "./Card.scss"
import img1 from "../../Assets/Img/1.1.png"
import img2 from "../../Assets/Img/1.2.png"
import img3 from "../../Assets/Img/1.3.png"

const Card = () => {
    return (
        <div className="card__wraper2">
            <div className="card2">

                <div className="content">
                    
                <div className="lol2"></div>

                    <h1>Nega aynan <br />
                        Akademnashr?</h1>
                </div>

                <div className="content2">

                    <div className="box">
                        <div className="img"><img src={img1} alt="" /></div><br />
                        <h2>Oson buyurtma qilish</h2><br />
                        <p>Akademnashr.uz saytidan o’zingizga yoqqan kitobni sodda usulda buyurtma qila olasiz.</p>
                    </div>

                    <div className="box">
                        <div className="img"><img src={img2} alt="" /></div><br />
                        <h2>Eng sara kitoblar</h2><br />
                        <p>Trenddagi eng ommabop, turli auditoriyalarga mo’ljallangan har xil janrdagi kitoblarni topa olasiz.</p>
                    </div>

                    <div className="box">
                        <div className="img"><img src={img3} alt="" /></div><br />
                        <h2>Tez yetkazib berish</h2><br />
                        <p>O’zbekistonning ixtiyoriy hududiga 3 ish kuni ichida, xalqaro buyurtmalarni 10 ish kuni ichida yetkazib beriladi.</p>
                </div>

            </div>

        </div>
        </div >
    )
}

export default Card