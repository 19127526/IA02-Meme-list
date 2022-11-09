import { Pagination} from "antd";
import {useEffect, useLayoutEffect, useState} from "react";
import {getMemeApi} from "../../apis/MemeApi/MemeApi";
import CardComponent from "../../components/card/CardComponent";
import {Col, Container, Row} from "react-bootstrap";

const pageIndex = 6;

const ClickPage = () => {
  const [click, setClick] = useState(false);
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const currentIndexPage = pageIndex * page;
  const prevIndexPage = pageIndex * (page - 1);
  useEffect(() => {
    if (click === false) return;
    getMemeApi().then(async data => {
      setData(data.data.memes)
    })
  }, [click]);
  return (
    <Container>
      <Row>
        <Col xs={12} sm={12} lg={12} md={12} xl={12} style={{display: "flex", justifyContent: "center"}}>
          <button type="primary" onClick={() => setClick(true)}>
            Click me
          </button>
        </Col>
      </Row>
      {click === true &&data.length>0?
        <>
          <Row>
            {data &&
              data?.map((user, index) => {
                  return prevIndexPage <= index && index < currentIndexPage ?
                    <Col xs={12} sm={12} lg={4} md={6} xl={4}>
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