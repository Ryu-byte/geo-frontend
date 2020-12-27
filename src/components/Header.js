import React from "react";
import styles from '../css/Header.module.css';
import logo from '../images/logo.svg';

export const Header = () => {
    return (
        <div className={styles.header}>
            <div className="container">
                <div className={styles['header__left-side']}>
                    <img src={logo} alt={'logo'}/>
                    <div>
                        Рост<br/>
                        Проект<br/>
                        Индустрия
                    </div>
                </div>
                <div className={styles['header__right-side']}>
                    <a href="mailto:rosprogectin.ru@rosprojectin.ru">
                        rosprogectin.ru@rosprojectin.ru
                    </a>
                    <a href="tel:88632000000">
                        8 863 200-00-00
                    </a>
                </div>
            </div>
        </div>
    )
}