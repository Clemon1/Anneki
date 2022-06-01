import React from "react";
import "./App.css";
import "antd/dist/antd.min.css";
import { Avatar, Button } from "antd";
import LeftSidebar from "./Components/leftSidebar";
import Rightsidebar from "./Components/rightSidebar";
import { AntDesignOutlined } from "@ant-design/icons";
import { Layout, Divider } from "antd";
import instaimage from "../src/Images/instaPic.jpg";
import {
  AnnotationIcon,
  BookmarkIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  DotsHorizontalIcon,
  SwitchHorizontalIcon,
  ThumbUpIcon,
} from "@heroicons/react/solid";
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
              width: 697,
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
                    size={64}
                    style={{
                      border: "#7a39a3 3px solid",
                      color: "#f56a00",
                      backgroundColor: "#fde3cf",
                    }}>
                    C
                  </Avatar>
                  <h2> Clemon</h2>
                </span>
              </li>
              <li className='items'>
                {" "}
                <span className='storyProfile'>
                  <Avatar
                    size={64}
                    style={{
                      border: "#7a39a3 3px solid",
                      color: "#f56a00",
                      backgroundColor: "#fde3cf",
                    }}>
                    L
                  </Avatar>
                  <h2> Luffy</h2>
                </span>
              </li>
              <li className='items'>
                <span className='storyProfile'>
                  <Avatar
                    size={64}
                    style={{
                      border: "#7a39a3 3px solid",
                      color: "#f56a00",
                      backgroundColor: "#fde3cf",
                    }}>
                    S
                  </Avatar>
                  <h2> Sanji</h2>
                </span>
              </li>
              <li className='items'>
                {" "}
                <span className='storyProfile'>
                  <Avatar
                    size={64}
                    style={{
                      border: "#7a39a3 3px solid",
                      color: "#f56a00",
                      backgroundColor: "#fde3cf",
                    }}>
                    LA
                  </Avatar>
                  <h2> Lylla</h2>
                </span>
              </li>
              <li className='items'>
                {" "}
                <span className='storyProfile'>
                  <Avatar
                    size={64}
                    style={{
                      border: "#7a39a3 3px solid",
                      color: "#f56a00",
                      backgroundColor: "#fde3cf",
                    }}>
                    Z
                  </Avatar>
                  <h2> Zoro</h2>
                </span>
              </li>
              <li className='items'>
                {" "}
                <span className='storyProfile'>
                  <Avatar
                    size={64}
                    style={{
                      border: "#7a39a3 3px solid",
                      color: "#f56a00",
                      backgroundColor: "#fde3cf",
                    }}>
                    SK
                  </Avatar>
                  <h2>Shanks</h2>
                </span>
              </li>
              <li className='items'>
                <span className='storyProfile'>
                  <Avatar
                    size={64}
                    style={{
                      border: "#7a39a3 3px solid",
                      color: "#f56a00",
                      backgroundColor: "#fde3cf",
                    }}>
                    OD
                  </Avatar>
                  <h2> Odera</h2>
                </span>
              </li>
              <li className='items'>
                <span className='storyProfile'>
                  <Avatar
                    size={64}
                    style={{
                      border: "#7a39a3 3px solid",
                      color: "#f56a00",
                      backgroundColor: "#fde3cf",
                    }}>
                    KC
                  </Avatar>
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
                minHeight: "fit-content",
              }}>
              <div
                className=''
                style={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                  alignContent: "center",
                  height: "fit content",
                }}>
                <div
                  className='CardBody'
                  style={{
                    width: 550,
                    background: "#ffffff",
                  }}>
                  <div className='CardTop'>
                    <div className='Top1'>
                      <Avatar
                        size={40}
                        style={{
                          color: "#f56a00",
                          backgroundColor: "#fde3cf",
                        }}>
                        {" "}
                        C
                      </Avatar>

                      <p> Captain_Shanks</p>
                    </div>
                    <div className='Top2'>
                      <Button className='btnCard' type='primary'>
                        <DotsHorizontalIcon className='dropdownIconCard' />
                      </Button>
                    </div>
                  </div>
                  <Divider className='CardDivider' />
                  <div className='CardImg'>
                    <img
                      className='imgCard'
                      src={instaimage}
                      alt='instaimage'
                    />
                  </div>
                  <div className='CardContent'>
                    <div className='Content1'>
                      <div className='Content1A'>
                        <Button className='btnCard' type='primary'>
                          <ThumbUpIcon className='btnIconCard' />
                        </Button>
                        <Button className='btnCard' type='primary'>
                          <AnnotationIcon className='btnIconCard' />
                        </Button>
                        <Button className='btnCard' type='primary'>
                          <SwitchHorizontalIcon className='btnIconCard' />
                        </Button>
                      </div>
                      <div className='Content1B'>
                        <Button className='btnCard' type='primary'>
                          <BookmarkIcon className='btnIconCard' />
                        </Button>
                      </div>
                    </div>
                    <div className='Content2'>
                      <ul>
                        <li className='Content2A'>1000 likes</li>
                        <li className='Content2B'>
                          Captain_Shanks
                          <span>
                            <p>
                              Taking a photo shoot, elements must have an alt
                              prop, either with meaningful text, or an empty
                              string for decorative images...
                            </p>
                          </span>
                        </li>
                        <li className='Content2C'> View all 296 comments</li>
                        <li className='Content2D'> 1 HOUR AGO</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Content>
        </Layout>
        <Rightsidebar />
      </Layout>
    </div>
  );
}

export default App;
