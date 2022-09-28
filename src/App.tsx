import Accordion from './Accordion';
import AccordionBad from './AccordionBad';
import './App.css';
import Form from './Form';
import Table from './Table';

function App() {
    const { title, content } = {
        title: "Title One",
        content: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis sapiente
          laborum cupiditate possimus labore, hic temporibus velit dicta earum
          suscipit commodi eum enim atque at? Et perspiciatis dolore iure
          voluptatem.`
      };

    return (
        <div className="App">
            <header className="App-header">
                <h1>Accessibility Examples</h1>
                <p>To use this website fully, we recommend using a screenreader like <a href="https://www.nvaccess.org/download/">NVDA for Windows</a> or VoiceOver Utility for Mac</p>
            </header>
            <div className='thisorthat'>
                <p className='codethis'>Code This</p>
                <p className='codethis'>Not That</p>
            </div>
            <div className='thisorthat'>
                <div className='good-accordion'>
                    <p>Accessible Accordion</p>
                    <Accordion title={title} content={content} />
                    <Accordion title={title} content={content} />
                </div>
                <div className='bad-accordion'>
                    <p>Not Accessible Accordion</p>
                    <AccordionBad title={title} content={content} />
                    <AccordionBad title={title} content={content} />
                </div>
            </div>
            <div className='thisorthat'>
                <div className='good-form'>
                    <Form />
                </div>
                <div className='bad-form'>
                    <Form />
                </div>
            </div>
            <Table />
            <p>Example of an accessible image:</p>
            <img src="https://placedog.net/500" alt="It's a dog" />
        </div>
    );
}

export default App;
