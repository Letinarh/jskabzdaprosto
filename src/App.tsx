import React, {useState} from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
import {Rating} from "./components/Rating/Rating";
import Switcher from "./components/Switcher/Switcher";




function App() {
    //state
    let defaultStatus = true;
    const [turned,setTurned] = useState<boolean>(defaultStatus);
    function changeStatus (st:boolean) { return !st }
    const changeStatusCallBack = ()=>{setTurned(changeStatus(turned))}
    //state

    return (
        <div>
            <PageTitle title={"Hello"}/>
            <Accordion mainTitle={"Menu"} collapsed={true}/>
            <Rating value={1} />
            <Accordion mainTitle={"Users"} collapsed={false}/>
            <Rating value = {3} />
            <hr/>
            <Switcher status={turned} changeStatusCallBack={changeStatusCallBack}/> {/*callBAck функцию пробрасываем в компоненту*/}
            <hr/>
        </div>
    );
}

type pageTitlePropsType ={
    title:string
}
function PageTitle(props:pageTitlePropsType) {

    return <>{props.title}</>
}



export default App
