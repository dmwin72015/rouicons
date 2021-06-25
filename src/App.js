import logo from './logo.svg';
import './App.css';
import LoginIcon from './components/At';
import { At, Github, New } from './components';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <span className="test">
                    <LoginIcon />
                    <Github />
                    <New />
                </span>
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
                    Learn React
                </a>
            </header>
        </div>
    );
}

export default App;
