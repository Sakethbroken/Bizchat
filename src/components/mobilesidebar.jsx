import { useState } from 'react';
import impaaslogo from "../assets/impaaslogo.png";
import arrowBack from "../assets/icons/Arrow-Back.png";
import closewhite from "../assets/icons/closewhite.png";
import bellicon from "../assets/icons/bell.png";



import dashboardIcon from "../assets/icons/dashboardman.png";
import bizchatIcon from "../assets/icons/bizchat.png";
import businessIcon from "../assets/icons/businessman.png";
import brandIcon from "../assets/icons/brandman.png";
import productIcon from "../assets/icons/productman.png";
import channelIcon from "../assets/icons/channelman.png";
import purchaseIcon from "../assets/icons/purchaseman.png";
import salesIcon from "../assets/icons/salesman.png";
import chargeIcon from "../assets/icons/chargeman.png";
import showroomIcon from "../assets/icons/showroomman.png";
import financeIcon from "../assets/icons/financeman.png";
import swapIcon from "../assets/icons/swapman.png";
import leaseIcon from "../assets/icons/leaseman.png";
import insuranceIcon from "../assets/icons/insuranceman.png";
import stockIcon from "../assets/icons/stockman.png";
import fleetIcon from "../assets/icons/fleetman.png";
import profileIcon from "../assets/icons/editname.png";

import '../sidebar.css';

export default function MobileSidebar({ isOpen, onClose, onNavigate }) {
  const [activeItem, setActiveItem] = useState(null);
  const [currentView, setCurrentView] = useState('main');
  const [currentSubmenu, setCurrentSubmenu] = useState(null);
  const [activeSubmenuItem, setActiveSubmenuItem] = useState(null);

  if (!isOpen) return null;

  const handleMenuItemClick = (itemName) => {
    setActiveItem(itemName);

    const submenuItems = [
      'bizchat', 'business', 'brand', 'product', 'channel',
      'purchase', 'sales', 'charge', 'showroom', 'finance',
      'swap', 'lease', 'insurance', 'stock', 'fleet'
    ];
  

    if (submenuItems.includes(itemName)) {
      setCurrentView('submenu');
      setCurrentSubmenu(itemName);
      setActiveSubmenuItem(null);
    } else {
      const path = itemName.toLowerCase().replace(/\s+/g, '-');
      if (onNavigate) onNavigate(path);
    }
  };

  const handleBackClick = () => {
    setCurrentView('main');
    setCurrentSubmenu(null);
  };

  const getSubmenuContent = () => {
    const submenuItems = {
      'bizchat': ['Latest feed', 'Bizchat profile', 'Saved posts'],
      'business': ['Manufacturing', 'Dealers and retailers', 'Franchisee', 'Service partners', 'Swap and charge', 'Lease and finance', 'Fleet operator'],
      'brand': ['Brand overview', 'Brand analytics', 'Brand assets'],
      'product': ['Product catalog', 'Product analytics', 'Product management'],
      'channel': ['Channel partners', 'Channel analytics', 'Channel management'],
      'purchase': ['Purchase orders', 'Purchase analytics', 'Purchase management'],
      'sales': ['Sales overview', 'Sales analytics', 'Sales management'],
      'charge': ['Charge stations', 'Charge analytics', 'Charge management'],
      'showroom': ['Showroom locations', 'Showroom analytics', 'Showroom management'],
      'finance': ['Finance overview', 'Finance analytics', 'Finance management'],
      'swap': ['Swap stations', 'Swap analytics', 'Swap management'],
      'lease': ['Lease options', 'Lease analytics', 'Lease management'],
      'insurance': ['Insurance plans', 'Insurance analytics', 'Insurance management'],
      'stock': ['Stock overview', 'Stock analytics', 'Stock management'],
      'fleet': ['Fleet overview', 'Fleet analytics', 'Fleet management'],
    };
    return submenuItems[currentSubmenu] || [];
  };

  const iconMap = {
    dashboard: dashboardIcon,
    bizchat: bizchatIcon,
    business: businessIcon,
    brand: brandIcon,
    product: productIcon,
    channel: channelIcon,
    purchase: purchaseIcon,
    sales: salesIcon,
    charge: chargeIcon,
    showroom: showroomIcon,
    finance: financeIcon,
    swap: swapIcon,
    lease: leaseIcon,
    insurance: insuranceIcon,
    stock: stockIcon,
    fleet: fleetIcon,
    profile: profileIcon
  
  };

  return (
    <div className="fixed inset-0 z-50 lg:hidden pointer-events-none">
      <div
        className="h-screen w-full md:w-3/4 bg-[#962210] fixed top-0 right-0 text-white overflow-y-auto pointer-events-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-[#962210] p-4 flex items-center justify-between fixed top-0 right-0 w-full z-10">
          <img src={impaaslogo} alt="Impaas Logo" className="w-[132px] h-[32px]" />
          <div className="flex">
            <button className="h-full aspect-square flex items-center cursor-pointer justify-center focus:outline-none absolute right-[68px] top-0 bottom-0">
              <img src={bellicon} alt="Bell" className="w-[25px] h-[25px]" />
            </button>
            <button
              onClick={onClose}
              className="h-full aspect-square bg-[#962210] hover:bg-[#7B1A0B] active:bg-[#7B1A0B] flex items-center justify-center focus:outline-none absolute right-0 top-0 bottom-0"
            >
              <img src={closewhite} alt="Close" className="w-[25px] h-[25px]"/>
            </button>
          </div>
        </div>

        {/* Submenu View */}
        {currentView === 'submenu' && currentSubmenu ? (
          <>
            <div className="flex items-center gap-2 bg-[#962210] px-4 py-3 mt-[72px] border-b border-[#a74632]">
              <button
                onClick={handleBackClick}
                className="focus:outline-none bg-transparent active:bg-[#7B1A0B] hover:bg-[#7B1A0B]"
              >
                <img src={arrowBack} alt="Back" className="w-[16px] h-[16px]" />
              </button>
              <span className="text-white font-semibold uppercase text-sm bg-[#962210]">
                {currentSubmenu.replace(/-/g, ' ')}
              </span>
            </div>

            <div className="flex flex-col px-4">
              {getSubmenuContent().map((item, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setActiveSubmenuItem(item);
                    if (onNavigate) {
                      const path = `${currentSubmenu}-${item.toLowerCase().replace(/\s+/g, '-')}`;
                      onNavigate(path);
                    }
                  }}
                  className={`py-4 px-2 text-left border-b border-[#b94e3b] bg-transparent hover:bg-[#7B1A0B] focus:bg-[#7B1A0B] active:bg-[#7B1A0B] focus:outline-none ${
                    activeSubmenuItem === item ? 'bg-[#7B1A0B] text-white font-semibold' : 'text-white'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </>
        ) : (
          <div className="mt-[72px]">
            <div className="flex flex-col px-4">
              {[
                { id: 'dashboard', label: 'Dashboard and Analytics' },
                { id: 'bizchat', label: 'Bizchat' },
                { id: 'business', label: 'Business Opportunities' },
                { id: 'brand', label: 'Brand management' },
                { id: 'product', label: 'Product management' },
                { id: 'channel', label: 'Channel management' },
                { id: 'purchase', label: 'Purchase management' },
                { id: 'sales', label: 'Sales management' },
                { id: 'charge', label: 'Charge management' },
                { id: 'showroom', label: 'Showroom management' },
                { id: 'finance', label: 'Finance management' },
                { id: 'swap', label: 'Swap management' },
                { id: 'lease', label: 'Lease management' },
                { id: 'insurance', label: 'Insurance management' },
                { id: 'stock', label: 'Stock management' },
                { id: 'fleet', label: 'Fleet management' },
                { id: 'profile', label: 'Edit profile' },
                { id: 'terms', label: 'Terms & Conditions' },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleMenuItemClick(item.id)}
                  className={`flex items-center gap-3 py-4 px-2 text-left border-b border-[#b94e3b] bg-transparent hover:bg-[#7B1A0B] focus:bg-[#7B1A0B] active:bg-[#7B1A0B] focus:outline-none ${
                    activeItem === item.id ? 'bg-[#7B1A0B] text-white font-semibold' : 'text-white'
                  }`}
                >
                  <img src={iconMap[item.id]} alt="" className="w-[16px] h-[16px]" />
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
