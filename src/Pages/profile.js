import { Tabs } from "antd";
import "../styles/profile.css";
import { CollectionIcon, BookmarkIcon } from "@heroicons/react/solid";
const { TabPane } = Tabs;

const Profile = () => {
  return (
    <div
      className='profileBody'
      style={{
        width: 716,
        height: 500,
        padding: "24px 50px 80px",
        background: "rgb(225, 235, 253)",
      }}>
      <div className='profileMain1'>
        <div className='Profile'></div>
      </div>
      <div className='profileMain2'>
        <Tabs className='tabBody' defaultActiveKey='1'>
          <TabPane
            tab={
              <span className='Tabinner'>
                <CollectionIcon className='iconBodyNav1' />
                Tab 1
              </span>
            }
            key='1'>
            All Post here
          </TabPane>
          <TabPane
            tab={
              <span className='Tabinner'>
                <BookmarkIcon className='iconBodyNav1' />
                Tab 2
              </span>
            }
            key='2'>
            Saved Post here
          </TabPane>
        </Tabs>
      </div>
    </div>
  );
};

export default Profile;
