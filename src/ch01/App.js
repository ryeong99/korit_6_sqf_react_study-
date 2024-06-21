
import { Children, Fragment } from "react";
import "./App.css";
import Hello from "./components/Hello";
import CustomInput from "./components/CustomInput";
import Box from "./components/Box";

/*
  컴포넌트 = 함수 (HTML 태그를 리턴하는 함수)

  JSX 특징
  1. 태그를 열었으면 닫아야한다. <A></A> or <A />
  2. 여러 태그를 리턴해야하는 경우에는 하나로 묶어야 한다. <Fragment> </Fragment>
  3. JSX 안에 값 또는 변수를 사용하려면 {} 표현식을 사용해야한다.
*/

function App() {
  const name = "김준일";
  const fontColorRed = {
    color: "red"
  };

const age = <h2>{31}</h2>;

  return <Fragment>
    <div>
      <Hello></Hello>
    </div>
    <div>
      <Hello></Hello>
    </div>
    <h1 style={fontColorRed} className="fs-20">{name}</h1>
    <CustomInput ph={"존함"} disabled={true} value={"김준일"}/>
    <CustomInput ph={"연세"} disabled={false} />
    <CustomInput ph={"연락처"} disabled={true} />
    <Box name = {"김준일이삼"} isShow={false}>
      {age}
     <h2>{31}</h2>
     <h2>{31}</h2>
      </Box> 
  </Fragment>
}
export default App;
