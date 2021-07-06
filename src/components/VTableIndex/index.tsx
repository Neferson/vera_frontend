import { Pagination } from 'react-bootstrap';
import styles from "./styles.module.scss";

export function VTableIndex(){
	return (
		<>
			<table className={`${styles['table-vera']}`}>
				<thead>
					<tr>
						<th className="text-center">
							<input type="checkbox" />
						</th>
						<th>Código</th>
						<th>Produto</th>
						<th>Estoque</th>
						<th>Preço</th>
						<th>Múltiplo</th>
						<th>Unidade</th>
						<th>Comissão</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td className="text-center">
							<input type="checkbox" />
						</td>
						<td>42563</td>
						<td>Saco de Arroz 5kg Tipo A</td>
						<td>153</td>
						<td>15,00</td>
						<td>1</td>
						<td>KG</td>
						<td>5%</td>
					</tr>
					<tr>
						<td className="text-center">
							<input type="checkbox" />
						</td>
						<td>42563</td>
						<td>Saco de Arroz 5kg Tipo A</td>
						<td>153</td>
						<td>15,00</td>
						<td>1</td>
						<td>KG</td>
						<td>5%</td>
					</tr>
					<tr>
						<td className="text-center">
							<input type="checkbox" />
						</td>
						<td>42563</td>
						<td>Saco de Arroz 5kg Tipo A</td>
						<td>153</td>
						<td>15,00</td>
						<td>1</td>
						<td>KG</td>
						<td>5%</td>
					</tr>
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
