import React from "react";
import "antd/dist/antd.min.css";
import { Avatar } from "antd";
import { Layout, Menu, Dropdown, Space } from "antd";
import { Button } from "antd";
import {
  HomeIcon,
  ChatIcon,
  BookmarkIcon,
  CogIcon,
  UserIcon,
  LightningBoltIcon,
  DotsHorizontalIcon,
} from "@heroicons/react/solid";
const { Sider } = Layout;

const LeftSidebar = () => {
  return (
    <div className='body'>
      <Sider
        className='sidebody'
        style={{
          overflow: "auto",
          height: "100vh",
          position: "fixed",
          left: 0,
          top: 0,
          padding: "10px 40px",
          bottom: 0,
        }}
        breakpoint='lg'
        collapsedWidth='0'
        onBreakpoint={(broken) => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}>
        <div
          className='LogoBody'
          style={{
            display: "flex",
            height: 100,
            justifyContent: "center",
            alignItems: "center",
          }}>
          <LightningBoltIcon className='iconsColor3' />
          <h1>Anneki</h1>
        </div>
        <Menu className='listMain' mode='inline' defaultSelectedKeys={["4"]}>
          <Menu.Item>
            <span className='listBody'>
              <HomeIcon className='iconsColor' />
              Home
            </span>
          </Menu.Item>
          <Menu.Item>
            <span className='listBody'>
              <ChatIcon className='iconsColor' />
              Messages
            </span>
          </Menu.Item>

          <Menu.Item>
            <span className='listBody'>
              <BookmarkIcon className='iconsColor' />
              Save Post
            </span>
          </Menu.Item>
          <Menu.Item>
            <span className='listBody'>
              <UserIcon className='iconsColor' />
              Profile
            </span>
          </Menu.Item>
          <Menu.Item>
            <span className='listBody'>
              <CogIcon className='iconsColor' />
              Settings
            </span>
          </Menu.Item>
        </Menu>

        <Menu className='listMain1 ' mode='inline' defaultSelectedKeys={["4"]}>
          <Button className='btnTweet' type='primary'>
            {" "}
            Tweet
          </Button>

          <Dropdown
            className='dropdownBody'
            overlay={
              <Menu>
                <Menu.Item key='0'>Log Out</Menu.Item>
              </Menu>
            }
            trigger={["click"]}>
            <a onClick={(e) => e.preventDefault()}>
              <Avatar
                size={44}
                style={{ color: "#f56a00", backgroundColor: "#fde3cf" }}>
                {" "}
                C
              </Avatar>
              <Space>Clemon</Space>
              <DotsHorizontalIcon className=' dropdownIcon' />
            </a>
          </Dropdown>
        </Menu>
      </Sider>
    </div>
  );
};

export default LeftSidebar;
