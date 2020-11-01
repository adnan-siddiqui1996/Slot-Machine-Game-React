import React from 'react';

function SlotM(props) {
    let{x,y,z} = props;
    if(x===y && y===z) {
        return(
            <React.Fragment>
                <hr />
                <h1>{x} {y} {z}</h1>
                <h5>This is matching</h5>
                <hr />
            </React.Fragment>
        )
    }
    else{
        return(
            <React.Fragment>
                <hr />
                <h1>{x} {y} {z}</h1>
                <h5>This is not matching</h5>
                <hr />
            </React.Fragment>
        )
    }
}

export default function SlotMachine() {
    return(
        <React.Fragment>          
            <div className="App">
                <h1> 🎰 Welcome to slot machine game 🎰 </h1>
            </div>
            <div className="page">
                <SlotM x="🤣" y="😁" z="🤑" />
                <SlotM x="🤢" y="🤢" z="🤢" />
                <SlotM x="🤡" y="💩" z="👹" />
            </div>
        </React.Fragment>
    )
}