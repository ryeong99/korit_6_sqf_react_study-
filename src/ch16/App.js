import { useEffect, useState } from "react";
import "./App.css"

function App() {

    const emptyFile = {
        name: "",
        email: "",
        imgSrc:""
    }
    
    const [ proFile, setproFile] = useState({...emptyFile});

    useEffect(() => {
        const profile = localStorage.getItem("profile");
        setproFile(!profile ? "" : JSON.parse(profile));
    }, []);

        const handleLoadImgClick = () => {
            const fileElement = document.createElement("input"); 
            fileElement.setAttribute("type", "file");
            fileElement.click();
            fileElement.onchange = (e) => {
            const file = e.target.files[0]; 
            const filereader = new FileReader();
            
            filereader.onload = (e) => {
                setproFile(proFile => {
                    return {...proFile,
                        imgSrc: e.target.result
                    }
                });
            }
            filereader.readAsDataURL(file);
        }
    }
    
    const handleOnChange = (e) => {
                setproFile(proFile => {
                    return {...proFile,
                        [e.target.name]: e.target.value
                    }
                }) 
            };

    const handleButtonClick = (e) => {
        localStorage.setItem("profile", JSON.stringify(proFile));
    };

    return(
        <div className="back-ground">
            <div className="profile">
                <h1> </h1>
                <h1> 프로필</h1>
                <div className="container"> 
                    <div className="img-continer" onClick={handleLoadImgClick}>
                        <img src={proFile.imgSrc} alt="" />
                    </div>
                <input type="text" name="name" onChange={handleOnChange} value={proFile.name}></input>
                <input type="text" name="email" onChange={handleOnChange} value={proFile.email}></input>
                <button onClick={handleButtonClick}>저장</button>
                </div>
            </div>        
        </div>
    );
}

export default App;