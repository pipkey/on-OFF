import React from "react";


type PropsType = {
    on: boolean;
    onChange: (on: boolean) => void
}

function OnOff(props: PropsType) {


    //STYLES
    const onStyle = {
        width: "30px",
        height: "20px",
        borderRadius: "5px",
        border: "1px solid black",
        display: "inline-block",
        paddingLeft: "7px",
        backgroundColor: props.on ? "#2DFF18" : "white"
    };
    const offStyle = {
        width: "30px",
        height: "20px",
        borderRadius: "5px",
        border: "1px solid black",
        display: "inline-block",
        marginLeft: "3px",
        paddingLeft: "7px",
        backgroundColor: props.on ? "white" : "#F55153"
    };
    const indicatorStyle = {
        width: "10px",
        height: "10px",
        borderRadius: "5px",
        border: "1px solid black",
        display: "inline-block",
        marginLeft: "5px",
        backgroundColor: props.on ? "#2DFF18" : "#F55153"
    };

    //СОДЕРЖИИМОЕ ONOFF
    return (
        <div>

            <button style={onStyle} onClick={() => {
                props.onChange(true)
            }}> on
            </button>
            <button style={offStyle} onClick={() => {
                props.onChange(false)
            }}> off
            </button>
            <div style={indicatorStyle}></div>

        </div>
    )
}


export default OnOff;




