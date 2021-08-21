import logo from '../logo.svg';
import '../App.css';

import { MainNav } from '../common/components/AppBar'

function HomePage() {
    
    return (
        <div className="App">
            < MainNav />
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header>
        </div>
    );
}

export default HomePage;
