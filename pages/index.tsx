import { NextPage } from "next";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { apiURL } from "../api";
import { increment, selectValue } from "../slices/counterSlice";

interface Props {
  title: string;
}

const Header: NextPage<Props> = ({ title }) => {
	return <h1>{title ? title : "Default title"}</h1>;
}

const HomePage: NextPage = () => {
	const page: Number = 1
	const rows: Number = 5
	const sortBy: String = "name"
	const orderBy: String = "DESC"

	const [data, setData] = useState([])

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
			<Header title="MKS Sistemas" />
			<ul>
				{data.map((item) => (
					<li key={item}>{item.name}</li>
				))}
			</ul>

			<button onClick={handleClick}>Carrinho ({count})</button>
		</div>
	);
}

export default HomePage;
