import { NextPage } from "next";
import styled from "styled-components";
import Cart from "../components/cart";

interface Props {
    title: string;
    subtitle: string;
    count: number;
}

const Title = styled.div`
    @import url("https://fonts.googleapis.com/css2?family=Montserrat&display=swap");

    color: #FFFFFF;
    font-family: 'Montserrat';
    font-style: normal;
    mix-blend-mode: normal;
    display: flex;
    align-items: baseline;
    padding: 15px 50px;

    & h1 {
        font-weight: 600;
        font-size: 40px;
        margin-right: 8px;
    }

    & h2 {
        font-weight: 300;
        font-size: 20px;
    }
`

const Wrapper = styled.div`
    background: #0F52BA;
    position: relative;
`;

const Header: NextPage<Props> = ({ title, subtitle, count }) => {
    return (
        <Wrapper>
            <Title>
                <h1>{title}</h1>
                <h2>{subtitle}</h2>
            </Title>
            <Cart count={count}/>
        </Wrapper>
    );
}

export default Header;
