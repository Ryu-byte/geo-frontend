import React from "react";
import styles from "../css/Services.module.css";
import {ServicesContent} from "./ServicesContent";
import "../css/ServicesContent.css";

export class Services extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            img: "images/servicesEngineer.png",
            text: ['Здания и сооружения', 'Объекты промышленного назначения', 'Объекты гражданского строительства', 'Полный комплекс разделов необходимых для\n' +
            'реализации объекта капитального строительства, реконструкции или ремонта']
        }
    }
    render() {
        return (
            <div className={styles.services}>
                <div className={`container ${styles.services__container}`}>
                    <h2 className={styles.services__title}>
                        Наши услуги
                    </h2>
                    <ul className={styles.services__filters}>
                        <li>
                            <input id="services__design" type="radio" name="services__filters" value="design" onChange={() => this.setState({
                                img: "images/servicesDesign.png",
                                text: ['Здания и сооружения1', 'Объекты промышленного назначения', 'Объекты гражданского строительства', 'Полный комплекс разделов необходимых для\n' +
                                'реализации объекта капитального строительства, реконструкции или ремонта']
                            })}/>
                            <label htmlFor="services__design">
                                <span>Проектирование</span>
                            </label>
                        </li>
                        <li>
                            <input id="services__engineer" type="radio" name="services__filters" value="engineer" onChange={() => this.setState({
                                img: "images/servicesEngineer.png",
                                text: ['Здания и сооружения', 'Объекты промышленного назначения', 'Объекты гражданского строительства', 'Полный комплекс разделов необходимых для\n' +
                                'реализации объекта капитального строительства, реконструкции или ремонта']
                            })} defaultChecked={true}/>
                            <label htmlFor="services__engineer">
                                <span>Инженерные изыскания</span>
                            </label>
                        </li>
                        <li>
                            <input id="services__build-control" type="radio" name="services__filters" value="build-control" onChange={() => this.setState({
                                img: "images/servicesBuildControl.png",
                                text: ['Здания и сооружения2', 'Объекты промышленного назначения', 'Объекты гражданского строительства', 'Полный комплекс разделов необходимых для\n' +
                                'реализации объекта капитального строительства, реконструкции или ремонта']
                            })}/>
                            <label htmlFor="services__build-control">
                                <span>Строительный контроль</span>
                            </label>
                        </li>
                    </ul>
                    <ServicesContent img={this.state.img} text={this.state.text} switchModal={this.props.switchModal}/>
                </div>
            </div>
        )
    }
}