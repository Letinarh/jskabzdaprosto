import React, {useState} from "react";
export type ratingValueType = 0| 1 | 2 | 3 | 4 | 5
type starPropsType = {
    selected:boolean
    value: ratingValueType
    onClick:(r:ratingValueType)=>void
}
function Star(props:starPropsType) {
return <span onClick={()=>props.onClick(props.value)}> {props.selected ? <b>star </b> : "star "}</span>
}


type ratingPropsType ={
    value:ratingValueType
    onClick:(value:ratingValueType)=>void
}
export function Rating(props:ratingPropsType) {

    return (
        < div>
            <Star  onClick={props.onClick} value={1} selected={props.value > 0}/>
            <Star  onClick={props.onClick} value={2} selected={props.value > 1}/>
            <Star  onClick={props.onClick} value={3} selected={props.value > 2}/>
            <Star  onClick={props.onClick} value={4} selected={props.value > 3}/>
            <Star  onClick={props.onClick} value={5} selected={props.value > 4}/>


        </div>
    )}
