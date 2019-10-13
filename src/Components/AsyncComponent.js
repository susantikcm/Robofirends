import React, { Component } from 'react';

//higher order component, function that return a component
export default function asyncComponent(importComponent) {
    class AsyncComponent extends Component {
        constructor(props) {
            super(props);
            this.state = {
                component: null
            }
        }

        async componentDidMount() {
            const { default: component } /*or just component here*/ = await importComponent();
            this.setState({ component: component /*and add .default here*/ })
        }

        render() {
            const Component = this.state.component;
            return Component ? <Component {...this.props} /> : null;
        }
    }

    return AsyncComponent;
}