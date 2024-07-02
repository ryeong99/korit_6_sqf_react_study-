import { useEffect, useState } from "react";
import "./style.css";

function DataTableBody({ mode, setMode, products, setProducts, isDeleting, setDeleting,seteditproductId }) {
    const [ viewProducts, setViewProducts ] = useState([]);
    
    //전체선택이 되어있는지 여부
    const [ checkedAll, setCheckedAll] = useState(false);

    //products와 mode의 값이 바뀔 때마다 호출
    useEffect(() => {
        if(mode === 0) {
            resetViewProducts(); //isChecked를 추가해 초기화
            setCheckedAll(false); //전체선택 해제
        }
        
    }, [products, mode]);

    //viewProducts의 값이 바뀔 때 호출(전체선택 체크박스, 그냥 체크박스들이 눌러질 때)
    useEffect(() => {
        //체크여부값만 가져와 배열에 저장
        const checkStates = viewProducts.map(product => product.isChecked);
        if(checkStates.includes(false)) { //배열에 false가 하나라도 있을 경우(하나라도 체크가 안되어있을 경우)
            setCheckedAll(false); //전체 선택 체크박스 해제
        } else { //모두 체크되어 있을 경우
            setCheckedAll(true); //전체 선택 체크박스 선택
        }
    }, [viewProducts]);

    useEffect(() => {
        if(isDeleting) {
            setProducts([ ...viewProducts
                .filter(viewProduct => viewProduct.isChecked === false)
                .map(viewProduct => {
                    const { isChecked, ...product } = viewProduct;
                    return product;
                })
            ]);
            setMode(0);
            setDeleting(false);
        }
    }, [isDeleting])
    
    useEffect(() => {    
        if(mode ===2) {
            const [ selectedproduct ] = viewProducts.filter(product => product.isChecked);
            
            seteditproductId(!selectedproduct ? 0 : selectedproduct.id);
        }
    }, [viewProducts]);

    //체크 여부를 모두 false(선택안함)로 변경
    const resetViewProducts = () => {
        setViewProducts([ ...products.map(product => ({ ...product, isChecked: false })) ]);
    }

    //전체선택 체크박스의 값이 변경될 때
    const handleCheckedAllChange = (e) => {
        console.log(checkedAll);
        setCheckedAll(checked => {
            if(!checked) { //checkedAll이 false일 때(체크안됨)
                setViewProducts([ ...products.map(product => ({ ...product, isChecked: true })) ]); //모두 선택
            } else { 
                setViewProducts([ ...products.map(product => ({ ...product, isChecked: false })) ]);
            }
            return !checked;
        });
    }

    
    //체크박스 선택할 때 호출.
    const handleCheckedChange = (e) => {
        //수정일 때 하나만 선택되도록 한다.
        if(mode === 2) {

            setViewProducts(viewProducts => {
                return [ ...viewProducts.map(product => {
                    if(product.id === parseInt(e.target.value)) {
                        return {
                            ...product,
                            isChecked: !product.isChecked
                        }
                    }
                    //하나만 체크 가능
                    return  {
                        ...product,
                        isChecked: false
                    }
                }) ]
            });
        } 
        //삭제일 경우
        if(mode === 3) {
            setViewProducts(viewProducts => {
                return [ ...viewProducts.map(product => {
                    if(product.id === parseInt(e.target.value)) {
                        return {
                            ...product,
                            isChecked: !product.isChecked
                        }
                    }
                    return product;
                }) ]
            });
        }
       
    }   

    return (
        <div className="table-body">
            <table>
                <thead>
                    <tr>
                        {/* 전체 선택은 삭제에서만 가능 */}
                        <th>
                            <input 
                                type="checkbox" 
                                disabled={mode !== 3} 
                                onChange={handleCheckedAllChange}
                                checked={checkedAll}
                            />
                        </th> 
                        <th>상품코드</th>
                        <th>상품명</th>
                        <th>사이즈</th>
                        <th>색상</th>
                        <th>가격</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        viewProducts.map((product) => (
                            <tr key={product.id}>
                                <th>
                                    <input 
                                        type="checkbox" 
                                        disabled={mode === 0 || mode === 1} 
                                        checked={product.isChecked}
                                        onChange={handleCheckedChange} 
                                        value={product.id} 
                                    />
                                </th>
                                <td>{product.id}</td>
                                <td>{product.productName}</td>
                                <td>{product.size}</td>
                                <td>{product.color}</td>
                                <td>{product.price}</td>
                            </tr>
                        ))
                    }
                    
                </tbody>
            </table>
           
        </div>
    );
}

export default DataTableBody;