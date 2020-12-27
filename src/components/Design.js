import React from "react";
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';
import 'swiper/swiper.scss';
import "../css/Swiper.css";
import styles from "../css/Design.module.css";

import SwiperCore, {Navigation, Pagination} from 'swiper';
import {Swiper, SwiperSlide} from 'swiper/react';
import projectSliderImage from '../images/projectSliderImage.png';
import projectSliderImage2 from '../images/projectSliderImage2.png';
import projectSliderImage3 from '../images/projectSliderImage3.png';
import leftArrow from '../images/leftArrow.svg';
import rightArrow from '../images/rightArrow.svg';

SwiperCore.use([Navigation, Pagination]);

export const Design = () => {
    return (
        <div className={styles.design}>
            <div className="container-fluid">
                <div className={styles['design__left-side']}>
                    <div className={styles['design__left-side_content']}>
                        <h1>
                            Инженерные изыскания
                        </h1>
                        <div>
                            <ul>
                                <li>
                                    Здания и сооружения
                                </li>
                                <li>
                                    Объекты промышленного назначения
                                </li>
                                <li>
                                    Объекты гражданского строительства
                                </li>
                                <li>
                                    Полный комплекс разделов необходимых для
                                    реализации объекта капитального строительства, реконструкции или ремонта
                                </li>
                            </ul>
                        </div>
                        <button id={'prevButton'}><img src={leftArrow} alt={'leftArrow'}/></button>
                        <button id={'nextButton'}><img src={rightArrow} alt={'rightArrow'}/></button>
                    </div>
                </div>

                <div className={styles['design__right-side']}>
                    <Swiper
                        spaceBetween={0}
                        slidesPerView={1}
                        navigation={{
                            prevEl: '#prevButton',
                            nextEl: '#nextButton',
                        }}
                        loop={true}
                        pagination
                    >
                        <SwiperSlide><img src={projectSliderImage} alt={'Slider 1'}/></SwiperSlide>
                        <SwiperSlide><img src={projectSliderImage2} alt={'Slider 2'}/></SwiperSlide>
                        <SwiperSlide><img src={projectSliderImage3} alt={'Slider 3'}/></SwiperSlide>

                    </Swiper>
                </div>
            </div>
        </div>
    )
}