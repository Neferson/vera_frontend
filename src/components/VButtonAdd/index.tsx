import {Button} from 'react-bootstrap';
import { Plus } from 'react-feather';

import styles from "./styles.module.scss";

export function VButtonAdd() {
  return (
    <Button 
			className={`
				${styles["btn-main"]}
				${styles["btn-floating"]} 
				${styles["btn-rounded"]}
			`}
		>
      <Plus />
    </Button>
  );
}
