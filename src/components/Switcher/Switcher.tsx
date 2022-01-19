import React, {useState} from 'react';
import s from "./Switcher.module.css"


type ButtonPropsType ={
    title:string
    turn:boolean
    changeStatusCallBack:()=>void  /*callBAck функцию типизируем в компоненте. ожидаем принять из пропсов*/
}

const Lamp = (props:ButtonPropsType) =>{
    return  <>
        {props.turn && <button className={s.Activate}>{props.title}</button>}
        {!props.turn && <button className={s.Inactive}>{props.title}</button>}
            </>
}
const ButtonOn =(props:ButtonPropsType)=>{
    return  <>
        {props.turn && <button className={s.Activate}>{props.title}</button>}
        {/*  Вешаем CallBack функцию на обработчик событи. приняли её через пропсы*/}
        {!props.turn && <button onClick={props.changeStatusCallBack} >{props.title}</button>}
    </>

}
const ButtonOff =(props:ButtonPropsType)=>{
    return  <>
        {props.turn && <button  className={s.Inactive}>{props.title}</button>}
        {/*  Вешаем CallBack функцию на обработчик событи. приняли её через пропсы*/}
        {!props.turn && <button  onClick={props.changeStatusCallBack}>{props.title}</button>}
    </>

}


const Switcher = () => {
    //state
    let defaultStatus = true;
    const [turned,setTurned] = useState<boolean>(defaultStatus);
    function changeStatus (st:boolean) { return !st }
    const changeStatusCallBack = ()=>{setTurned(changeStatus(turned))}
    //state

    return (
        <div>
            <ButtonOn
                title={"On"}
                turn={turned}
                changeStatusCallBack={changeStatusCallBack} /* Принимаем callBack функцию в Компоненту через пропсы*/
            />
            <ButtonOff
                title={"Off"}
                turn={!turned}
                changeStatusCallBack={changeStatusCallBack} /* Принимаем callBack функцию в Компоненту через пропсы*/
            />
            <span>   </span>
            <Lamp
                title={"I"}
                turn={turned}
                changeStatusCallBack={changeStatusCallBack}
            />
        </div>
    );
};

export default Switcher;