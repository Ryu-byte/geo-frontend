import React, { useState } from 'react';
import {Header} from './components/Header';
import {Design} from './components/Design';
import {Services} from "./components/Services";
import {Projects} from "./components/Projects";
import {Modal} from "./components/Modal";
import {Recommendation} from "./components/Recommendation";
import {Footer} from "./components/Footer";



function App() {
    const [modalActive, setModalActive] = useState(false);
    return (
        <div>
            <Header/>
            <Design/>
            <Services switchModal={setModalActive} />
            <Projects switchModal={setModalActive} />
            <Recommendation />
            <Footer />
            <Modal active={modalActive} setActive={setModalActive} />
        </div>
)
}

export default App;
