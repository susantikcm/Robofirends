import React, { Component } from 'react';
import { connect } from 'react-redux';
import './RobotList.css';

import CardList from '../Components/CardList';
import SearchBox from '../Components/SearchBox';
import Scroll from '../Components/Scroll';
import ErrorBoundary from '../Components/ErrorBoundary';

import { setSearchField, requestRobots } from '../Actions/actions';

//mapping the states from reducers
const mapStateToProps = state => {
    return  {
        searchField: state.searchRobots.searchField,
        isLoading: state.requestRobots.isLoading,
        robots: state.requestRobots.robots,
        error: state.requestRobots.error
    }
}

//mapping the functions from actions
const mapDispatchToProps = (dispatch) =>  {
    return {
        onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
        //the dispatch need the requestRobots to return a function 
        onRequestRobots: () => dispatch(requestRobots())
    }
}

class RobotList extends Component {
    //remove after create state with redux
    // constructor() {
    //     super();
    //     this.state = {
    //         robots: []
    //         //searchField: ''
    //     }
    // }
 
    componentDidMount() {
        this.props.onRequestRobots();
        //remove after declare the request robot with redux
        // fetch('https://jsonplaceholder.typicode.com/users')
        //     .then(response => response.json())
        //     .then(users => this.setState({ robots: users }));
    }

    //remove this method after declaring it as props from redux
    // onSearchChange = (event) => {
    //     this.setState({ searchField: event.target.value });
    // }

    render() {
        const { searchField, onSearchChange, robots, isLoading } =  this.props;
        const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchField.toLowerCase());
        })
 
        return isLoading ?
            <h1>Loading...</h1> :
            (
                <div className='tc'>
                    <SearchBox searchChange={onSearchChange} />
                    <Scroll>
                        <ErrorBoundary>
                            <CardList robots={filteredRobots} />
                        </ErrorBoundary>
                    </Scroll>
                </div>
            );
    }
}

//The connect component from react-redux package
//it is a 'higher order function', means a function that return function
export default connect(mapStateToProps, mapDispatchToProps)(RobotList); 
//mapDispatchToProps = mapActionToProps