import React, { useState } from "react";
import { Avatar, Drawer, Button } from "antd";
import { CogIcon, LightningBoltIcon } from "@heroicons/react/solid";
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
            title='Anneki'
            placement='left'
            width={250}
            onClose={onClose}
            visible={visible}>
            <p>Some contents...</p>
            <p>Some contents...</p>
            <p>Some contents...</p>
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
