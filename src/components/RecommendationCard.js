import React from "react";
import '../css/RecommendationCard.css';
import pdfIcon from '../images/PDFicon.svg';

export const RecommendationCard = (props) => {
    return (
        <div className={"recommendation__card_content"}>
            <img src={pdfIcon}/>
            <div className={"recommendation__card_title"}>
                {props.title}
            </div>
            <div className={"recommendation__card_text"}>
                {props.text}
            </div>
            <a href={'#'}>
                <button className={"recommendation__card_button"}>
                    Открыть для просмотра
                </button>
            </a>
        </div>
    )
}