import React,{useState} from 'react';
import turned from "../../App"
import s from "./Switcher.module.css"






type ButtonPropsType ={
    title:string
    turn:boolean
    /*setTurned:(i:boolean)=>void*/
}

const Lamp = (props:ButtonPropsType) =>{
    return  <>
        {props.turn && <button className={s.Activate}>{props.title}</button>}
        {!props.turn && <button className={s.Unactive}>{props.title}</button>}
            </>
}
const ButtonOn =(props:ButtonPropsType)=>{
    return  <>
        {props.turn && <button className={s.Activate}>{props.title}</button>}
        {!props.turn && <button>{props.title}</button>}
    </>

}
const ButtonOff =(props:ButtonPropsType)=>{
    return  <>
        {props.turn && <button className={s.Unactive}>{props.title}</button>}
        {!props.turn && <button>{props.title}</button>}
    </>

}

type SwitcherPropsType={
    status: boolean
}
const Switcher = (props:SwitcherPropsType) => {

    return (
        <div>
            <ButtonOn title={"On"} turn={props.status} />
            <ButtonOff title={"Off"} turn={!props.status}/>
            <span>   </span>
            <Lamp title={"I"} turn={props.status}/>
        </div>
    );
};

export default Switcher;