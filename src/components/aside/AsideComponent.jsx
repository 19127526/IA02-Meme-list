import { useNavigate } from "react-router-dom";
import Container from "react-bootstrap/Container";
import { Col, Row } from "react-bootstrap";
import { FormOutlined, EditOutlined, HomeOutlined } from "@ant-design/icons";
import { Menu } from "antd";
import React from "react";

const getItem = (label, key, icon, children, type) => {
  return {
    key,
    icon,
    children,
    label,
    type
  };
};

function AsideComponent({ onClose }) {
  const navigate = useNavigate();
  const setNavigate = (link) => {
    onClose();
    navigate(link);
  };
  return (
    <Container xl={12} sm={12} md={12} xs={12} lg={12} xxl={12}>
      <Row>
        <Col xl={12} sm={12} md={12} xs={12} lg={12} xxl={12}>
          <div
            className="logo m-2 mt-2"
            style={{ display: "flex", justifyContent: "center" }}
          >
            <HomeOutlined
              style={{
                fontSize: "56px"
              }}
              onClick={() => setNavigate("")}
            />
          </div>
        </Col>
        <Col xl={12} sm={12} md={12} xs={12} lg={12} xxl={12}>
          <Menu
            mode="inline"
            theme="dark"
            defaultSelectedKeys={["1"]}
            items={[
              getItem(
                // eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions
                <div onClick={() => setNavigate("/home")}>Home</div>,
                "2",
                <HomeOutlined onClick={() => setNavigate("/search")} />
              ),
              getItem(
                // eslint-disable-next-line jsx-a11y/no-static-element-interactions,jsx-a11y/click-events-have-key-events
                <div onClick={() => setNavigate("/click")}>CLick</div>,
                "3",
                <EditOutlined onClick={() => setNavigate("/search")} />
              ),
              getItem(
                // eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions
                <div onClick={() => setNavigate("/form")}>Form</div>,
                "4",
                <FormOutlined onClick={() => setNavigate("/form")} />
              )
            ]}
          />
        </Col>
      </Row>
    </Container>
  );
}
export default AsideComponent;
