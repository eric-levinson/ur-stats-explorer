import logo from '../logo.svg';
import '../App.css';

import { MainNav } from '../common/components/nav/AppBar'

function HomePage() {
    
    return (
        <div className="App">
            < MainNav page='Home'/>
            <div className="App-header">
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
            </div>
        </div>
    );
}

export default HomePage;
