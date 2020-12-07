import React, {useState, useEffect, useRef} from 'react';

const Timer = () => {
const [seconds, setSeconds] = useState(0)
    return (
<h1>{seconds}</h1>
)
}

export default Timer;