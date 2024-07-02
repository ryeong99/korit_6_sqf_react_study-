/** @jsxImportSource @emotion/react */
import * as s from './style';
import { FaBars, FaBook } from 'react-icons/fa';
import MainContainer from '../../MainContainer/MainContainer';
import { mainSidebarShowAtom } from '../../../atoms/mainSidebarShowAtom';
import { useRecoilState } from 'recoil';


function MainSidebarHeader() {
    const [mainSidebarShow,setMainSidebarShow ] = useRecoilState(mainSidebarShowAtom)

    const handleMainMenuToggleClick = () => {
        setMainSidebarShow(false);
    }

    return (
        <div css={s.layout}>
            <MainContainer>
                <div css={s.header}>
                    <h1 css={s.title}>
                        <FaBook />
                        <span>수업자료</span>
                    </h1>
                    <button css={s.menuToggleButton}
                    onClick={handleMainMenuToggleClick}
                    >
                        <FaBars />
                    </button>
                </div>
            </MainContainer>
        </div>
    );
}

export default MainSidebarHeader;