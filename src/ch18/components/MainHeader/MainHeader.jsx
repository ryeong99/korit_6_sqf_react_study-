/** @jsxImportSource @emotion/react */
import { useRecoilState } from 'recoil';
import { mainSidebarShowAtom } from '../../atoms/mainSidebarShowAtom';
import MainContainer from '../MainContainer/MainContainer';
import * as s from './style';
import { FaBars } from "react-icons/fa";

function MainHeader() {
    const [mainSidebarShow,setMainSidebarShow ] = useRecoilState(mainSidebarShowAtom)


    const handleMainMeneToggleClick = () => {
        setMainSidebarShow(true);
    }

    return (
        <div css={s.layout}>
            <MainContainer>
                <div css={s.headerBody}>
                    <button css={s.menuToggleButton}
                        onClick={handleMainMeneToggleClick}>
                        <FaBars />
                    </button>
                </div>
            </MainContainer>
        </div>
        
    );
}

export default MainHeader;