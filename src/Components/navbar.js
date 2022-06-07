import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Avatar, Drawer, Button, Menu } from "antd";
import {
  CogIcon,
  LightningBoltIcon,
  HomeIcon,
  ChatIcon,
  BookmarkIcon,
  UserIcon,
} from "@heroicons/react/solid";

const Navbar = () => {
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  return (
    <nav className='TopNav'>
      <ul>
        <li>
          <Button type='primary' className='btnTopNav' onClick={showDrawer}>
            <Avatar
              size={{
                xs: 28,
                sm: 30,
                md: 38,
                lg: 38,
              }}
              style={{
                color: "#f56a00",
                backgroundColor: "#fde3cf",
              }}>
              C
            </Avatar>
          </Button>
          <Drawer
            className='drawerBody'
            title='Anneki'
            placement='left'
            width={250}
            onClose={onClose}
            visible={visible}>
            <div>
              <Menu
                className='listMain'
                mode='inline'
                defaultSelectedKeys={["4"]}>
                <Menu.Item>
                  <span className='listBody'>
                    <HomeIcon className='iconsColor' />
                    <Link to='/'>Home</Link>
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
                    <Link to='profile'> Profile</Link>
                  </span>
                </Menu.Item>
                <Menu.Item>
                  <span className='listBody'>
                    <CogIcon className='iconsColor' />
                    Settings
                  </span>
                </Menu.Item>
              </Menu>
            </div>
          </Drawer>
        </li>
        <li>
          <LightningBoltIcon className='iconBodyNav1' />
        </li>
        <li>
          <Button className='btnTopNav' type='primary'>
            <CogIcon className='iconBodyNav' />
          </Button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
