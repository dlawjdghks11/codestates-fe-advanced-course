import styled from "styled-components";
import { Link } from 'react-router-dom';

const HeaderContainer = styled.div`
    width: 100%;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const TextContainer = styled.div`
    width: 200px;
    height: 80px;
    font-size: 62px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: black;
`;

function Header(){
    return (
        <div>
            <HeaderContainer>
                <Link to="/" style={{ textDecoration: 'none' }}><TextContainer>BOARD</TextContainer></Link>
            </HeaderContainer>
        </div>
    );
};

export default Header;