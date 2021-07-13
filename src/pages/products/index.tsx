import { VTableIndex } from "../../components/VTableIndex";
import { Button, Col, Pagination } from "react-bootstrap";
import { GetServerSideProps } from "next";
import { VButtonAdd } from "../../components/VButtonAdd";
import { Edit2, Trash } from "react-feather";
import { FormEvent, useState } from "react";
import { VButtonDelete } from "../../components/VButtonDelete";
import { VButtonEdit } from "../../components/VButtonEdit";

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

export default function ProductsList(){
	const [selectedProducts, setSelectedProducts] = useState<string[]>([]);

	const handleCheckboxProducts = (productId: string) => {
		setSelectedProducts((oldSelectedProducts) => {
			if(selectedProducts.indexOf(productId) !== -1){
				return oldSelectedProducts.filter(item => item != productId);
			} else {
				return ([...oldSelectedProducts, productId]);
			}
		});
	}

	return(
		<>
		<Col sm={12}>
			<VTableIndex THeader={THeader}>
				{ TBody.map((product) => {
						return (
							<>
							<tr key={product.code}>
								<td className="text-center position-relative">
									<input type="checkbox" onClick={() => handleCheckboxProducts(product.code)}/>
									<div className="table-actions">
										<VButtonEdit type="button" />
										<VButtonDelete type="button" />
									</div>
								</td>
								<td>{product.code}</td>
								<td>{product.name}</td>
								<td>{product.stock}</td>
								<td>{product.amount}</td>
								<td>{product.multiple}</td>
								<td>{product.unit}</td>
								<td>{product.seller_amount}</td>
							</tr>
						</>
						)
					}) }
			</VTableIndex>

			<span className="mt-4 justify-content-start">
				1-3 páginas
			</span>

			<Pagination className="mt-4 justify-content-end">
				<Pagination.First />
				<Pagination.Prev />
				<Pagination.Item active className="">{1}</Pagination.Item>
				<Pagination.Item>{2}</Pagination.Item>
				<Pagination.Item>{3}</Pagination.Item>
				<Pagination.Item>{4}</Pagination.Item>

				<Pagination.Ellipsis />

				<Pagination.Item>{10}</Pagination.Item>
				<Pagination.Next />
				<Pagination.Last />
			</Pagination>
		</Col>
		<VButtonAdd />
		</>
	);
}

export const getServerSideProps: GetServerSideProps = async () => {
	return {
    props: {}
	}
}
