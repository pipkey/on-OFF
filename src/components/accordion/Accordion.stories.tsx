import React, {useState} from "react";
import {Accardion} from "./Accordion";
import {action} from "@storybook/addon-actions";

export default {
    title: "Accordion stories",
    components: Accardion
}

const call = action("call ON or UN");

export const colapsed = () => <Accardion title={"Menu"} onClick={call} collapsed={true}/>;
export const UnColapsed = () => <Accardion title={"Menu"} onClick={call} collapsed={false}/>;

export const ChangeMode = () => {
    const [collaps, setCollaps] = useState<boolean>(false);
    return <Accardion title={"Menu"} collapsed={collaps} onClick={setCollaps}/>;
};


