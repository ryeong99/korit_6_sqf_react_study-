import { useEffect, useState } from "react";
import DataTableBody from "../DataTableBody/DataTableBody";
import DataTableHeader from "../DataTableHeader/DataTableHeader";
import "./style.css";
import { SAMPLE_PRODUCTS } from "../../constants/sampleproduct";
// [./] : 현재폴더

function DataTable() {
    const [ mode, setMode ] = useState(0); //0 = 조회, 1 = 추가, 2 = 수정, 3 = 삭제
    const [ products, setProducts ] = useState([ ...SAMPLE_PRODUCTS ]);
    const [ isDeleting, setDeleting ] = useState(false);
    const [ editproductId, seteditproductId ] = useState(0);

    useEffect(() => {
        const lsProducts = localStorage.getItem("products");
        setProducts(!lsProducts ? [] : JSON.parse(lsProducts));
    }, []);
    
    useEffect(() => {
        localStorage.setItem("products", JSON.stringify(products));
    }, [products]);

    return (
        <div className="table-main-container">
            <DataTableHeader 
            mode={mode} 
            setMode={setMode} 
            products={products} 
            setProducts={setProducts} 
            setDeleting={setDeleting} 
            editproductId={editproductId}/>
            
            <DataTableBody 
            mode={mode} 
            setMode={setMode} 
            products={products} 
            setProducts={setProducts} 
            isDeleting={isDeleting} 
            setDeleting={setDeleting}
            seteditproductId={seteditproductId}
             />
        </div>
    );
}

export default DataTable;