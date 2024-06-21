function Box({name,isShow,children}) {
    const result = true && "김준일";
    console.log(result);

    return<div>
        <h1>{name}</h1>
        {children}
        {1+30}
        {result}
        {true && "김준일"}
        {isShow && <h3>비비디 바비디 부</h3>}
        {isShow ? <h3>비비디 바비디 부</h3> : <h4>비비디바비디부</h4>}
    </div>
}

export default Box;