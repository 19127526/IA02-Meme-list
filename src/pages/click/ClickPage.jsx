import { Pagination, Button } from "antd";
import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { PoweroffOutlined } from "@ant-design/icons";
import CardComponent from "../../components/card/CardComponent";

import { getMemeApi } from "../../apis/MemeApi/MemeApi";
import Notification from "../../components/Notification/Notification";

const pageIndex = 6;

function ClickPage() {
  const [click, setClick] = useState(false);
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const currentIndexPage = pageIndex * page;
  const prevIndexPage = pageIndex * (page - 1);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getMemeApi().then(async (index) => {
      setData(index.data.memes);
      setLoading(false);
      Notification("Load data success");
    });
  }, [click]);

  return (
    <Container>
      <Row>
        <Col
          xs={12}
          sm={12}
          lg={12}
          md={12}
          xl={12}
          style={{ display: "flex", justifyContent: "center" }}
        >
          <Button
            type="primary"
            icon={<PoweroffOutlined />}
            style={{
              background: "#001529",
              border: "solid #001529",
              marginTop: "10px",
            }}
            loading={loading}
            onClick={() => {
              setClick(!click);
              setData([]);
            }}
          >
            Click me!
          </Button>
        </Col>
      </Row>
      {data.length > 0 ? (
        <>
          <Row>
            {data &&
              data?.map((user, index) => {
                return prevIndexPage <= index && index < currentIndexPage ? (
                  <Col xs={12} sm={12} lg={4} md={6} xl={4} key={user.id}>
                    <CardComponent
                      name={user.name}
                      img={user.url}
                      id={user.id}
                    />
                  </Col>
                ) : (
                  ""
                );
              })}
          </Row>
          <Row className="m-2">
            <Col
              xs={12}
              sm={12}
              lg={12}
              md={12}
              xl={12}
              style={{ display: "flex", justifyContent: "center" }}
            >
              <Pagination
                total={data.length}
                defaultCurrent={1}
                pageSize={pageIndex}
                showTotal={(total) => `Total ${total} items`}
                onChange={(index) => {
                  setPage(index);
                }}
              />
            </Col>
          </Row>
        </>
      ) : (
        ""
      )}
    </Container>
  );
}
export default ClickPage;
