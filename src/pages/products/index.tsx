import { VTableIndex } from "../../components/VTableIndex";
import { Col } from "react-bootstrap";

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
		code: '42563',
		name: 'Saco de Arroz 5kg Tipo A',
		stock: 153,
		amount: 15.00,
		multiple: 1,
		unit: "KG",
		seller_amount: '5%',
	},
	{
		code: '42563',
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
		<Col sm={12}>
			<VTableIndex THeader={THeader} TBody={TBody}/>
		</Col>
	);
}
