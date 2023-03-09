import './App.css';
import HelloWorld from "./components/HelloWorld";
import Phrase from "./components/Phrase";
function App() {
    return (
        <div className="App">
            <h1> Hello World!</h1>
            <p> My first react project</p>
            <HelloWorld/>
            <Phrase/>
        </div>
    );
}

export default App;
