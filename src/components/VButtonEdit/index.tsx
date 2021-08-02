import { ButtonHTMLAttributes } from "react";
import { Button } from "react-bootstrap";
import { Edit2 } from "react-feather";

import styles from './styles.module.scss';

type VButtonEditProps = ButtonHTMLAttributes<HTMLButtonElement>;

export function VButtonEdit({ ...ButtonProps }: VButtonEditProps){
	return (
		<Button {...ButtonProps} variant="outline-warning" className={`${styles['td-button']} ${styles["outline-warning"]}`}><Edit2 /></Button>
	)
}
