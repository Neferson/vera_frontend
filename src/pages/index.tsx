import Head from 'next/head'
import Image from 'next/image'
import { Row, Col, Form, Button, Pagination } from 'react-bootstrap'
import { Menu, BarChart2, Calendar, User, ShoppingBag, Trello, UploadCloud, Plus } from 'react-feather';
import Select from 'react-select';
import { useForm, SubmitHandler, Controller } from "react-hook-form";


type Inputs = {
  name: string
  category_id: number;
}

export default function Home() {

  const {register, control, handleSubmit} = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    console.log(data);
    
    const dataForm = {
      name: data.name,
      category_id: data.categoria.value
    }
    // console.log(dataForm);
  }


  const options = [
    { value: 'alimentacao', label: 'Alimentação' },
    { value: 'bebidas', label: 'Bebidas' }
  ]

  return (
    <div className={"container-app"}>
      <header className={"header"}>
        <div className="menu-button-container">
          <button className={"openMenu"}>
            <Menu />
          </button>
        </div>

        <div className={"logo-container"}>
          <Image width={80} height={45} src={"/vera-corp.png"} alt="Logo Vera Corp" />
        </div>
      </header>

      

      <main className={"main"}>

        <nav className={"main-nav"}>
          <ul>
            <li><BarChart2 /></li>
            <li><Calendar /></li>
            <li><User /></li>
            <li><ShoppingBag /></li>
            <li><Trello /></li>
          </ul>
        </nav>

        <div className={"main-container"}>

          <Row>

            <Col sm={12}>

              <Row>
                <Col sm={4} md={7}>
                  <h1>
                    <ShoppingBag /> Produtos
                  </h1>
                </Col>

                <Col sm={8} md={5} className="">
                  <Form className="row text-right" onSubmit={handleSubmit(onSubmit)}>
                    <Form.Group as={Col} sm={4} md={5} className="">
                      <Form.Control type="text" placeholder="Burscar por nome do produto" className="block" {...register("productTitle", { required: true } )} />
                    </Form.Group>

                    <Col sm={8} md={5} className="form-group">

                    <Controller
                      name="category_id"
                      isClearable
                      control={control}
                      isMulti
                      render={({ field }) => (
                        <Select
                          id="Teste"
                          {...field}
                          options={options}
                        />
                      )}
                    />
                      {/* <Select options={options} className="" /> 
                      <Controller
                        as={Select}
                        name="Name"
                        options={options}
                        isMulti
                      />*/}
                    </Col>

                    <Form.Group as={Col} sm={1} className="">
                      <Button type="submit">
                        Filtrar
                      </Button>
                    </Form.Group>

                    {/* <Col sm={8} md={5} className="form-group">
                      <Select options={options} className="" />
                    </Col>

                    <Form.Group as={Col} sm={2} md={2} className="">
                      <Button className="btn btn-purple" block>
                        <UploadCloud />
                      </Button>
                    </Form.Group> */}
                  </Form>
                </Col>
              </Row>
            </Col>

            

          </Row>

          <Button className="btn-main btn-floating btn-rounded">
            <Plus />
          </Button>

        </div>
        
      </main>

      <footer className={"footer"}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={"logo"}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
