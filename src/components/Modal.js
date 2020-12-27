import React from 'react';
import '../css/Modal.css';
import InputMask from 'react-input-mask';

export const Modal = ({active, setActive}) => {
    document.querySelector('body').style.overflow = active ? 'hidden' : '';
    return (
        <div className={active ? "modal active" : "modal"} onClick={() => setActive(false)}>
            <div className={"modal__content"} onClick={e => e.stopPropagation()}>
                <span>ФОРМА ОБРАТНОЙ СВЯЗИ</span>
                <svg onClick={() => setActive(false)} width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.5 1.5L18.5 18.5M19 1.5L2 18.5" stroke="black" strokeWidth="3" strokeLinecap="round"/>
                </svg>
                <div className={"modal__content_input"}>
                    <input type="text" placeholder={"Имя"}/>
                    <InputMask mask="+7 999 999 99 99" maskChar=" " placeholder={"Телефон"} />
                    <label htmlFor="modal__content_input_personal">
                        <input type="checkbox" id="modal__content_input_personal"/>
                        <span>Я согласен на обработку&nbsp;<a href="#">моих персональных данных</a></span>
                    </label>
                </div>
                <button type="submit" className={'modal__content_input_button'}>
                    Перезвоните мне
                </button>
            </div>
        </div>
    )
};

