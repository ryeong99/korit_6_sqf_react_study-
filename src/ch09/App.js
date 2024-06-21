import { useState } from "react";

function App() {
    
    const[ inputValue, setInputValue] = useState(" ");
    const[ names, setNames ] = useState([]);
    const liList = [
        <li>{"test1"}</li>,
        <li>{"test2"}</li>,
        <li>{"test3"}</li>,
        <li>{"test4"}</li>
    ];

        const handleInputChange = (e) => {
            setInputValue(e.target.value);
        }
        const handleInputKeyDown = (e) => {
            if(e.keyCode === 13) {
                setNames(names => [ ...names,inputValue]);
                setInputValue("");
            }
        }

    // map을 사용하면 key값 반드시 입력
    return<>
        <input 
        onChange = {handleInputChange}
        onKeyDown = {handleInputKeyDown}
        value= {inputValue}/>
        <ul>
            {liList}
            {names.map((name, index) => <li key={index}>{name}</li>)}
            {liList}
        </ul>
    </>
}
export default App;