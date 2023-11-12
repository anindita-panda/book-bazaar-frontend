import { Sidebar } from 'flowbite-react';
import { HiArrowSmRight, HiChartPie, HiInbox, HiOutlineCloudUpload, HiShoppingBag, HiTable, HiUser, HiViewBoards } from 'react-icons/hi';
import { BiBuoy } from 'react-icons/bi';
import userImg from '../assets/profile.jpg'
import { AuthContext } from '../context/AuthProvider';
import { useContext } from 'react';

const SideBar = () => {

  const {user} = useContext(AuthContext);
  console.log(user);

  return (
    <Sidebar aria-label="Sidebar with content separator example">
        <Sidebar.Logo
        href="/"
        img={user?.photoURL || userImg}
        imgAlt="Anindita Panda"
        className='w-16 h-16'
      >
        <p>
          {
            user?.displayName || "Demo User"
          }
        </p>
      </Sidebar.Logo>

      <Sidebar.Items>
        <Sidebar.ItemGroup>
          <Sidebar.Item
            href="/admin/dashboard"
            icon={HiChartPie}
            >
            <p>
              Dashboard
            </p>
          </Sidebar.Item>
          <Sidebar.Item
            href="/admin/dashboard/upload"
            icon={HiOutlineCloudUpload}
          >
            <p>
              Upload Books
            </p>
          </Sidebar.Item>
          <Sidebar.Item
            href="/admin/dashboard/manage"
            icon={HiInbox}
          >
            <p>
              Manage Books
            </p>
          </Sidebar.Item>
          <Sidebar.Item
            href="#"
            icon={HiUser}
          >
            <p>
              Users
            </p>
          </Sidebar.Item>
          <Sidebar.Item
            href="#"
            icon={HiShoppingBag}
          >
            <p>
              Products
            </p>
          </Sidebar.Item>
          <Sidebar.Item
            href="/login"
            icon={HiArrowSmRight}
          >
            <p>
              Sign In
            </p>
          </Sidebar.Item>
          <Sidebar.Item
            href="/logout"
            icon={HiTable}
          >
            <p>
              Log Out 
            </p>
          </Sidebar.Item>
        </Sidebar.ItemGroup>
        <Sidebar.ItemGroup>
          <Sidebar.Item
            href="#"
            icon={HiChartPie}
          >
            <p>
              Upgrade to Pro
            </p>
          </Sidebar.Item>
          <Sidebar.Item
            href="#"
            icon={HiViewBoards}
          >
            <p>
              Documentation
            </p>
          </Sidebar.Item>
          <Sidebar.Item
            href="#"
            icon={BiBuoy}
          >
            <p>
              Help
            </p>
          </Sidebar.Item>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  )
}

export default SideBar