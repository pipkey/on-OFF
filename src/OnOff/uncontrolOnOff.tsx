import React, {useState} from "react";


type PropsType = {
    // on: boolean;
}

function UncontrollOnOff(props: PropsType) {

    let [on, setOn] = useState(false);
    //STYLES
    const onStyle = {
        width: "30px",
        height: "20px",
        borderRadius: "5px",
        border: "1px solid black",
        display: "inline-block",
        paddingLeft: "7px",
        backgroundColor: on ? "#2DFF18" : "white"
    };
    const offStyle = {
        width: "30px",
        height: "20px",
        borderRadius: "5px",
        border: "1px solid black",
        display: "inline-block",
        marginLeft: "3px",
        paddingLeft: "7px",
        backgroundColor: on ? "white" : "#F55153"
    };
    const indicatorStyle = {
        width: "10px",
        height: "10px",
        borderRadius: "5px",
        border: "1px solid black",
        display: "inline-block",
        marginLeft: "5px",
        backgroundColor: on ? "#2DFF18" : "#F55153"
    };

    //СОДЕРЖИИМОЕ ONOFF
    return (
        <div>

            <button style={onStyle} onClick={() => {
                setOn(true)
            }}> on
            </button>
            <button style={offStyle} onClick={() => {
                setOn(false)
            }}> off
            </button>
            <div style={indicatorStyle}> </div>

        </div>
    )
}


export default UncontrollOnOff;




