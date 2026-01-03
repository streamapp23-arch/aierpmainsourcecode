import { useState } from "react";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";
import { Button } from "@/components/ui/button";
import {
    LayoutDashboard,
    FileText,
    Image as ImageIcon,
    LogOut,
    Menu,
    X,
} from "lucide-react";

const AdminLayout = () => {
    const { signOut } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);

    const handleSignOut = async () => {
        await signOut();
        navigate("/admin/login");
    };

    const navItems = [
        { icon: LayoutDashboard, label: "Dashboard", path: "/admin/dashboard" },
        { icon: FileText, label: "Posts", path: "/admin/posts" },
        { icon: ImageIcon, label: "Media", path: "/admin/media" },
    ];

    return (
        <div className="min-h-screen bg-slate-100 flex">
            {/* Sidebar */}
            <aside
                className={`${isSidebarOpen ? "w-64" : "w-20"
                    } bg-slate-900 text-white transition-all duration-300 flex flex-col fixed h-full z-20`}
            >
                <div className="p-4 flex items-center justify-between border-b border-slate-800">
                    <span className={`font-bold text-xl ${!isSidebarOpen && "hidden"}`}>CMS</span>
                    <button
                        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                        className="p-2 hover:bg-slate-800 rounded-lg"
                    >
                        {isSidebarOpen ? <X size={20} /> : <Menu size={20} />}
                    </button>
                </div>

                <nav className="flex-1 p-4 space-y-2">
                    {navItems.map((item) => (
                        <Link
                            key={item.path}
                            to={item.path}
                            className={`flex items-center gap-3 p-3 rounded-lg transition-colors ${location.pathname.startsWith(item.path)
                                ? "bg-brand-blue text-white"
                                : "hover:bg-slate-800 text-slate-400 hover:text-white"
                                }`}
                        >
                            <item.icon size={20} />
                            <span className={`${!isSidebarOpen && "hidden"}`}>{item.label}</span>
                        </Link>
                    ))}
                </nav>

                <div className="p-4 border-t border-slate-800">
                    <button
                        onClick={handleSignOut}
                        className="flex items-center gap-3 p-3 w-full rounded-lg text-red-400 hover:bg-slate-800 transition-colors"
                    >
                        <LogOut size={20} />
                        <span className={`${!isSidebarOpen && "hidden"}`}>Sign Out</span>
                    </button>
                </div>
            </aside>

            {/* Main Content */}
            <main
                className={`flex-1 transition-all duration-300 ${isSidebarOpen ? "ml-64" : "ml-20"
                    } p-8`}
            >
                <Outlet />
            </main>
        </div>
    );
};

export default AdminLayout;
