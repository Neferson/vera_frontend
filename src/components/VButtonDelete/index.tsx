import { ButtonHTMLAttributes } from "react";
import { Button } from "react-bootstrap";
import { Trash } from "react-feather";

import styles from './styles.module.scss';

type VButtonDeleteProps = ButtonHTMLAttributes<HTMLButtonElement>;

export function VButtonDelete({ ...ButtonProps }: VButtonDeleteProps){
	return (
		<Button {...ButtonProps} variant="danger" className={`${styles['td-button']}`}><Trash color="white" /></Button>
	)
}
