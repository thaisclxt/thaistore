import { NextPage } from "next";
import { useSelector, useDispatch } from 'react-redux';
import { increment, selectValue } from "../slices/counterSlice";

interface Props {
  title: string;
}

const Header: NextPage<Props> = ({ title }) => {
	return <h1>{title ? title : "Default title"}</h1>;
}

const HomePage: NextPage = () => {
	const products: Array<string> = ["Laptop", "Fone", "Celular"];

	const count = useSelector(selectValue);
	const dispatch = useDispatch();

	const handleClick = () => dispatch(increment())

	return (
		<div>
			<Header title="MKS Sistemas" />
			<ul>
				{products.map((name) => (
					<li key={name}>{name}</li>
				))}
			</ul>

			<button onClick={handleClick}>Carrinho ({count})</button>
		</div>
	);
}

export default HomePage;