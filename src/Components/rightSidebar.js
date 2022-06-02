import React from "react";

import "antd/dist/antd.min.css";
import { Avatar } from "antd";

import { AntDesignOutlined } from "@ant-design/icons";
import { Layout } from "antd";
import { Button, Tooltip } from "antd";
import { BellIcon, SearchIcon } from "@heroicons/react/solid";
const { Sider } = Layout;

const Rightsidebar = () => {
  return (
    <div className='rightSidebar'>
      <Sider
        breakpoint='lg'
        collapsedWidth='1'
        onBreakpoint={(broken) => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}
        className='sidebody1'
        style={{
          overflow: "auto",
          height: "100vh",
          position: "fixed",
          top: 0,
          right: 0,
          bottom: 0,
        }}>
        <div className='menuMain2'>
          <div className='menu1'>
            <div className='inputBody'>
              <SearchIcon className='iconsColor1' />
              <input className='search' type='text' />
            </div>

            <Tooltip title='notification'>
              <Button
                className='btnBody'
                type='primary'
                shape='circle'
                size='large'>
                <BellIcon />
              </Button>
            </Tooltip>
          </div>
          <div className='menu2'>
            <div className='menuList'>
              <p className='p1'> Suggestions for you</p>
              <p className='p2'> See All</p>
            </div>

            <ul>
              <li>
                <span className='usersAvater'>
                  <Avatar
                    style={{
                      border: "#ffffff 2px solid",
                    }}
                    size={44}
                    icon={<AntDesignOutlined />}
                  />
                  <div className='userBody'>
                    <p className='p3'>Clemon Ezeh</p>
                    <p className='p4'> @Captain_Shanks</p>
                  </div>
                </span>

                <span>
                  <Button type='primary' className='btnFollow1'>
                    Follow
                  </Button>
                </span>
              </li>
              <li>
                <span className='usersAvater'>
                  <Avatar
                    style={{
                      border: "#ffffff 2px solid",
                    }}
                    size={44}
                    icon={<AntDesignOutlined />}
                  />
                  <div className='userBody'>
                    <p className='p3'>Jennifer Akazu</p>
                    <p className='p4'> @JennyLinks</p>
                  </div>
                </span>

                <span>
                  <Button type='primary' className='btnFollow'>
                    Following
                  </Button>
                </span>
              </li>
            </ul>
          </div>
          <div className=''>
            <p>Latest Post Activity</p>
          </div>
        </div>
      </Sider>
    </div>
  );
};

export default Rightsidebar;
