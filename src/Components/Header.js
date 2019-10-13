import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import CounterButton from './CounterButton';

class Header extends Component {
    // shouldComponentUpdate(nextProps, nextSate) {
    //     return false;
    // }

    render(){
        console.log('Header');
        return (
            <div style={styles.header}>
                <Link style={styles.link} to="/RobotList">Robots</Link>
                <Link style={styles.link} to="/About">About</Link>
                <h1 className='f2'>RoboFriends</h1>
                <CounterButton color={'red'} />
            </div>
        );
    }
}

const styles = {
    header: {
        textAlign: 'left',
        padding: '20px 100px',
        backgroundColor: '#222',
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 20,
        borderBottom: '2px solid #7f7fff'
    },
    link: {
        color: '#fff',
        textDecoration: 'none',
        marginRight: 20
    }
};

export default Header;