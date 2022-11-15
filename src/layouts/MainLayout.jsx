import { Col, Row } from "react-bootstrap";
import { Drawer, Layout } from "antd";
import React, { useState } from "react";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import AsideComponent from "../components/aside/AsideComponent";
import RoutesPage from "../routes/Routes";
import getWindowHeight from "../utils/utils";

const { Header, Footer, Content } = Layout;

function MainLayout() {
  const [collapsed, setCollapsed] = useState(false);
  const onClose = () => {
    setCollapsed(false);
  };

  return (
    <Row xl={12} sm={12} md={12} xs={12} lg={12} xxl={12}>
      <Col xl={12} sm={12} md={12} xs={12} lg={12} xxl={12}>
        <Layout style={{ display: "flex", flex: 1 }}>
          <Drawer
            placement="left"
            closable={false}
            onClose={onClose}
            open={collapsed}
            width="300px"
            bodyStyle={{
              background: `#001529`,
              color: `#fff`
            }}
          >
            <AsideComponent onClose={onClose} />
          </Drawer>
          <Layout>
            <Row xl={12} sm={12} md={12} xs={12} lg={12} xxl={12}>
              <Col xl={12} sm={12} md={12} xs={12} lg={12} xxl={12}>
                <Header
                  className="site-layout-background"
                  style={{
                    padding: 0,
                    display: "flex",
                    justifyContent: "space-between"
                  }}
                >
                  {React.createElement(
                    collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
                    {
                      className: "trigger",
                      style: {
                        fontSize: "21px",
                        margin: "20px",
                        color: "white"
                      },
                      onClick: () => setCollapsed(!collapsed)
                    }
                  )}
                </Header>
                <Content style={{ minHeight: getWindowHeight().innerHeight }}>
                  <RoutesPage />
                </Content>
                <Footer
                  style={{
                    background: "#001529",
                    color: "#fff",
                    display: "flex",
                    justifyContent: "space-around"
                  }}
                >
                  Design By Wan
                </Footer>
              </Col>
            </Row>
          </Layout>
        </Layout>
      </Col>
    </Row>
  );
}

export default MainLayout;
