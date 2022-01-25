import React, {useState} from "react";
export type ratingValueType = 0| 1 | 2 | 3 | 4 | 5


type starPropsType = {
    selected:boolean
    onClick:()=>void
}

function Star(props:starPropsType) {
return <span onClick={props.onClick}> {props.selected ? <b>star </b> : "star "}</span>
}


export function UncontrolledRating() {
    const [value,setValue] = useState<ratingValueType>(0)

    return (
        < div>
            <Star  onClick={()=>{setValue(1)}} selected={value > 0}/>
            <Star  onClick={()=>{setValue(2)}} selected={value > 1}/>
            <Star  onClick={()=>{setValue(3)}} selected={value > 2}/>
            <Star  onClick={()=>{setValue(4)}} selected={value > 3}/>
            <Star  onClick={()=>{setValue(5)}} selected={value > 4}/>
        </div>
    )}