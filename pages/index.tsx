import { NextPage } from "next";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import styled from "styled-components";
import { apiURL } from "../api";
import { GlobalStyle } from "../public/globalStyle";
import Product from "../components/product";
import { increment, selectValue } from "../slices/counterSlice";


interface Props {
  title: string;
  subtitle: string;
}

const Title = styled.div`
  	@import url("https://fonts.googleapis.com/css2?family=Montserrat&display=swap");

	color: #FFFFFF;
	font-family: 'Montserrat';
	font-style: normal;
	mix-blend-mode: normal;
	
	& h1 {
		font-weight: 600;
		font-size: 40px;
	}

	& h2 {
		font-weight: 300;
		font-size: 20px;
	}
`

const Wrapper = styled.section`
	background: #0F52BA;
	height: 101px;
`;

const Header: NextPage<Props> = ({ title, subtitle }) => {
	return (
		<Wrapper>
			<Title>
				<h1>{title}</h1>
			</Title>
			<Title>
				<h2>{subtitle}</h2>
			</Title>
		</Wrapper>
	);
}

const HomePage: NextPage = () => {
	const page: Number = 1
	const rows: Number = 5
	const sortBy: String = "name"
	const orderBy: String = "DESC"

	const [data, setData] = useState<Array<any>>([])

	useEffect(() => {
		fetch(`${apiURL}/products?page=${page}&rows=${rows}&sortBy=${sortBy}&orderBy=${orderBy}`)
			.then(response => response.json())
			.then(data => setData(data.products));
	}, [])

	const count = useSelector(selectValue);
	const dispatch = useDispatch();

	const handleClick = () => dispatch(increment())
	
	return (
		<div>
			<GlobalStyle />

			<Header title="MKS" subtitle="Sistemas"/>

			<div>
				{data.map((item) => (
					<Product item={item} />
				))}
			</div>

			<button onClick={handleClick}>Carrinho ({count})</button>
		</div>
	);
}

export default HomePage;
