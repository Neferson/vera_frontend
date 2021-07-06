import { Bell, Menu } from 'react-feather';
import Image from 'next/image';
import { Button, Row, Col } from 'react-bootstrap';

export default function Header () {
  return (
    <header className={"header"}>
      <div className="menu-button-container">
        <button className={"openMenu"}>
          <Menu />
        </button>
      </div>

      <div className={"logo-container"}>
        <Image width={80} height={45} src={"/vera-corp.png"} alt="Logo Vera Corp" />
      </div>

      <div className="header-nav-container">        
        <Button className={"btn-rounded btn-header-nav"}>
          <Bell />
        </Button>

        <Button className={"btn-rounded btn-header-nav"}>
          NF
        </Button>
      </div>

    </header>
  );
}