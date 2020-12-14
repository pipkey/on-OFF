import React from "react";

export type RangValueType = 0 | 1 | 2 | 3 | 4 | 5;

type RangPropsType = {
    value: RangValueType
    onClick:(value:RangValueType)=>void
}

export function Rang(props: RangPropsType) {

    return (<div>
        <Star selected={props.value > 0} onClick={props.onClick} value={1}/>
        <Star selected={props.value > 1} onClick={props.onClick} value={2}/>
        <Star selected={props.value > 2} onClick={props.onClick} value={3}/>
        <Star selected={props.value > 3} onClick={props.onClick} value={4}/>
        <Star selected={props.value > 4} onClick={props.onClick} value={5}/>
    </div>)
}

type StarPropsType = {
    value: RangValueType
    selected: boolean
    onClick:(value:RangValueType)=>void
}

function Star(props: StarPropsType) {
    return <span onClick={()=>{props.onClick(props.value)}}>
        {props.selected ? <b>star </b> : "star "}
    </span>

}
