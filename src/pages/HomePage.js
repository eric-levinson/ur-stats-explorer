import logo from '../logo.svg';
import '../App.css';

import { MainNav } from '../common/components/nav/AppBar'
import { BreadcrumbComp } from '../common/components/nav/Breadcrumbs'

function HomePage() {
    const crumbs = [
        { name: 'Home', link: '/'},{ name: 'Home', link: '/'},{ name: 'Home', link: '/'}
        ]
    return (
        <div className="App">
            < MainNav page='Home'/>
            
            <div className="App-header">
            <BreadcrumbComp crumbs={crumbs} />
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
