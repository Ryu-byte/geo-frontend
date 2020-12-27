import React from "react";

export const ServicesContent = (props) => {
    const listItems = props.text.map((item, index) => <li key={index}>{item}</li>)
    return (
        <div className={'service__content'}>
            <div className={'service__content_left-side'}>
                <img src={props.img}/>
            </div>
            <div className={'service__content_right-side'}>
                <ul className={'service__content_right-side_list'}>
                    {listItems}
                </ul>
                <button className={'service__content_right-side_list_button'} onClick={() => props.switchModal(true)}>
                    Узнать подробнее
                </button>
            </div>
        </div>
    )
}