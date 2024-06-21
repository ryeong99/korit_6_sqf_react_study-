import { useRef, useState } from "react";
import "./App.css"

function App() {

    const admin = {
        username: "",
        password: "",
        name: ""
    }

    const[ input, setInput] = useState({...admin});
    const[ names, setNames ] = useState([]);
    
    const inputRef = {
        username: useRef(), 
        password: useRef(),
        name: useRef()
     }

    const handleKeyChange = (e) => {
        setInput (setsetse => {
            return{
                ...setsetse,
                [e.target.name]: e.target.value
            }
        }); 
    }
    const handleKeyDown = (e) => {
        if(e.keyCode === 13) {
            if(e.target.name === "username"){
                inputRef.password.current.focus();
            } 
            if(e.target.name === "password"){
                inputRef.name.current.focus();
            } 
            if(e.target.name === "name")
                { setNames(names => [ ...names,input]);
                setInput({...admin});
                inputRef.username.current.focus();
            }
        }
    }
     

    return<>
        <input name="username" placeholder="사용자명" onKeyDown={handleKeyDown} 
        ref={inputRef.username} onChange={handleKeyChange} value= {input.username}/>
        <input name="password" placeholder="비밀번호" onKeyDown={handleKeyDown} 
        ref={inputRef.password} onChange={handleKeyChange} value= {input.password}/>
        <input name="name" placeholder="이름" onKeyDown={handleKeyDown} 
        ref={inputRef.name} onChange={handleKeyChange} value= {input.name}/>

    <table className="table-sty">
        <thead>
            <tr>
                <th>번호</th>
                <th>닉네임</th>
                <th>비밀번호</th>
                <th>이름</th>
            </tr>
        </thead>
        <tbody>
            { names.map((user, index) =>{
                return (
                    <tr key={index}>
                        <td>{index+1}</td>
                        <td>{user.username}</td>
                        <td>{user.password}</td>
                        <td>{user.name}</td>
                    </tr>    
                )
            }) }
        </tbody>
    </table>
    </>
}

export default App;