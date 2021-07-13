import { ReactNode } from 'react';
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
	children: ReactNode;
}

export function VTableIndex({ THeader, children }: VTableIndexProps){
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
					{ children }
				</tbody>
			</table>
		</>
	);
}
