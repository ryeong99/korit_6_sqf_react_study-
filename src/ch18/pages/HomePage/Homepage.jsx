/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const layout = css`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
`;
 

function Homepage() {
    return (
        <div css={layout}>
            <h1>메인페이지입니다.</h1>    
        </div>
    );
}

export default Homepage;