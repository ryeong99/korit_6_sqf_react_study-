import React from 'react';
import { useSearchParams } from 'react-router-dom';

function SearchParamsStudy(props) {
    const [SearchParams, setSearchParams ] = useSearchParams();
    //const values = SearchParams.values();
    //console.log(values.next());  // 다음 값을 배열로 가져온다

    console.log(SearchParams.get("a")); // 동일한 키값을 배열로 가져온다   
    console.log(SearchParams.get("b")); 
    
    //console.log(SearchParams.getAll("a")); // 동일한 키값을 모두 배열로 가져온다   
    
    //setSearchParams({...setSearchParams, c:30});

    const handleClick = () => {
        const keys = SearchParams.keys();
        let newParams = {

        }
        for(let i=0; i < SearchParams.size; i++) {
            const key = keys.next().value;
            const value = SearchParams.get(key);
            newParams = {
                ...newParams,
                [key]:value
            }
        }
        setSearchParams({...newParams, c:30 });
    }

    return (
        <div>
            <h1>SearchParams</h1>
            <button onClick={handleClick}>c=30 추가</button>
        </div>
    );
}

export default SearchParamsStudy;