import { useState } from "react";
import DataTableBody from "../DataTableBody/DataTableBody";
import DataTableHeader from "../DataTableHeader/DataTableHeader";
import "./style.css";
import { SAMPLE_PRODUCTS } from "../../constants/sampleproduct";

function DataTable() {
    const [ mode, setMode ] = useState(0); 
    const [ products, setProducts ] = useState([...SAMPLE_PRODUCTS]);
    return (  
        <div className="table-main-container">
            <DataTableHeader mode={mode} setMode={setMode}/>
            <DataTableBody  mode={mode} products={products}/>
        </div>
    );
}

export default DataTable;