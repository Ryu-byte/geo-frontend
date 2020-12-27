import React from "react";
import styles from "../css/Recommendation.module.css";
import {RecommendationCard} from "./RecommendationCard";
import "../css/RecommendationCard.css";

export class Recommendation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cardList: [
                {
                    title: 'Рекомендательное письмо',
                    text: 'ОАО “ФГУП «ГВСУ по специальным объектам»”'
                },
                {
                    title: 'Рекомендательное письмо2',
                    text: 'ОАО “ФГУП «ГВСУ по специальным объектам»”2'
                },
                {
                    title: 'Рекомендательное письмо3',
                    text: 'ОАО “ФГУП «ГВСУ по специальным объектам»”3'
                },
                {
                    title: 'Рекомендательное письмо4',
                    text: 'ОАО “ФГУП «ГВСУ по специальным объектам»”4'
                },
                {
                    title: 'Рекомендательное письмо5',
                    text: 'ОАО “ФГУП «ГВСУ по специальным объектам»”5'
                },
                {
                    title: 'Рекомендательное письмо6',
                    text: 'ОАО “ФГУП «ГВСУ по специальным объектам»”6'
                }
            ]
        }
    }
    showMoreButton() {
        this.setState(prevState => ({
            cardList: [...prevState.cardList, ...[
                {
                    title: 'Рекомендательное письмо7',
                    text: 'ОАО “ФГУП «ГВСУ по специальным объектам»”7'
                },
                {
                    title: 'Рекомендательное письмо8',
                    text: 'ОАО “ФГУП «ГВСУ по специальным объектам»”8'
                },
                {
                    title: 'Рекомендательное письмо9',
                    text: 'ОАО “ФГУП «ГВСУ по специальным объектам»”9'
                }
            ]]
        }))
        // eslint-disable-next-line no-unused-expressions
        document.querySelector("#showmore").style.display = "none"
    }

    render() {
        const ListCards = this.state.cardList.map((card, index) => <RecommendationCard key={index} title={card.title} text={card.text} />)
        return (
            <div className={styles.recommendation}>
                <div className={`container ${styles.recommendation__container}`}>
                    <h2 className={styles.recommendation__title}>
                        нас рекомендуют
                    </h2>
                    <div className={styles.recommendation__content}>
                        {ListCards}
                    </div>
                    <div className={styles.recommendation__showmore}>
                        <button className={styles.recommendation__showmore_button} id={"showmore"} onClick={() => this.showMoreButton()}>
                            Показать еще
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}