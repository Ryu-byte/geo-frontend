import React from "react";
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';
import 'swiper/swiper.scss';
import "../css/Swiper.css";
import SwiperCore, {Navigation, Pagination} from 'swiper';
import {Swiper, SwiperSlide} from 'swiper/react';
import leftArrow from '../images/leftArrow.svg';
import rightArrow from '../images/rightArrow.svg';

SwiperCore.use([Navigation, Pagination]);

export const ProjectsContent = (props) => {
    const listItems = props.text.map((item, index) => <li key={index}>{item}</li>)
    const imgList = props.img.map((item, index) => <SwiperSlide key={index}><img src={item}/></SwiperSlide> )
    console.log(listItems)
    return (
        <div className={'project__content'}>
            <div className={'project__content_left-side'}>
                <ul className={'project__content_left-side_list'}>
                    {listItems}
                </ul>
                <button className={'project__content_left-side_list_button'} onClick={() => props.switchModal(true)}>
                    Узнать подробнее
                </button>
            </div>
            <div className={'project__content_right-side'}>
                <Swiper
                    spaceBetween={50}
                    slidesPerView={1}
                    navigation={{
                        prevEl: '#project__prevButton',
                        nextEl: '#project__nextButton',
                    }}
                    loop={true}
                >
                    {imgList}
                    <button id={'project__prevButton'}><img src={leftArrow} alt={'leftArrow'}/></button>
                    <button id={'project__nextButton'}><img src={rightArrow} alt={'rightArrow'}/></button>
                </Swiper>
            </div>
        </div>
    )
}