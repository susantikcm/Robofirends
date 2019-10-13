import React from 'react';

const About = (props) => {
    return (
        <div style={styles.about}>
            About Page
            <button
                onClick={() => props.history.goBack()}
            >
                Back
            </button>
            <button
                onClick={() => props.history.push('/contact')}
            >
                Contact
            </button>
        </div>
    );
}

const styles = {
    about: {
        fontSize: 20,
        fontWeight: 'bold'
    }
};

export default About;
