import { VTableIndex } from "../../components/VTableIndex";
import { Col } from "react-bootstrap";
import { GetServerSideProps } from "next";
import { BSButtonAdd } from "../../components/BSButtonAdd";

type Product = {
	code: string;
	name: string;
	stock: number;
	amount: number;
	multiple: number;
	unit: string;
	seller_amount: string;
}

const THeader = ['Código', 'Produto', 'Estoque', 'Preço', 'Múltiplo', 'Unidade', 'Comissão']
const TBody = [
	{
		code: '42563',
		name: 'Saco de Arroz 5kg Tipo A',
		stock: 153,
		amount: 15.00,
		multiple: 1,
		unit: "KG",
		seller_amount: '5%',
	},
	{
		code: '42564',
		name: 'Saco de Arroz 5kg Tipo A',
		stock: 153,
		amount: 15.00,
		multiple: 1,
		unit: "KG",
		seller_amount: '5%',
	},
	{
		code: '42565',
		name: 'Saco de Arroz 5kg Tipo A',
		stock: 153,
		amount: 15.00,
		multiple: 1,
		unit: "KG",
		seller_amount: '5%',
	}
]

export default function Products(){
	return(
		<>
		<Col sm={12}>
			<VTableIndex THeader={THeader}>
				{ TBody.map((product) => {
						return (
							<tr key={product.code}>
								<td className="text-center">
									<input type="checkbox" />
								</td>
								<td>{product.code}</td>
								<td>{product.name}</td>
								<td>{product.stock}</td>
								<td>{product.amount}</td>
								<td>{product.multiple}</td>
								<td>{product.unit}</td>
								<td>{product.seller_amount}</td>
							</tr>
						)
					}) }
			</VTableIndex>

		</Col>
		<BSButtonAdd />
		</>
	);
}

export const getServerSideProps: GetServerSideProps = async () => {
	return {
    props: {}
	}
}
