import React, { Component } from 'react';
import './App.css';

import Header from '../Components/Header';
import Routes from '../Components/Routes';

//import Page1 from '../Components/page1';
// import Page2 from '../Components/page2';
// import Page3 from '../Components/page3';
//import AsyncComponent from '../Components/AsyncComponent';

class App extends Component {
    constructor() {
        super();
        this.state = {
            route: 'page1',
            component: null
        }
    }

    onRouteChange = (route) => {
        //no code splitting
        this.setState({ route: route });

        //with code splitting
        // if(route === 'page1') {
        //     this.setState({ route: route });
        // }
        // else if (route === 'page2') {
        //     import('../Components/page2')
        //     .then((Page2) => {
        //         this.setState({ route: route, component: Page2.default })
        //     });
        // }
        // else if (route === 'page3') {
        //     import('../Components/page3')
        //     .then((Page3) => {
        //         this.setState({ route: route, component: Page3.default })
        //     });
        // }
    }

    render() {
        return (
            <div className="App">
                <Header />
                <Routes />
           </div>
        );

        // if(this.state.route === 'page1') {
        //     return <Page1 onRouteChange={this.onRouteChange} />
        // }
        // else if(this.state.route === 'page2') {
        //     const AsyncPage2 = AsyncComponent(() => import('../Components/page2'))
        //     return <AsyncPage2 onRouteChange={this.onRouteChange} />
        // }
        // else if(this.state.route === 'page3') {
        //     const AsyncPage3 = AsyncComponent(() => import('../Components/page3'))
        //     return <AsyncPage3 onRouteChange={this.onRouteChange} />
        // }
        
        // if(this.state.route === 'page1') {
        //     return <Page1 onRouteChange={this.onRouteChange} />
        // }
        // else {
        //     return <this.state.component onRouteChange={this.onRouteChange} />
        // }
    }
}

export default App; 