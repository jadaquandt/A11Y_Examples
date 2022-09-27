import './App.css';
import './Accordion.css';
import { useState } from 'react';

const Accordion = ({ title, content }: { title: string; content: string }) => {
    
    const [expand, setExpand] = useState(false);

    return (
        <div className="Accordion-Component">
            <div className="accordion-container">
                <div className="accordion-title" onClick={() => setExpand(!expand)}>
                    <span>{title}</span>
                    {expand ? <span aria-label='Close'>-</span> : <span aria-label='Open'>+</span>}
                </div>
                <div className={expand ? `accordion-content show` : `accordion-content`}>
                    {content}
                </div>
            </div>
        </div>
    );
};

export default Accordion;
