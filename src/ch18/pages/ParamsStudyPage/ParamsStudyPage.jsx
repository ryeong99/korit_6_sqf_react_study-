import React from 'react';
import { useParams } from 'react-router-dom';

function ParamsStudyPage(props) {
    const params =useParams();
    console.log(params.name);

    return (
        <div>
            <h1>{params.name}</h1>
        </div>
    );
}

export default ParamsStudyPage;