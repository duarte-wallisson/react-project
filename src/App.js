import './App.css';
import HelloWorld from "./components/HelloWorld";
import Phrase from "./components/Phrase";
import SayMyName from "./components/SayMyName";
import Person from "./components/Person";

function App() {

    const name = "Wallisson"
    return (
        <div className="App">
            <p> My first react project</p>
            <HelloWorld/>
            <Phrase/>
            <SayMyName name={name}/>
            <Person
                name={name}
                age="22"
                job="Estudante"
                photo="https://via.placeholder.com/150"
            />
        </div>
    );
}

export default App;
