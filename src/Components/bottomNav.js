import {
  BellIcon,
  CollectionIcon,
  HomeIcon,
  MailIcon,
  SearchIcon,
} from "@heroicons/react/solid";
const BottomNavigation = () => {
  return (
    <nav className='bottomNav'>
      <ul>
        <li>
          <HomeIcon className='iconBodyNav' />
        </li>
        <li>
          <SearchIcon className='iconBodyNav' />
        </li>
        <li>
          <CollectionIcon className='iconBodyNav' />
        </li>
        <li>
          <BellIcon className='iconBodyNav' />
        </li>
        <li>
          <MailIcon className='iconBodyNav' />
        </li>
      </ul>
    </nav>
  );
};

export default BottomNavigation;
