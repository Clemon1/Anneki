import React from "react";
import "./App.css";
import "antd/dist/antd.min.css";
import { Avatar } from "antd";
import LeftSidebar from "./Components/leftSidebar";
import Rightsidebar from "./Components/rightSidebar";
import { AntDesignOutlined } from "@ant-design/icons";
import { Layout, Divider } from "antd";
const { Header, Content } = Layout;

function App() {
  return (
    <div className='App'>
      <Layout>
        <LeftSidebar />
        <Layout
          className='site-layout '
          style={{
            marginLeft: 300,
          }}>
          <Header
            className='site-layout-sub-header-background'
            style={{
              padding: "10px 40px",
              height: 125,
              gap: "10px",
              width: 715,
              justifyContent: "flex-start",
              display: "flex",
              alignItems: "center",
              background: "#E1EBFD",
            }}>
            <span className='storyProfile'>
              <Avatar
                style={{
                  border: "#7a39a3 3px solid",
                }}
                size={64}
                icon={<AntDesignOutlined />}
              />
              <h2> Clemon</h2>
            </span>
            <span className='storyProfile'>
              <Avatar
                style={{
                  border: "#7a39a3 3px solid",
                }}
                size={64}
                icon={<AntDesignOutlined />}
              />
              <h2> Thompson</h2>
            </span>
            <span className='storyProfile'>
              <Avatar
                style={{
                  border: "#7a39a3 3px solid",
                }}
                size={64}
                icon={<AntDesignOutlined />}
              />
              <h2> Baman</h2>
            </span>
            <span className='storyProfile'>
              <Avatar
                style={{
                  border: "#7a39a3 3px solid",
                }}
                size={64}
                icon={<AntDesignOutlined />}
              />
              <h2> Lylla</h2>
            </span>
            <span className='storyProfile'>
              <Avatar
                style={{
                  border: "#7a39a3 3px solid",
                }}
                size={64}
                icon={<AntDesignOutlined />}
              />
              <h2> Odera</h2>
            </span>
            <span className='storyProfile'>
              <Avatar
                style={{
                  border: "#7a39a3 3px solid",
                }}
                size={64}
                icon={<AntDesignOutlined />}
              />
              <h2> KC Unive..</h2>
            </span>
          </Header>
          <Divider
            style={{
              margin: "0px 0px ",
              background: "#ffffff",
            }}
          />
          <Content
            className='contentBody'
            style={{
              margin: "0px 0px 0",
              background: "#E1EBFD",
            }}>
            <div
              className='site-layout-background'
              style={{
                padding: 24,
                minHeight: 500,
              }}>
              content
            </div>
          </Content>
        </Layout>
        <Rightsidebar />
      </Layout>
    </div>
  );
}

export default App;
