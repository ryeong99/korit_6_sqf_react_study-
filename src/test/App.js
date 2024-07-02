import { useEffect, useState } from "react";
import "./App.css"

function App(props) {
    return (
        <div className="back">
            <div className="ground">
                <h1>회원정보 수정</h1>
                <div className="admin">
                    <label>이름:</label>
                    <input type="text"></input>
                    <label>이메일:</label>
                    <input type="text"></input>
                    <label>비밀번호:</label>
                    <input type="text"></input>
                </div>
                <button>저장</button>
            </div>
        </div >
    );
}

export default App;