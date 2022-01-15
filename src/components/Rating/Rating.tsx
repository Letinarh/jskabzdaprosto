import React from "react";

type starPropsType = {
    selected:boolean
}
function Star(props:starPropsType) {
    if (props.selected === true) {
        return <span><b>star </b></span>
    }else return (<span>star </span>)
}


type ratingPropsType ={
    value: 0 | 1 | 2 | 3 | 4 | 5
}
export function Rating(props:ratingPropsType) {
    return (
        < div>
            <Star selected={props.value > 0}/>
            <Star selected={props.value > 1}/>
            <Star selected={props.value > 2}/>
            <Star selected={props.value > 3}/>
            <Star selected={props.value > 4}/>
        </div>
    )}
