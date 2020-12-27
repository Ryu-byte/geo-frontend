import React from "react";
import styles from "../css/Projects.module.css";
import {ProjectsContent} from "./ProjectsContent";
import "../css/ProjectsContent.css";



export class Projects extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            img: ["images/servicesEngineer.png", "images/servicesDesign.png", "images/servicesBuildControl.png" ],
            text: ['Наименование2', 'Строительство медицинских центров на базе быстровозводимых конструкций в г. Ростов-на-Дону', 'Заказчик', 'Заказчик ФГУП «ГВСУ по специальным объектам»', 'Срок реализации', 'Апрель 2020 - Июнь 2020']
        }
    }
    render() {
        return (
            <div className={styles.projects}>
                <div className={`container ${styles.projects__container}`}>
                    <h2 className={styles.projects__title}>
                        Выполненные проекты
                    </h2>
                    <ul className={styles.projects__filters}>
                        <li>
                            <input id="projects__design" type="radio" name="projects__filters" value="design" onChange={() => this.setState({
                                img: ["images/servicesDesign.png", "images/servicesEngineer.png", "images/servicesBuildControl.png" ],
                                text: ['Наименование1', 'Строительство медицинских центров на базе быстровозводимых конструкций в г. Ростов-на-Дону', 'Заказчик', 'Заказчик ФГУП «ГВСУ по специальным объектам»', 'Срок реализации', 'Апрель 2020 - Июнь 2020']
                            })}/>
                            <label htmlFor="projects__design">
                                <span>Проектирование</span>
                            </label>
                        </li>
                        <li>
                            <input id="projects__engineer" type="radio" name="projects__filters" value="engineer" onChange={() => this.setState({
                                img: ["images/servicesEngineer.png", "images/servicesDesign.png", "images/servicesBuildControl.png" ],
                                text: ['Наименование2', 'Строительство медицинских центров на базе быстровозводимых конструкций в г. Ростов-на-Дону', 'Заказчик', 'Заказчик ФГУП «ГВСУ по специальным объектам»', 'Срок реализации', 'Апрель 2020 - Июнь 2020']
                            })} defaultChecked={true}/>
                            <label htmlFor="projects__engineer">
                                <span>Инженерные изыскания</span>
                            </label>
                        </li>
                        <li>
                            <input id="projects__build-control" type="radio" name="projects__filters" value="build-control" onChange={() => this.setState({
                                img: ["images/servicesBuildControl.png", "images/servicesDesign.png", "images/servicesEngineer.png"],
                                text: ['Наименование3', 'Строительство медицинских центров на базе быстровозводимых конструкций в г. Ростов-на-Дону', 'Заказчик', 'Заказчик ФГУП «ГВСУ по специальным объектам»', 'Срок реализации', 'Апрель 2020 - Июнь 2020']
                            })} />
                            <label htmlFor="projects__build-control">
                                <span>Строительный контроль</span>
                            </label>
                        </li>
                    </ul>
                    <ProjectsContent img={this.state.img} text={this.state.text} switchModal={this.props.switchModal}/>
                </div>
            </div>
        )
    }
}