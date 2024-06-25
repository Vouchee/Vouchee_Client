import { v4 as uuidv4 } from "uuid";
import { GoogleAuthProvider, signInWithRedirect } from "firebase/auth";

import {
  MdOutlineSettings,
  MdPayments,
  MdCookie,
  MdOutlineAttachEmail,
  MdShop,
  MdDashboardCustomize,
} from "react-icons/md";
import { BsShop } from "react-icons/bs";
import { FaUser } from "react-icons/fa6";
import { IoShareSocial } from "react-icons/io5";
import { TbTruckDelivery } from "react-icons/tb";
import { RiCustomerService2Fill } from "react-icons/ri";
import { HiOutlineIdentification } from "react-icons/hi";
import { SiZalo } from "react-icons/si";
import { FaAddressBook } from "react-icons/fa6";
import { TbAddressBookOff } from "react-icons/tb";
import { IoMdTimer } from "react-icons/io";

import { auth } from "../config/firebase.config";
import { FaShoppingCart } from "react-icons/fa";

const googleProider = new GoogleAuthProvider();

export const signInWithGoogle = async () => {
  await signInWithRedirect(auth, googleProider).then((useCred) => {
    window.location.reload();
  });
};

export const signOutAction = async () => {
  await auth.signOut().then(() => {
    window.location.reload();
  });
};

export const Menus = [
  {
    id: uuidv4(),
    icon: <BsShop />,
    name: <div className="text-nowrap">Trang người bán</div>,
    uri: "/seller/home",
  },
  {
    id: uuidv4(),
    icon: <MdOutlineSettings />,
    name: <div className="text-nowrap">Cài đặt</div>,
    uri: "/setting/profile",
  },
];

export const ClientMenus = [
  {
    title: "Tài khoản",
    Icon: FaUser,
    spacing: true,
    submenu: true,
    subMenuItems: [
      {
        title: "Thông tin tài khoản",
        Icon: HiOutlineIdentification,
        uri: "/dash/userInfomation",
      },
      {
        title: "Nạp tiền",
        Icon: MdPayments,
        uri: "/dash/payment",
      },
    ],
  },
  {
    title: "Shopee Dashboard",
    Icon: MdDashboardCustomize,
    uri: "/dash/shopeeDashboard",
    spacing: true,
  },
  {
    title: "Shopee",
    Icon: MdShop,
    spacing: true,
    submenu: true,
    subMenuItems: [
      {
        title: "Theo dõi đơn hàng",
        Icon: TbTruckDelivery,
        uri: "/dash/tracking",
      },
      {
        title: "Hẹn giờ đơn hàng",
        Icon: IoMdTimer,
        uri: "/dash/orderTimer",
      },
      // {
      //   title: "Hẹn giờ đơn hàng 2",
      //   Icon: IoMdTimer,
      //   uri: "/dash/orderTimer2",
      // },
      {
        title: "Kiểm tra MVD Cookie",
        Icon: MdCookie,
        uri: "/dash/checkMVDCookie",
      },
      {
        title: "Thêm địa chỉ",
        Icon: FaAddressBook,
        uri: "/dash/addAddress",
      },
      {
        title: "Thêm email",
        Icon: MdOutlineAttachEmail,
        uri: "/dash/changeEmail",
      },
      {
        title: "Thay đổi địa chỉ đơn hàng",
        Icon: TbAddressBookOff,
        uri: "/dash/changeAddressOrder",
      },
      {
        title: "Giỏ Hàng và Sản Phẩm",
        Icon: FaShoppingCart,
        uri: "/dash/productAndCart",
      },
    ],
  },
  {
    title: "Hỗ trợ",
    Icon: RiCustomerService2Fill,
    spacing: true,
    submenu: true,
    subMenuItems: [
      {
        title: "Zalo",
        Icon: SiZalo,
        uri: "/dash/zalo",
      },
      {
        title: "Social",
        Icon: IoShareSocial,
        uri: "/dash/social",
      },
    ],
  },
];

export const DashboardMenus = [
  {
    id: 10003,
    menu: "Chức năng",
    uri: "/dash/account",
    isAdmin: true,
  },
  {
    id: 10004,
    menu: "Cài đặt",
    uri: "/admin/users",
    isAdmin: true,
  },
];
