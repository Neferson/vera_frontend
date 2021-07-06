import { Pagination } from 'react-bootstrap';
import styles from "./styles.module.scss";

type Product = {
	code: string;
	name: string;
	stock: number;
	amount: number;
	multiple: number;
	unit: string;
	seller_amount: string;
}

type VTableIndexProps = {
	THeader: Array<String>;
	TBody: Array<Product>;
}

export function VTableIndex({ THeader, TBody }: VTableIndexProps){
	return (
		<>
			<table className={`${styles['table-vera']}`}>
				<thead>
					<tr>
						<th className="text-center">
							<input type="checkbox" />
						</th>
						{ THeader.map((title, index) => {
							return (
								<th key={index}>{title}</th>
							)
						})}
					</tr>
				</thead>
				<tbody>
					{ TBody.map(product => {
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
				</tbody>
			</table>

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
		</>
	);
}
