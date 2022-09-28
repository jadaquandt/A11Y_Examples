import './App.css';
import './Accordion.css';
import { useState } from 'react';

const AccordionBad = ({ title, content }: { title: string; content: string }) => {
    
    const [expand, setExpand] = useState(false);

    return (
        <div className="Accordion-Component">
            <div className="accordion-container">
                <div className="accordion-title" onClick={() => setExpand(!expand)}>
                    <span>{title}</span>
                    {expand ? <span>-</span> : <span>+</span>}
                </div>
                <div className={expand ? `accordion-content show` : `accordion-content`}>
                    {content}
                </div>
            </div>
        </div>
    );
};

export default AccordionBad;
