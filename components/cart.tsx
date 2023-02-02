import { NextPage } from "next";
import styled from "styled-components";

interface Props {
    count: number;
}

const Button = styled.div`
    @import url("https://fonts.googleapis.com/css2?family=Montserrat&display=swap");
    
    display: flex;
    align-items: center;
    padding: 15px 50px;
    
    button {
        width: 90px;
        border-radius: 8px;
    }

    h1 {
        font-family: 'Montserrat';
        font-weight: 700;
        font-size: 18px;
    }
`

const Cart: NextPage<Props> = ({ count }) => {
	return (
        <Button>
            <button>
                <h1>{count}</h1>
            </button>
        </Button>
	);
}

export default Cart;
