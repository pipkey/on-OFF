import React, {useState} from "react";
import {OnOff} from "./OnOff";
import {Rang, RangValueType} from "../components/Rang/Rang";
import {action} from "@storybook/addon-actions";

export default {
    title: "OnOff stories",
    components: OnOff
}

const call= action("call ON or OFF");

export const OnMode = () => <OnOff on={true} onChange={call}/>;
export const OffMode = () => <OnOff on={false} onChange={call}/>;

export const ChangeMode = () =>{
    const [on, setOn]=useState<boolean>(false);
    return <OnOff on={on} onChange={setOn}/>;
};


