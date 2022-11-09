import Styles from "./Card.module.css"
import {Button, Card, Col, Container, Row} from "react-bootstrap";


const CardComponent=({name,img,id})=>{
  return(
    <Card className={Styles.card} key={id}>
      <Card.Img variant="top" src={img}/>
      <Card.Body style={{textAlign:'center',paddingBottom:"0%"}}>
        <Card.Title style={{color:"black"}}>{name}</Card.Title>
      </Card.Body>
      <Card.Body style={{display:"flex", textAlign:'center',paddingTop:"0%"}}>
        <Container fluid="xl">
          <Row>
            {/*<Col xs={12} sm={6} md={12} lg={12} xl={12} xxl={12}>
              <Button variant="outline-dark" className="m-1"  target="_blank">Vào trang github</Button>
            </Col>
            <Col xs={12} sm={6} md={12} lg={12} xl={12} xxl={12}>
              <Button variant="outline-dark" className="m-1"}>Xem chi
                tiết</Button>
            </Col>*/}
          </Row>
        </Container>
      </Card.Body>
    </Card>
  )
}

export default CardComponent