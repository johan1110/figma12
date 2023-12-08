import React from 'react'
import "./Header2.scss"
import Logo2 from "../../Assets/Img/logo.png"

const Header2 = () => {
    return (
        <div className="header">

            <div className="nav">
                
                <div className="ul">
                    <div className="li"> <a href="#"><img src={Logo2} alt="" /></a></div>
                </div>

                <div className="ul">
                    <div className="li"><a href="#"><i class="fa-brands fa-telegram"></i></a></div>
                    <div className="li"><a href="#"><i class="fa-brands fa-square-facebook"></i></a></div>
                    <div className="li"><a href="#"><i class="fa-brands fa-instagram"></i></a></div>
                </div>

            </div>


            <div className="you"></div>

            <div className="card">
                <div className="bocks">
                    <p>Bo'sh sahifa</p>
                    <p>Kitoblar</p>
                    <p>Aksiyaler</p>
                    <p>Yangiliklar</p>
                    <p>Kontaklar</p>
                </div>

                <div className="bocks">
                    <p>Ilmiy nashrlar</p>
                    <p>Ilmiy-ommabop nashrlar</p>
                    <p>Ma’rifiy nashrlar</p>
                    <p>Lug’atlar</p>
                    <p>Adabiy-badiiy nashrlar</p>
                    <p>Abituriyentlar uchun</p>
                    <p>Bolalar uchun</p>

                </div>

                <div className="bocks">
                    <p>Ko’p so’raladigan savollar</p>
                    <p>Yetkazib berish haqida</p>
                    <p>To’lov usullari haqida</p>
                </div>

                <div className="bocks">
                    <p>Bo’sh ish o’rinlari</p>
                    <p>Biz bilan bog’lanish</p>
                    <p>Maxfiylik nizomi</p>
                </div>
            </div>

        </div>





    )
}

export default Header2