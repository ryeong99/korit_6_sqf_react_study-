function CustomInput({ ph, disabled, value}) {
    return <input type="text" placeholder={ph} disabled={disabled} value={value}/>
}

CustomInput.defaultProps = {
    ph: "test",
    disabled: false,
    value: "빈 값"
}

export default CustomInput; 