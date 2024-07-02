import { useEffect, useRef, useState } from "react";
import "./style.css";
import Swal from "sweetalert2";

function DataTableHeader({ mode, setMode, products, setProducts, setDeleting, editproductId }) {

    const emptyProduct = {
        id: "",
        productName: "",
        size: "",
        color: "",
        price: ""
    };

    const inputRef = {
        productName: useRef(),
        size: useRef(),
        color: useRef(),
        price: useRef(),
    }
    const [ inputData, setInputData ] = useState({ ...emptyProduct });

    useEffect(() => {
        //      const product = products.filter(product => product.id === editproductId)[0];
        const [ product ] = products.filter(product => product.id === editproductId);
        setInputData(!product ? {...emptyProduct} : {...product});
    }, [editproductId]);

    const handleInputChange = (e) => {
        //괄호로 묶으면 값으로 리턴
        setInputData(inputData => ({
            ...inputData,
            [e.target.name]: e.target.value
        }));
    }
    //     setInputData(inputData => {
//             return{
//              ...inputData,
//              [e.target.name]: e.target.value
//             }
//      });

    const handleInputKeyDown = (e) => {
        if(e.keyCode === 13) {
            if(e.target.name === "productName") {
                inputRef.size.current.focus();
            }   
            if(e.target.name === "size") {
                inputRef.color.current.focus();
            }   
            if(e.target.name === "color") {
                inputRef.price.current.focus();
            }   
            if(e.target.name === "price") {
                handleSubmitClick();
                inputRef.productName.current.focus();
            }  
        }
         
    };
    
    //추가,수정,삭제버튼
    const handleChangeModeClick = (e) => {
        setMode(parseInt(e.target.value));
    }
    
    //확인버튼
    const handleSubmitClick = () => {
        if(mode === 1) {
            setProducts(products => {
                const productIds = products.map(product => product.id);
                const maxId = productIds.length === 0 ? 0 : Math.max.apply(null, productIds);
                return [ ...products, { ...inputData, id: maxId + 1 } ];
            });
            Swal.fire({
                title: "상품 정보 추가 완료",
                icon: "success",
                position: "top-end",
                showConfirmButton: false,
                timer: 500
            });
            resetMode();    
        }
        if(mode === 2) {
            Swal.fire({
                title: "상품 정보 수정",
                showCancelButton: true,
                confirmButtonText: "확인",
                cancelButtonText: "취소",
            }).then(() => {
                setProducts(products => [
                    ...products.map(product => {
                        if(product.id === editproductId) {
                            //inputData에서 id를 제외하고 rest에 대입,id를 유지하기 위해
                            const { id, ...rest } = inputData
                            return {
                                ...product,
                                ...rest //id를 제외한 값만 덮어쓴다.
                            }
                        }
                        return product;
                    })
                ]);
            });
        }
        if(mode === 3) {
           Swal.fire({
                title: "상품 정보 삭제",
                text: "정말로 삭제 하시겠습니까?",
                showCancelButton: true,
                confirmButtonText: "삭제",
                confirmButtonColor: "red",
                cancelButtonText: "취소"
           }).then(result => {
            if(result.isConfirmed) {
                setDeleting(true);
            }
           });
        }
        
    }

    //취소버튼
    const handleCancleClick = () => {
        resetMode();
    }
    //조회모드로 변경
    const resetMode = () => {
        setMode(0);
        setInputData({ ...emptyProduct });
    }

    return (
        <header className="table-header">
                <div className="input-group">
                    <input 
                        type="text" 
                        disabled={mode === 0 || mode === 3} 
                        name="productName"
                        value={inputData.productName}
                        placeholder="상품명" 
                        onChange={handleInputChange}
                        onKeyDown={handleInputKeyDown}
                        ref={inputRef.productName}
                        autoFocus
                    />
                    <input 
                        type="text" 
                        disabled={mode === 0 || mode === 3} 
                        name="size"
                        value={inputData.size}
                        placeholder="사이즈"  
                        onChange={handleInputChange}
                        onKeyDown={handleInputKeyDown}
                        ref={inputRef.size}
                    />
                    <input 
                        type="text" 
                        disabled={mode === 0 || mode === 3} 
                        name="color"
                        value={inputData.color}
                        placeholder="색상"  
                        onChange={handleInputChange}
                        onKeyDown={handleInputKeyDown}
                        ref={inputRef.color}
                    />
                    <input 
                        type="text" 
                        disabled={mode === 0 || mode === 3} 
                        name="price"
                        value={inputData.price}
                        placeholder="가격"  
                        onChange={handleInputChange}
                        onKeyDown={handleInputKeyDown}
                        ref={inputRef.price}
                    />
                </div>     
                <div>
                    {
                        // mode가 0이면 보이는 부분
                        !mode && (
                            <div className="button-group">
                                <button onClick={handleChangeModeClick} value={1}>추가</button>
                                <button onClick={handleChangeModeClick} value={2}>수정</button>
                                <button onClick={handleChangeModeClick} value={3}>삭제</button>
                            </div>
                        )
                    }

                    {
                        !!mode && (
                            <div className="button-group">
                                <button onClick={handleSubmitClick}>확인</button>
                                <button onClick={handleCancleClick}>취소</button>
                            </div>
                        )
                    }
                    
                </div>
        </header>
    );
}

export default DataTableHeader;