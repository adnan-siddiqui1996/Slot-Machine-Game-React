import React from 'react';

class IncrementDec extends React.Component{
    constructor() {
        super();
        this.state = {
            number: 0
        }
    }

    inc = () => {
        let newNum = this.state.number + 2;
        this.setState({
            number: newNum
        })
    }

    dec = () => {
        let newNum = this.state.number - 2;
        this.setState({
            number: newNum
        })
    }

    render() {
        return(
            <React.Fragment>
                <h1>👍 Increment Decrement 👎</h1>
                <div className="incDec">
                    <h1>{this.state.number}</h1>
                    <button onClick={this.dec}>Decrement</button>
                    <button onClick={this.inc}>Increment</button>
                </div>
            </React.Fragment>
        )
    }

}

export default IncrementDec