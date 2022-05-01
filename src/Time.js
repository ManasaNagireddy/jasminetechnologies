import React from 'react';
function Time() {
    const [name, setTime] = React.useState(new Date().toLocaleTimeString());
    const TC = () => {
        setInterval(() => {
            setTime(new Date().toLocaleTimeString());
        }, 10);

    }
    return(
        <div>Time :{TC}{ name} {new Date().toLocaleTimeString()}</div>
    );
}

export default Time;