import logo from '../logo.svg';
import '../App.css';

import { DrawerNav } from '../common/components/nav/Drawer'

function HomePage() {
    const crumbs = [{ name: 'Home', link: '/'},{ name: 'Home', link: '/'},{ name: 'Home', link: '/'}]
    const mainNav = [{name: 'Ramen', link: '/ramen', icon: 'test-icon'},
                    {name: 'Noodle Cup Series', link: '/ncs', icon: 'test-icon'},
                    {name: 'Macaroni', link: '/macaroni', icon: 'test-icon'},
                    {name: 'Fettuccine', link: '/fettuccine', icon: 'test-icon'},
                    {name: 'Linguine', link: '/linguine', icon: 'test-icon'}]
    const subNav = [{name: 'Core', link: '/ramen/core', icon: 'test-icon'},
                    {name: 'Boost', link: '/ramen/boost', icon: 'test-icon'},
                    {name: 'Positioning', link: '/ramen/positioning', icon: 'test-icon'},
                    {name: 'Movement', link: '/ramen/movement', icon: 'test-icon'}]
    return (
        <div className="App">
            < DrawerNav page='Home' crumbs={crumbs} mainnav={mainNav} subnav={subNav}/>
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
