import React, {useState} from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
import {Rating} from "./components/Rating/Rating";
import Switcher from "./components/Switcher/Switcher";
/*
const [turned,setTurned] = useState<boolean>(true);*/

function App() {

    return (
        <div>
            <PageTitle title={"Hello"}/>
            <Accordion mainTitle={"Menu"} collapsed={true}/>
            <Rating value={1} />
            <Accordion mainTitle={"Users"} collapsed={false}/>
            <Rating value = {3} />
            <hr/>
            <Switcher status={true}/>
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
