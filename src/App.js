import React from "react";
import "./App.css";
import "antd/dist/antd.min.css";
import { Avatar } from "antd";
import LeftSidebar from "./Components/leftSidebar";
import Rightsidebar from "./Components/rightSidebar";
import { AntDesignOutlined } from "@ant-design/icons";
import { Layout, Divider } from "antd";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/solid";
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
              padding: "4px 30px",
              height: 120,
              gap: "31px",
              width: 715,
              justifyContent: "space-around",
              display: "flex",
              alignItems: "center",
              background: "#E1EBFD",
            }}>
            <span className='iconCaurselBody'>
              {" "}
              <ChevronLeftIcon className='iconsColorCaurosel' />{" "}
            </span>
            <ul className='caurosel'>
              <li className='items'>
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
              </li>
              <li className='items'>
                {" "}
                <span className='storyProfile'>
                  <Avatar
                    style={{
                      border: "#7a39a3 3px solid",
                    }}
                    size={64}
                    icon={<AntDesignOutlined />}
                  />
                  <h2> Luffy</h2>
                </span>
              </li>
              <li className='items'>
                <span className='storyProfile'>
                  <Avatar
                    style={{
                      border: "#7a39a3 3px solid",
                    }}
                    size={64}
                    icon={<AntDesignOutlined />}
                  />
                  <h2> Sanji</h2>
                </span>
              </li>
              <li className='items'>
                {" "}
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
              </li>
              <li className='items'>
                {" "}
                <span className='storyProfile'>
                  <Avatar
                    style={{
                      border: "#7a39a3 3px solid",
                    }}
                    size={64}
                    icon={<AntDesignOutlined />}
                  />
                  <h2> Zoro</h2>
                </span>
              </li>
              <li className='items'>
                {" "}
                <span className='storyProfile'>
                  <Avatar
                    style={{
                      border: "#7a39a3 3px solid",
                    }}
                    size={64}
                    icon={<AntDesignOutlined />}
                  />
                  <h2>Shanks</h2>
                </span>
              </li>
              <li className='items'>
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
              </li>
              <li className='items'>
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
              </li>
            </ul>
            <span className='iconCaurselBody'>
              <ChevronRightIcon className='iconsColorCaurosel' />
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
