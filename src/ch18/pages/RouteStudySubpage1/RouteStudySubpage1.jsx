/** @jsxImportSource @emotion/react */
import { Link, Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import RouteStudyPage from '../RouteStudyPage/RouteStudyPage';
import * as s from './style';
import MainContainer from '../../components/MainContainer/MainContainer';

function RouteStudySubpage1(props) {
    const navigate = useNavigate();
    const location =useLocation();

    console.log(location.pathname);
    console.log(location.pathname.lastIndexOf("/"));
    const index = location.pathname.lastIndexOf("/");
    console.log(location.pathname.substring(index+1));

    const handleAgeClick = () => {
        navigate("/routestudy/page1/age", {replace:true});
        // window.location/href = "https://naver.com" => replace:false
        // window.location/replace("https://naver.com") => replace:true
    }

    return (
        <MainContainer>
            <div>
                <ul>
                    <Link to={"/routestudy/page1/name"}><li>이름</li></Link>
                    <Link to={"/routestudy/page1/age"}><li>나이</li></Link>
                    <Link to={"/routestudy/page1/address"}><li>주소</li></Link>
                </ul>
                <button onClick={handleAgeClick}>나이</button>
                <div>
                    <Routes>
                        <Route path="/name" element={<h1>鄭𧕅佑</h1>} />
                        <Route path="/age" element={<h1> sin3x+cos3x=1 </h1>} />
                        <Route path="/address" element={<Link to={"https://map.naver.com/p/search/%EC%95%84%EB%A5%B4%EC%A0%A0%EB%B9%8C/place/35770061?placePath=?entry=pll&from=nx&fromNxList=true&searchType=place&c=15.00,0,0,0,dh"}>三〇一호</Link>} />
                    </Routes>
                </div>
            </div>
        </MainContainer>
    );
}

export default RouteStudySubpage1;