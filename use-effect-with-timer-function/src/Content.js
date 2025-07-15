import { use, useEffect, useState } from "react";

function Content(){
    const [countdown, setCountdown] = useState(180);

    useEffect(() => {
        const timerId = setInterval(() => {
            setCountdown(prevState => prevState - 1);
        }, 1000);

        return () => clearInterval(timerId);
    }, []);

    return (
        <div>
            <h1>Content Component</h1>
            <p>Countdown: {countdown}</p>
        </div>
    )
}

export default Content;
