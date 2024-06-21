import { useRef, useState } from "react";
import "./App.css"
import Swal from "sweetalert2";

function App() {
    const test = {
        a: "AAA",
        b: "BBB"
    }
    console.log(test["a"]);

    const emptyUser = {
        id : 0,
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
        const userids = userList.map(({id})=>id)//.sort();
        const maxid = userids.length === 0 ? 1 : Math.max.apply(null,userids) +1;
        setInputData(inputData => {
            return {
                ...inputData,
                [e.target.name]: e.target.value, 
                ["id"]: maxid
            }
        })
    }

    const handleEditClick = (key, index) => {
        Swal.fire({
            title: `${key} edit`,
            input: "text",
            inputValue: userList[index][key],
            showCancelButton:true,
            cancelButtonText:"취소",
            confirmButtonText:"확인"
        }). then(result=> {
            if(result.isConfirmed) {
            setUserList(userList => [...userList.map((user, i) => {
                if (i === index) {
                    return {
                        ...user,
                        [key]:result.value
                    }
                }
                return user;
            }) ]);
            }
        });
    }
    
    const handleDeleteClick = (e) => {
        Swal.fire({
            title: "사용자 삭제", 
            text: "삭제하시겠습니까.",
            icon: "question",
            showCancelButton: true,
            confirmButtonText: "삭제",
            confirmButtonColor: "red",
            cancelButtonText: "취소"
        }). then(result =>{
            if(result.isConfirmed) {setUserList(userList => userList.filter((user, index) => index !== parseInt(e.target.value)))
            }
        });
    //     if(window.confirm("삭제??")) {  
    //         setUserList(userList => [...userList.filter((user, index) => index !== parseInt(e.target.value))])
    //     }
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
                <th>수정</th>
                <th>삭제</th>
            </tr>
        </thead>
        <tbody>
            { userList.map(({id, username, password, name,edit}, index) =>{
                return (
                    <tr key={index}>
                        <td>{index+1}</td>
                        <td name="username" onClick={() => handleEditClick ("username", index)}>{username}</td>
                        <td name="password" onClick={() => handleEditClick ("password", index)}>{password}</td>
                        <td name="name" onClick={() => handleEditClick ("name", index)}>{name}</td>
                        <td>
                            <button value={index}>수정</button>
                        </td>
                        <td>
                            <button onClick={handleDeleteClick} value={index}>삭제</button>
                        </td>
                    </tr>     
                )
            }) }
        </tbody>
        </table>
        </>
}

export default App;