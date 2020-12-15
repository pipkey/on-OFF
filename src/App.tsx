import React, {useState} from "react";
import "./App.css";
import {Rang, RangValueType} from "./components/Rang/Rang";
import {UncontrollRang} from "./components/Rang/UncontrollRang";
import Accardion from "./components/accordion/Accordion";
import {OnOff} from "./OnOff/OnOff";


function App() {

    let [rateValue, setRateValue] = useState<RangValueType>(0);
    let [switchOn, setSwitchOn] = useState<boolean>(false);
    let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false);


    return (
        <div className="App">
            <OnOff
                on={switchOn}
                onChange={setSwitchOn}
            />

            {/*<UnControllAccardion titleValue={"Menu"} />*/}
            <UncontrollRang/>

            <Rang
                value={rateValue}
                onClick={setRateValue}
            />

            <Accardion
                title={"Menu"}
                collapsed={accordionCollapsed}
                onClick={setAccordionCollapsed}
            />


            {/* <AppTitle title={"This is APP component"}/>
            <AppTitle title={"My friends"}/>
            <Accardion title={"Menu"} collapsed={false}/>
            <Accardion title={"Txt"} collapsed={true}/>

            <Rang value={2}/>
            <Rang value={3}/>
            <Rang value={4}/>
            <Rang value={5}/>*/}
        </div>
    )
}

type AppTitlePropsType = {
    title: string
}

function AppTitle(props: AppTitlePropsType) {
    return <h1>{props.title}</h1>
}


export default App;
