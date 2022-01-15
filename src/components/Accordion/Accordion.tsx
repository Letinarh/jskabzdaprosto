import React from 'react';

type accordionPropsType = {
    mainTitle:string
    collapsed:boolean
}
function Accordion(props:accordionPropsType) {
    return <div>
        <AccordionTitle title={props.mainTitle}/>
        {!props.collapsed && < AccordionBody/>}
    </div>
}


type accordionTitlePropsType = {
    title:string
}
function AccordionTitle(props:accordionTitlePropsType) {

    return <h3>{props.title}</h3>
}

function AccordionBody() {
    return (
        <ul>
            <li>1Menu</li>
            <li>2Menu</li>
            <li>3Menu</li>
            <li>4Menu</li>
            <li>5Menu</li>
        </ul>
    )
}
export default Accordion