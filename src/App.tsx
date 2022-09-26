import Accordion from './Accordion';
import './App.css';
import Form from './Form';
import Table from './Table';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <h1>Accessibility Examples</h1>
            </header>
            <Accordion />
            <Form />
            <Table />
            <h2>Example of an accessible image:</h2>
            <img src="https://placedog.net/500" alt="It's a dog" />
        </div>
    );
}

export default App;
