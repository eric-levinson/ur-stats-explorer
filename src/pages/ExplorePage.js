import logo from '../logo.svg';
import '../App.css';
import { useParams, useRouteMatch } from "react-router-dom";
import { ClippedDrawer } from '../common/components/nav/ClippedDrawer'
import  BallchaseRequest  from '../utils/BallchaseRequest.js'

function ExplorePage(e) {

    const { season, league, week, match } = useParams()
    let { path, url } = useRouteMatch();
    BallchaseRequest('united-rogue-d1hs10f4dh', 'group-list')
    console.log(e)
    return (
        <div className="App">
            < ClippedDrawer />
            <div className="App-header">
            
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <p>{season} {league} {week} {match}</p>
                <p>{path} {url} </p>
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

export default ExplorePage;
