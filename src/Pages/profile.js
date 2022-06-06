import { Tabs, Avatar, Image, Button } from "antd";
import "../styles/profile.css";
import { CollectionIcon, BookmarkIcon } from "@heroicons/react/solid";
import pics1 from "../Images/pics1.jpg";
import pics2 from "../Images/pic2.jpg";
import pics3 from "../Images/pic3.jpg";
import pics4 from "../Images/pic4.jpg";
import pics5 from "../Images/pic5.jpg";
import pics6 from "../Images/instaPic.jpg";

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
        <div className='Profile'>
          <div className='profile1'>
            <Avatar
              size={160}
              src={
                <Image
                  src='https://joeschmoe.io/api/v1/random'
                  style={{
                    width: "100%",
                  }}
                />
              }
            />
          </div>

          <div className='profile2'>
            <div className=' profile_User'>
              <p> Captain_Shanks</p>
              <Button type='primary'> Edit Profile</Button>
            </div>
            <div className='profile_Sub'>
              <ul>
                <li>14 Post</li>
                <li> 203 Followers</li>
                <li> 500 Following</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className='profileMain2'>
        <Tabs className='tabBody' defaultActiveKey='1'>
          <TabPane
            tab={
              <span className='Tabinner'>
                <CollectionIcon className='iconBodyNav1' />
                Posts
              </span>
            }
            key='1'>
            <div className='postBody'>
              <Image className='imageBody' src={pics1} alt='photo' />
              <Image className='imageBody' src={pics2} alt='photo' />
              <Image className='imageBody' src={pics3} alt='photo' />
              <Image className='imageBody' src={pics4} alt='photo' />
              <Image className='imageBody' src={pics5} alt='photo' />
              <Image className='imageBody' src={pics6} alt='photo' />
            </div>
          </TabPane>
          <TabPane
            tab={
              <span className='Tabinner'>
                <BookmarkIcon className='iconBodyNav1' />
                Saved Posts
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
