import React, {useState} from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
import {Rating, ratingValueType} from "./components/Rating/Rating";
import Switcher from "./components/Switcher/Switcher";
import {UncontrolledRating} from "./components/UncontrolledRating/UncontrolledRating";


function App() {
const [ratingValue,setRatingValue] = useState<ratingValueType>(0)

    return (
        <div>
            <PageTitle title={"Hello"}/>
            <Accordion mainTitle={"Menu"} />
            <Rating onClick={setRatingValue} value={ratingValue}/>
            <Accordion mainTitle={"Users"} />
            <Rating onClick={setRatingValue} value={ratingValue}/>
            <div>Uncontrolled Rating</div>
            <UncontrolledRating/>
            <div>some text</div>
            <UncontrolledRating/>
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
