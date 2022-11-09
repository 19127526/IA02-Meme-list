import Styles from "./Card.module.css"
import {Button, Card, Col, Container, Row} from "react-bootstrap";
import {useSpring,animated} from "@react-spring/web";
import {Image} from "antd";


const CardComponent=({name,img,id})=>{
  const styles = useSpring({
    loop: true,
    to: [
      { opacity: 1, color: '#ffaaee' },
      { opacity: 0, color: 'rgb(14,26,19)' },
    ],
    from: { opacity: 0, color: 'red' },
  })

  return(
    <Card className={Styles.card} key={id}>
      <Image.PreviewGroup>
        <Image
          style={{
            margin:"7px -2px 0px  0px",
            width: "100%",
            height: "500px",
            objectFit: "contain",
          }}
          src={img}
        />
      </Image.PreviewGroup>
      <Card.Body style={{textAlign:'center',paddingBottom:"0%"}}>
        <Card.Title style={{borderTop: "1px solid black",borderBottom: "1px solid black"}}>
          <animated.div style={styles}>{name}</animated.div>
        </Card.Title>
      </Card.Body>

    </Card>
  )
}

export default CardComponent