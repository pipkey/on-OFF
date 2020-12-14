import React, {useState} from "react";



type AccordionPropsType = {
    titleValue: string
    }

function UnControllAccardion(props: AccordionPropsType) {

    let  [collapsed, setCollapsed ]= useState( false);

    return(
        <div>
            <AccardionTitle title={props.titleValue} setCollapsed={()=>{setCollapsed(!collapsed)}}/>
            { !collapsed && <AccardionBody/> }
        </div>
    )
}

type AccardionTitleType ={
    title:string
    setCollapsed:()=>void
}

function AccardionTitle(props: AccardionTitleType) {
    return (
        <h3 onClick={props.setCollapsed}>--{props.title}--</h3>
    )
}

function AccardionBody() {

    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    )
}

export default UnControllAccardion;