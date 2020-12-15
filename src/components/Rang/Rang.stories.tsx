import React, {useState} from "react";
import {Rang, RangValueType} from "./Rang";

export default {
    title: "Rang stories",
    components: Rang
}

export const EmptyRang = () =><Rang value={0} onClick={x=>x}/>;
export const Rang1 = () =><Rang value={1} onClick={x=>x}/>;
export const Rang2 = () =><Rang value={2} onClick={x=>x}/>;
export const Rang3 = () =><Rang value={3} onClick={x=>x}/>;
export const Rang4 = () =><Rang value={4} onClick={x=>x}/>;
export const Rang5 = () =><Rang value={5} onClick={x=>x}/>;


