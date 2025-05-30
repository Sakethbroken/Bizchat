import '../sidebar.css'; 
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar'; 
import impaaslogo from "../assets/impaaslogo.png"; 
import brandman from "../assets/icons/brandman.png";
import productman from "../assets/icons/productman.png";
import bizchat from "../assets/icons/bizchat.png";
import businessman from "../assets/icons/businessman.png";
import channelman from "../assets/icons/channelman.png";
import chargeman from "../assets/icons/chargeman.png";
import dashboardman from "../assets/icons/dashboardman.png";
import financeman from "../assets/icons/financeman.png";
import leaseman from "../assets/icons/leaseman.png";
import fleetman from "../assets/icons/fleetman.png";
import insuranceman from "../assets/icons/insuranceman.png";
import showroomman from "../assets/icons/showroomman.png";
import stockman from "../assets/icons/stockman.png";
import swapman from "../assets/icons/swapman.png";
import purchaseman from "../assets/icons/purchaseman.png"
import editname from "../assets/icons/editname.png"

const dropdownItems = (
  <>
    <MenuItem>Latest feed</MenuItem>
    <MenuItem>Bizchat profile</MenuItem>
    <MenuItem>Saved posts</MenuItem>
  </>
);

export default function SidebarMenu() {
  return (
    <Sidebar
      backgroundColor="#962210"
      width="320px"
      className="h-screen overflow-y-auto fixed top-0 left-0 z-10 text-white"
      rootStyles={{
        '.ps-submenu-content': {
          backgroundColor: '#7B1A0B',
        },
        '.ps-menu-button:hover': {
          backgroundColor: '#A52514 !important',
          color: '#fff !important',
        },
        '.ps-menu-button': {
          color: '#fff',
          transition: 'all 0.2s ease',
        },
        '.ps-menuitem-root.ps-active > .ps-menu-button': {
          backgroundColor: '#000 !important',
          color: '#fff !important',
        },
      }}
    >
      {/* Logo */}
      <div className="p-4">
        <img src={impaaslogo} alt="Impaas Logo" className="w-fit h-fit" />
      </div>
      
      {/* Menu */}
      <Menu className="pl-3">
        <MenuItem>
          <div className="flex items-center gap-2">
            <img src={dashboardman} alt="dashboard icon" className="w-5 h-5" />
            Dashboard and Analytics
          </div>
        </MenuItem>
        
        <SubMenu 
          label={
            <div className="flex items-center gap-2">
              <img src={bizchat} alt="bizchat icon" className="w-5 h-5" />
              Bizchat
            </div>
          }
        >
          {dropdownItems}
        </SubMenu>
        
        <SubMenu 
          label={
            <div className="flex items-center gap-2">
              <img src={businessman} alt="opportunities icon" className="w-5 h-5" />
              Business Opportunities
            </div>
          }
        >
          {dropdownItems}
        </SubMenu>
        
        <SubMenu 
          label={
            <div className="flex items-center gap-2">
              <img src={brandman} alt="brand icon" className="w-5 h-5" />
              Brand management
            </div>
          }
        >
          {dropdownItems}
        </SubMenu>
        
        <SubMenu 
          label={
            <div className="flex items-center gap-2">
              <img src={productman} alt="product icon" className="w-5 h-5" />
              Product management
            </div>
          }
        >
          {dropdownItems}
        </SubMenu>
        
        <SubMenu 
          label={
            <div className="flex items-center gap-2">
              <img src={channelman} alt="channel icon" className="w-5 h-5" />
              Channel management
            </div>
          }
        >
          {dropdownItems}
        </SubMenu>
        
        <SubMenu 
          label={
            <div className="flex items-center gap-2">
              <img src={purchaseman} alt="purchase icon" className="w-5 h-5" />
              Purchase management
            </div>
          }
        >
          {dropdownItems}
        </SubMenu>
        
        <SubMenu 
          label={
            <div className="flex items-center gap-2">
              <img src={businessman} alt="sales icon" className="w-5 h-5" />
              Sales management
            </div>
          }
        >
          {dropdownItems}
        </SubMenu>
        
        <SubMenu 
          label={
            <div className="flex items-center gap-2">
              <img src={chargeman} alt="charge icon" className="w-5 h-5" />
              Charge management
            </div>
          }
        >
          {dropdownItems}
        </SubMenu>
        
        <SubMenu 
          label={
            <div className="flex items-center gap-2">
              <img src={showroomman} alt="showroom icon" className="w-5 h-5" />
              Showroom management
            </div>
          }
        >
          {dropdownItems}
        </SubMenu>
        
        <SubMenu 
          label={
            <div className="flex items-center gap-2">
              <img src={financeman} alt="finance icon" className="w-5 h-5" />
              Finance management
            </div>
          }
        >
          {dropdownItems}
        </SubMenu>
        
        <SubMenu 
          label={
            <div className="flex items-center gap-2">
              <img src={swapman} alt="swap icon" className="w-5 h-5" />
              Swap management
            </div>
          }
        >
          {dropdownItems}
        </SubMenu>
        
        <SubMenu 
          label={
            <div className="flex items-center gap-2">
              <img src={leaseman} alt="lease icon" className="w-5 h-5" />
              Lease management
            </div>
          }
        >
          {dropdownItems}
        </SubMenu>
        
        <SubMenu 
          label={
            <div className="flex items-center gap-2">
              <img src={insuranceman} alt="insurance icon" className="w-5 h-5" />
              Insurance management
            </div>
          }
        >
          {dropdownItems}
        </SubMenu>
        
        <SubMenu 
          label={
            <div className="flex items-center gap-2">
              <img src={stockman} alt="stock icon" className="w-5 h-5" />
              Stock management
            </div>
          }
        >
          {dropdownItems}
        </SubMenu>
        
        <SubMenu 
          label={
            <div className="flex items-center gap-2">
              <img src={fleetman} alt="fleet icon" className="w-5 h-5" />
              Fleet management
            </div>
          }
        >
          {dropdownItems}
        </SubMenu>


        <div className="border-t border-gray-300 mr-5"></div>

        <MenuItem>
          <div className="flex items-center gap-2">
            <img src={editname} alt="profile icon" className="w-5 h-5" />
            Edit profile
          </div>
        </MenuItem>

        <div className="border-t border-gray-300 mr-5"></div>
        
        <MenuItem>
          <div className="flex items-center gap-2">
            
            Terms & Conditions
          </div>
        </MenuItem>
      </Menu>
    </Sidebar>
  );
}