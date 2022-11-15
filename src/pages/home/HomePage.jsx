import { useQuery } from "react-query";
import { Alert, Empty, Pagination, Spin } from "antd";
import { Col, Container, Row } from "react-bootstrap";
import React, { useState } from "react";
import getWindowHeight from "../../utils/utils";
import CardComponent from "../../components/card/CardComponent";
import { getMemeApi } from "../../apis/MemeApi/MemeApi";

const pageIndex = 6;

function HomePage() {
  const { data, error, isLoading } = useQuery("meme", getMemeApi, {
    cacheTime: Infinity,
    refetchOnWindowFocus: false
  });
  const [page, setPage] = useState(1);
  const currentIndexPage = pageIndex * page;
  const prevIndexPage = pageIndex * (page - 1);

  if (error)
    return <Empty style={{ minHeight: getWindowHeight().innerHeight }} />;
  if (isLoading)
    return (
      <Spin
        tip="Loading..."
        style={{ minHeight: getWindowHeight().innerHeight }}
      >
        <Alert
          message="Alert message title"
          description="Further details about the context of this alert."
          type="info"
        />
      </Spin>
    );
  return (
    <Container>
      <Row>
        {data.data.memes &&
          data.data.memes?.map((user, index) => {
            return prevIndexPage <= index && index < currentIndexPage ? (
              <Col xs={12} sm={12} lg={4} md={6} xl={4}>
                <CardComponent name={user.name} img={user.url} id={user.id} />
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
            total={data.data.memes.length}
            defaultCurrent={1}
            pageSize={pageIndex}
            showTotal={(total) => `Total ${total} items`}
            onChange={(pageindex) => {
              setPage(pageindex);
            }}
          />
        </Col>
      </Row>
    </Container>
  );
}

export default HomePage;
