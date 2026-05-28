"use client";

import React, { useState } from "react";

const Counter = () => {
    const [count, setCount] = useState(0);

    const reset = () => {
        setCount(0);
    };

    const decreament = () => {
        setCount((prev: number) => {
            return prev - 1;
        });
    };

    const increase = () => {
        setCount((prev: number) => {
            return prev + 1;
        });
    };

    return (
        <div>
            <h1>Counter: {count}</h1>
            <div style={{ display: 'flex', gap: '10px' }}>
                <button onClick={decreament}>-</button>
                <button onClick={reset}>Reset</button>
                <button onClick={increase}>+</button>
            </div>
        </div>
    );
};

export default Counter;
