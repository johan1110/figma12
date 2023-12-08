import React from 'react'
import "./Hero2.scss"
import Card2 from "../../Assets/Img/2.png"

const Hero2 = () => {
    return (
        <div className="card__wraper3">
            <div className="card3">
                <div className="box3">

                    <h1>Bolalar kitoblari uchun
                        ajoyib aksiya!</h1>

                    <p>Ertaklar, she’rlar, sarguzasht asarlar, fikrlashni o’stirish uchun turli mashq qo’llanmalari va komikslar..</p>
                    <p>Aksiyadagi eng katta to’plamda 50 ta kitobni 350 ming so’mga (aslida 383 ming so’m) sotib olishingiz mumkin.</p>

                    <button>Buyurtma berish</button>
                </div>


                <div className="box3">
                    <div className="img3">
                        <img src={Card2} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero2