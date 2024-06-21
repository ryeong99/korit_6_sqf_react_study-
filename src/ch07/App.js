import { useState } from "react";

function App() {
    const emptyCode = {
        username: "",
        password: "",
        email: ""
    }

    const [ code, setCode] = useState({...emptyCode});
    const [ code2, setCode2] = useState({...emptyCode});
    
    const handleInputCode = (e) => {
        setCode2(admin => {   
        return {
                ...admin,
                [e.target.name]: e.target.value
            }
        });
    }

    const handleInputClick = () => {
        setCode(code2); {}
    }

    return <>
        <input name="username" placeholder="사용자이름" onChange={handleInputCode} value={code2.username}/>
        <input name="password" placeholder="비밀번호" onChange={handleInputCode} value={code2.password}/>
        <input name="email" placeholder="이메일" onChange={handleInputCode} value={code2.email}/>
        <button  onClick={handleInputClick}>확인</button>
        <ul>
            <li>사용자이름: {code.username}</li>
            <li>비밀번호: {code.password}</li>
            <li>이메일: {code.email}</li>
        </ul>
    </>
}

export default App;