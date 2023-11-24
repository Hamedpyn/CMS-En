import { Sidebar } from 'flowbite-react';
import { GoHome } from "react-icons/go";
import { IoAnalyticsSharp } from "react-icons/io5";
import { MdPointOfSale } from "react-icons/md";
import { MdManageSearch } from "react-icons/md";
import { RiUserLine } from "react-icons/ri";
import { MdAttachMoney } from "react-icons/md";
import { MdOutlineBarChart } from "react-icons/md";
import { VscFeedback } from "react-icons/vsc";
import { IoMailOutline } from "react-icons/io5";
import { RiUserAddLine } from "react-icons/ri";
import { FaRegMessage } from "react-icons/fa6";
import { MdProductionQuantityLimits } from "react-icons/md";
import { MdError } from "react-icons/md";
import { Link } from 'react-router-dom';

export default function SideBar() {
  return (
    <Sidebar className='fixed !left-[108px] !top-[90px] h-auto' aria-label="Sidebar with content separator example">
      <Sidebar.Items className='pt-[15px]'>
        <Sidebar.ItemGroup className='relative !pt-3'>
          <h3 className='absolute left-0 top-[-10px] text-gray-400 text-sm'>Dashboard</h3>
          <Link to={"/"}>
            <Sidebar.Item className="cursor-pointer mb-[-3px] gap-x-3 text-start" icon={GoHome}>
              Home
            </Sidebar.Item>
          </Link>
          <Link to={"/Analytics"}>
            <Sidebar.Item className="cursor-pointer relative mb-[-3px] gap-x-3 text-start" icon={IoAnalyticsSharp}>
              Analytics
            </Sidebar.Item>
          </Link>
          <Link to={"/Sales"}>
          <Sidebar.Item className="cursor-pointer relative mb-[-13px] gap-x-3 text-start" icon={MdPointOfSale}>
            Sales
          </Sidebar.Item>
          </Link>
        </Sidebar.ItemGroup>

        <Sidebar.ItemGroup className='relative pt-6'>
          <h3 className='absolute left-0 top-[3px] z-50 text-gray-400 text-sm mb-4'>Quick Menu</h3>
          <Link to={"/Users"} >

            <Sidebar.Item className="cursor-pointer relative mb-[-3px] gap-x-3 text-start" icon={RiUserLine}>
              Users
            </Sidebar.Item>
          </Link>

          <Link to={"/NewUsers"}>
            <Sidebar.Item className="cursor-pointer relative mb-[-3px] gap-x-3 text-start" icon={RiUserAddLine}>
              New User
            </Sidebar.Item>
          </Link>
          <Link to={"/Products"}>
            <Sidebar.Item className="cursor-pointer relative mb-[-3px] gap-x-3 text-start" icon={MdProductionQuantityLimits}>
              Products
            </Sidebar.Item>
          </Link>
          <Link to={"/TransActions"}>
          <Sidebar.Item className="cursor-pointer relative mb-[-3px] gap-x-3 text-start" icon={MdAttachMoney}>
            Transactions
          </Sidebar.Item>
          </Link>
          <Link to={"/Reports"}>
          <Sidebar.Item className="cursor-pointer relative mb-[-13px] gap-x-3 text-start" icon={MdOutlineBarChart}>
            Reports
          </Sidebar.Item>
          </Link>
        </Sidebar.ItemGroup>
        <Sidebar.ItemGroup className='relative pt-6'>
          <h3 className='absolute left-0 top-[3px] text-gray-400 text-sm mb-4'>Notifications</h3>
          <Link to={"/Mail"}>
          <Sidebar.Item className="cursor-pointer relative mb-[-3px] gap-x-3 text-start" icon={IoMailOutline}>
            Mail
          </Sidebar.Item>
          </Link>
          <Link to={"/FeedBack"}>
          <Sidebar.Item className="cursor-pointer relative mb-[-3px] gap-x-3 text-start" icon={VscFeedback}>
            FeedBack
          </Sidebar.Item>
          </Link>
          <Link to={"/Messages"}>
          <Sidebar.Item className="cursor-pointer relative mb-[-13px] gap-x-3 text-start" icon={FaRegMessage}>
            Messages
          </Sidebar.Item>
          </Link>
        </Sidebar.ItemGroup>
        <Sidebar.ItemGroup className='relative pt-6'>
          <h3 className='absolute left-0 top-[3px] text-gray-400 text-sm mb-4'>Staff</h3>
          <Link to={"/Manage"}>
          <Sidebar.Item className="cursor-pointer relative mb-[-5px] gap-x-3 text-start" icon={MdManageSearch}>
            Manage

          </Sidebar.Item>
          </Link>
          <Link to={"/Analytics"}>
          <Sidebar.Item className="cursor-pointer relative mb-[-5px] gap-x-3 text-start" icon={IoAnalyticsSharp}>
            Analytics
          </Sidebar.Item>
          </Link>
          <Link to={"/Reports"}>
          <Sidebar.Item className="cursor-pointer relative mb-[-5px] gap-x-3 text-start" icon={MdError}>
            Reports
          </Sidebar.Item>
          </Link>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  );
}