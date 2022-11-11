import React, { useState, useEffect } from "react";
import Scroll from "../components/Scroll.js";
import CardList from '../components/Cardlist.js';
import SearchBox from "../components/SearchBox.js";
import './App.css';
import ErrorBoundry from '../components/ErrorBoundry.js';


function App() {

    const [robots, setRobots] = useState([]);
    const [searchfield, setSearchfield] = useState('');
    const [count, setCount] = useState(0);

    useEffect(() => {
        fetch('https://jsonplaceholder.cypress.io/users').then(response => {
            return response.json();
        }).then(users => setRobots(users));
        console.log(count);
    }, [count])



    const onSearchChange = (event) => {
        setSearchfield(event.target.value);

    }

    const filteredRobots = robots.filter(robot => {
        return setRobots.name.toLowerCase().includes(searchfield.toLowerCase())
    })
    return !setRobots.length ? <h1>Loading</h1> :
        <div className="tc">
            <h1 className="f1">Monsterfriends</h1>
            <button onClick={() => setCount(count + 1)}>ClickMe!!</button>
            <SearchBox searchChange={onSearchChange} />
            <Scroll>
                <ErrorBoundry>
                    <CardList robots={filteredRobots} />
                </ErrorBoundry>

            </Scroll>
        </div>
}
export default App;