import Icons from "../Icons";

const Sidebar = () => {
  const sidebarItems = [
    { name: "Home", icon: Icons.sidebarIcons.Home },
    { name: "Courses", icon: Icons.sidebarIcons.Courses },
    { name: "Schedule", icon: Icons.sidebarIcons.Schedule },
    { name: "Materials", icon: Icons.sidebarIcons.Materials },
    { name: "Certificates", icon: Icons.sidebarIcons.Certificates },
    { name: "Messages", icon: Icons.sidebarIcons.Messages },
    { name: "Settings", icon: Icons.sidebarIcons.Settings },
  ];

  return (
    <aside className="flex flex-col justify-between items-center pt-4 pb-4">
      {/* Logo Section */}
      <figure className="text-center">
        <img src="https://static.vecteezy.com/system/resources/thumbnails/022/984/695/small_2x/brown-flower-free-illustration-icon-free-png.png" alt="logo" className="w-12" />
      </figure>

      {/* Sidebar Items */}
      <div className="flex flex-col gap-8">
        {sidebarItems.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center gap-1 hover:bg-gray-800 cursor-pointer rounded-md"
          >
            <item.icon className={item.name === 'Courses' ? 'text-active-brown' : 'text-non-active-brown'}/>
            <span className={item.name === 'Courses' ? 'text-[0.6rem] text-active-brown' : "text-[0.6rem] text-non-active-brown"}>{item.name}</span>
          </div>
        ))}
      </div>

      {/* Logout Section */}
      <div className="flex flex-col items-center gap-1 hover:bg-gray-800 cursor-pointer rounded-md">
        <Icons.sidebarIcons.Logout className="text-non-active-brown" />
        <span className="text-[0.6rem] text-non-active-brown">Log out</span>
      </div>
    
    </aside>
  );
};

export default Sidebar;
