import { useRef, useState } from "react";
import "./App.css"

function App() {
    const emptyUser = {
        username: "",
        password: "",
        name: ""
    }

    const [userList, setUserList] = useState([]);
    const [inputData, setInputData] = useState({...emptyUser});

    const inputRef = {
        username: useRef(),
        password: useRef(),
        name: useRef(),
    }

    const handleInputKeyDown = (e) => {
        const {username, password, name} = inputRef
        if(e.keyCode === 13 ) {
      switch(e.target.name) {
            case "username" :
                password.current.focus();
                break;
            case"password" :
                name.current.focus();
                break;
            case "name" :
                username.current.focus();
                setUserList(userList =>[ ...userList, inputData])
                setInputData({...emptyUser});
                break;
            default:
            }
        }       
    }

    const handleInputChange = (e) => {
        setInputData(inputData => {
            return {
                ...inputData,
                [e.target.name]: e.target.value
            }
        })
    }
    
    return <>
        <input name="username" placeholder="사용자명" onKeyDown={handleInputKeyDown} 
        ref={inputRef.username} onChange={handleInputChange} value= {inputData.username}/>

        <input name="password" placeholder="비밀번호" onKeyDown={handleInputKeyDown} 
        ref={inputRef.password} onChange={handleInputChange} value= {inputData.password}/>

        <input name="name" placeholder="이름" onKeyDown={handleInputKeyDown} 
        ref={inputRef.name} onChange={handleInputChange} value= {inputData.name}/>
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
            { userList.map(({username, password, name}, index) =>{
                return (
                    <tr key={index}>
                        <td>{index+1}</td>
                        <td>{username}</td>
                        <td>{password}</td>
                        <td>{name}</td>
                    </tr>    
                )
            }) }
        </tbody>
        </table>
        </>
}

export default App;