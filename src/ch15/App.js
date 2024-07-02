import { useState } from "react";
import "./App.css"
import Swal from "sweetalert2";
//1. 원을 누르면 파일 선택
//2. 파일 선택하면 원이 이미지로 바뀌게 
    function App() {

    const [ imgSrc, setImgSrc ] = useState("");

    const handleLoadImgClick = (e) => {
        Swal.fire({
            title: "프로필 이미지 변경",
            text: "프로필 이미지를 변경하시겠습니까?",
            showCancelButton: true,
            confirmButtonText: "예",
            cancelButtonText: "아니오"
        }).then(result => {
            if(result.isConfirmed) {
                const fileElement = document.createElement("input"); 
                fileElement.setAttribute("type", "file");
                fileElement.setAttribute("multiple", true);
                fileElement.click();

                fileElement.onchange = (e) => {
                    console.log(e.target.files);
                    const file = e.target.files[0]; 
                    const filereader = new FileReader();
                    filereader.onload = (e) => {
                        setImgSrc(e.target.result);
                    }
                
                    filereader.readAsDataURL(file);
                }
            }
        });

    }

    return (
        <div className="container">
            <div className="img-continer" onClick={handleLoadImgClick} >
                <img src={imgSrc} alt="" />
            </div>
        </div>
    );
}

    export default App;