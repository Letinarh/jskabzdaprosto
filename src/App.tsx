import React, {useState} from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
import {Rating} from "./components/Rating/Rating";
import Switcher from "./components/Switcher/Switcher";


function App() {


    return (
        <div>
            <PageTitle title={"Hello"}/>
            <Accordion mainTitle={"Menu"} />
            <Rating />
            <Accordion mainTitle={"Users"} />
            <Rating />
           <hr/>
            <Switcher/>
            <Switcher/>
            <Switcher/>
           <hr/>
        </div>
    );
}

type pageTitlePropsType = {
    title: string
}

function PageTitle(props: pageTitlePropsType) {

    return <>{props.title}</>
}


export default App
