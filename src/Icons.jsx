import { IoHomeOutline } from "react-icons/io5"; 
import { HiOutlineRectangleStack } from "react-icons/hi2"; 
import { RiCalendarScheduleLine } from "react-icons/ri";
import { IoBookOutline } from "react-icons/io5"; 
import { PiCertificate } from "react-icons/pi";
import { AiOutlineMessage } from "react-icons/ai";
import { IoSettingsOutline } from "react-icons/io5";
import { IoIosLogOut } from "react-icons/io";

const Icons = {
    sidebarIcons: {
        Home: IoHomeOutline,
        Courses: HiOutlineRectangleStack,
        Schedule: RiCalendarScheduleLine,
        Materials: IoBookOutline,
        Certificates: PiCertificate,
        Messages: AiOutlineMessage,
        Settings: IoSettingsOutline,
        Logout: IoIosLogOut
    }
};

export default Icons;