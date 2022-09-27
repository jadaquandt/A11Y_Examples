import Accordion from './Accordion';
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
                <p>Code This, Not That!</p>
                <p>To use this website fully, we recommend using a screenreader like <a href="https://www.nvaccess.org/download/">NVDA</a></p>
            </header>
            <Accordion title={title} content={content} />
            <Accordion title={title} content={content} />
            <Form />
            <Table />
            <h2>Example of an accessible image:</h2>
            <img src="https://placedog.net/500" alt="It's a dog" />
        </div>
    );
}

export default App;
