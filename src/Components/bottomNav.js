import { Link } from "react-router-dom";
import {
  BellIcon,
  CubeIcon,
  HomeIcon,
  MailIcon,
  SearchIcon,
} from "@heroicons/react/solid";
const BottomNavigation = () => {
  return (
    <nav className='bottomNav'>
      <ul>
        <li>
          <Link to='/'>
            <HomeIcon className='iconBodyNav' />
          </Link>
        </li>
        <li>
          <Link to='/'>
            <SearchIcon className='iconBodyNav' />
          </Link>
        </li>
        <li>
          <Link to=''>
            <CubeIcon className='iconBodyNav' />
          </Link>
        </li>
        <li>
          <Link to=''>
            <BellIcon className='iconBodyNav' />
          </Link>
        </li>
        <li>
          <Link to=''>
            <MailIcon className='iconBodyNav' />
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default BottomNavigation;
