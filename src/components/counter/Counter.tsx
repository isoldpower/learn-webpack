import React, {useEffect, useState} from 'react';
import classes from "@/components/counter/Counter.module.scss";

function Counter() {
    const [count, setCount] = useState<number>(0);
    const [announce, setAnnounce] = useState<string>('neutral');
    useEffect(() => {
        if (count > 0) setAnnounce('positive');
        else if (count < 0) setAnnounce('negative');
        else setAnnounce('neutral')
    }, [count]);

    const increment = () => setCount(prev => prev + 1);
    const decrement = () => setCount(prev => prev - 1);

    return (
        <div className={classes.wrapper}>
            <div className={classes.content}>
                <div className={classes.value}>{count}</div>
                <div className={classes.announce} datatype={announce}>
                    {announce}
                </div>
                <button onClick={decrement} className={classes.negativeButton}>Decrease</button>
                <button onClick={increment} className={classes.positiveButton}>Increase</button>
            </div>
        </div>
    );
};

export default Counter;