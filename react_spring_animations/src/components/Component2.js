import React, { Component } from 'react';
import { Spring } from 'react-spring/renderprops';

export class Component2 extends Component {
    render() {
        return (
            <Spring 
            from={{ opacity: 0}}
            to={{ opacity: 1}}
            config={{ delay: 1000, duration: 1000 }}
        >
            {props => (
                <div style={props}>
                    <div style={c2Style}>
                        <h1>Component 2</h1>
                        <p>Pariatur nisi quis aliquip voluptate et. Commodo dolore minim ea nulla sit cupidatat laborum consequat ipsum exercitation sunt. Velit laborum cupidatat occaecat commodo officia dolor dolor ipsum veniam culpa ad. Laboris Lorem veniam laboris eu sunt cillum. Esse magna id duis laborum officia nostrud eu commodo tempor sit occaecat.</p>
                    <button style={btn} onClick={this.props.toggle}> Toggle Component 3 </button>
                    </div>
                </div>
            )}
        </Spring>
        )
    }
}

const c2Style = {
    background: 'slateblue',
    color: 'white',
    padding: '1.5rem'
};

const btn = {
    background: '#333333',
    color: '#ffffff',
    padding: '1rem 2rem',
    border: 'none',
    textTransform: 'upppercase',
    margin: '15px 0'
}

export default Component2;