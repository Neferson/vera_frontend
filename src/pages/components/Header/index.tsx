import { Bell, Menu } from 'react-feather';
import Image from 'next/image';
import { Button } from 'react-bootstrap';

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

      <div className="justify-content-end">
        <Button className={"btn-rounded"}>
          <Bell />
        </Button>

        <Button>
          NF
        </Button>
      </div>

    </header>
  );
}