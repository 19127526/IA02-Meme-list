import {Pagination} from "antd";
import {useEffect, useState} from "react";
import {getMemeApi} from "../../apis/MemeApi/MemeApi";
import CardComponent from "../../components/card/CardComponent";
import {Col, Container, Row} from "react-bootstrap";
import { PoweroffOutlined } from '@ant-design/icons';
import { Button, Space } from 'antd';
import Notification from "../../components/Notification/Notification";
const pageIndex = 6;

const ClickPage = () => {
  const [click, setClick] = useState(false);
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const currentIndexPage = pageIndex * page;
  const prevIndexPage = pageIndex * (page - 1);
  const [loading,setLoading]=useState(false);

  useEffect(() => {
    if (click === false) return;
    setLoading(true);
    getMemeApi().then(async data => {
      setData(data.data.memes);
      setLoading(false)
      Notification("Load data success")
    })
  }, [click]);

  return (
    <Container>
      <Row>
        <Col xs={12} sm={12} lg={12} md={12} xl={12} style={{display: "flex", justifyContent: "center"}}>
          <Button
            type="primary"
            icon={<PoweroffOutlined />}
            style={{background:"#001529",border:"solid #001529",marginTop:"10px"}}
            loading={loading}
            onClick={() => setClick(true)}
          >
            Click me!
          </Button>
        </Col>
      </Row>
      {click === true && data.length > 0 ?
        <>
          <Row>
            {data &&
              data?.map((user, index) => {
                  return prevIndexPage <= index && index < currentIndexPage ?
                    <Col xs={12} sm={12} lg={4} md={6} xl={4} key={user.id}>
                      <CardComponent name={user.name} img={user.url} id={user.id}/>
                    </Col>
                    : ""
                }
              )
            }
          </Row>
          <Row className="m-2">
            <Col xs={12} sm={12} lg={12} md={12} xl={12} style={{display: "flex", justifyContent: "center"}}>
              <Pagination
                total={data.length}
                defaultCurrent={1}
                pageSize={pageIndex}
                showTotal={(total) => `Total ${total} items`}
                onChange={(pageIndex, pageSize) => {
                  setPage(pageIndex)
                }}
              />
            </Col>
          </Row>
        </>
        : ""
      }
    </Container>
  )
}
export default ClickPage