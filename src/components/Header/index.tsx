import { Bell, Menu } from 'react-feather';
import Image from 'next/image';
import { Button } from 'react-bootstrap';

import styles from './styles.module.scss';

export default function Header () {
  return (
    <header className={styles.header}>
      <div className={`${styles["menu-button-container"]}`}>
        <button className={styles.openMenu}>
          <Menu />
        </button>
      </div>

      <div className={`${styles["logo-container"]}`}>
        <Image width={80} height={45} src={"/vera-corp.png"} alt="Logo Vera Corp" />
      </div>

      <div className={`${styles["header-nav-container"]}`}>        
        <Button className={`btn-rounded ${styles["btn-header-nav"]}`}>
          <span className={`${styles["vera-badge"]}`}>68</span>
          <Bell />
        </Button>

        <Button className={`btn-rounded ${styles["btn-header-nav"]}`}>
          NF
        </Button>
      </div>

    </header>
  );
}