import React, {useState} from 'react';

type accordionPropsType = {
    mainTitle: string
}
type accordionTitlePropsType = {
    title: string
    collpsedChanger:()=>void
}

function AccordionTitle(props: accordionTitlePropsType) {

    return <>
        <h3>{props.title}</h3>
        <button onClick={props.collpsedChanger}>Toggle</button>
    </>
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
function Accordion(props: accordionPropsType) {

    const [collapsed, setCollapsed] = useState(false)
    const collpsedChanger = () => {setCollapsed(!collapsed)}

    return <div>
        <AccordionTitle title={props.mainTitle} collpsedChanger={collpsedChanger}/>
        {!collapsed && < AccordionBody/>}
    </div>
}




export default Accordion