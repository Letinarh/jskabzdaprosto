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

    return (
        < div>
            <Star selected={ratingValue > 0}/>
            <Star selected={ratingValue > 1}/>
            <Star selected={ratingValue > 2}/>
            <Star selected={ratingValue > 3}/>
            <Star selected={ratingValue > 4}/>
            <span onClick={ratingLow}>Decrase </span>
            <span onClick={ratingHi}> Incrase</span>
        </div>
    )}
