import React, {useState} from "react";
export type ratingValueType = 0| 1 | 2 | 3 | 4 | 5


type starPropsType = {
    selected:boolean
    onClick:()=>void
}

function Star(props:starPropsType) {
return <span onClick={()=>props.onClick}> {props.selected ? <b>star </b> : "star "}</span>
}


export function UncontrolledRating() {
    const [value1,setValue1] = useState<ratingValueType>(0)

    return (
        < div>
            <Star  onClick={()=>{setValue1(1)}} selected={value1 > 0}/>
            <Star  onClick={()=>{setValue1(2)}} selected={value1 > 1}/>
            <Star  onClick={()=>{setValue1(3)}} selected={value1 > 2}/>
            <Star  onClick={()=>{setValue1(4)}} selected={value1 > 3}/>
            <Star  onClick={()=>{setValue1(5)}} selected={value1 > 4}/>


        </div>
    )}
