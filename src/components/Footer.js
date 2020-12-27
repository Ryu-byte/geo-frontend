import React from "react";
import "../css/Footer.css";
import webjoxlogo from "../images/webjoxlogo.svg";
import InputMask from "react-input-mask";

export const Footer = () => {
    return (
        <div className={'footer'}>
            <div className={`container footer`}>
                <div className="footer__content">
                    <div className='footer__left-side'>
                        <div className='footer__title'>
                            Контакты
                        </div>
                        <div>
                            8 (863) 200-45-88
                        </div>
                        <div>
                            Ростов-на-Дону, ул. Содружества, д. 80А
                        </div>
                    </div>
                    <div className='footer__right-side'>
                        <div className='footer__title'>
                            обратная связь
                        </div>
                        <div className='footer__content_input'>
                            <input type="text" placeholder={"Имя"}/>
                            <InputMask mask="+7 999 999 99 99" maskChar=" " placeholder={"Телефон"}/>
                            <label htmlFor='footer__content_input_personal'>
                                <input type="checkbox" id="footer__content_input_personal"/>
                                <span>Я согласен на обработку&nbsp;<a href="#">моих персональных данных</a></span>
                            </label>
                        </div>
                        <button type="submit" className='footer__content_input_button'>
                            Перезвоните мне
                        </button>
                    </div>
                </div>
                <hr align="center" width="100%" size="1" color="#989898"/>
                <div className="footer__author">
                    <div>
                        © РостПроектИндустрия 2020 г. Все права защищены.
                    </div>
                    <div>
                        Сделано в <img src={webjoxlogo}/>
                    </div>
                </div>
            </div>
        </div>
    )
}