import React, { useCallback, useEffect, useMemo, useState } from 'react';

function MemoizationPage(props) {
    const [value, setValue] = useState(0);
    const [value2, setValue2] = useState(0);
    const [num, setNum] = useState(0);
    
    const a = useMemo (() => {
        console.log(num);
        return num + 10;
        }, [num]);

    const b = num + 20;

    let c = null;
    useEffect(() => {
        c= num + 30;
    }, [num]);


    
    const handleChange = useCallback((e) => {
        setValue(e.target.value)
    }, []);

    const handleChange2 = (e) => {
        setValue2(e.target.value)
    }

    const handleClock = useCallback(() => {
        setNum(parseInt(value));
    },[value]);

    return (
        <div>
            <h1>{a}</h1>
            <input type="text" onChange={handleChange}/>
            <input type="text" onChange={handleChange2}/>
            <button onClick={handleClock}>확인</button>
        </div>
    );
}

export default MemoizationPage;