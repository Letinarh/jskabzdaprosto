import React, {useState} from "react";

type starPropsType = {
    selected:boolean
}
function Star(props:starPropsType) {
    if (props.selected === true) {
        return <span><b>star </b></span>
    }else return (<span>star </span>)
}


type ratingPropsType ={
    value: number
}
export function Rating() {
    const [ratingValue,setRatingValue] = useState<number>(0)
    const ratingHi = ()=>{ setRatingValue(ratingValue + 1)}
    const ratingLow = ()=>{ setRatingValue(ratingValue - 1)}
    const buttonStyle ={
        width:"45px",
        height:"20px",
        border:"1px solid black",
        borderRadius:"10px"
    }

    return (
        < div>
            <Star selected={ratingValue > 0}/>
            <Star selected={ratingValue > 1}/>
            <Star selected={ratingValue > 2}/>
            <Star selected={ratingValue > 3}/>
            <Star selected={ratingValue > 4}/>
            <span> <button style={buttonStyle} onClick={ratingLow}>Down</button> </span>
            <span> <button style={buttonStyle} onClick={ratingHi}>Up</button> </span>
        </div>
    )}
