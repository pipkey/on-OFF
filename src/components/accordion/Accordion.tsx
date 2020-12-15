import React from "react";


type AccordionPropsType = {
    title: string
    collapsed: boolean
    onClick: (collaps: boolean) => void
}

export function Accardion(props: AccordionPropsType) {
    return (
        <div>

            <Menu
                titleValue={props.title}
                onClick={props.onClick}
                collapsed={props.collapsed}
            />

            {!props.collapsed && <Txt/>}

        </div>
    )
}


type MenuPropsType = {
    titleValue: string
    onClick: (collaps: boolean) => void
    collapsed: boolean
}

function Menu(props: MenuPropsType) {
    return (

        <h3 onClick={()=>{ props.onClick(!props.collapsed) }}>
           -- {props.titleValue} --
        </h3>
    )
}

function Txt(props: any) {

    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    )
}

