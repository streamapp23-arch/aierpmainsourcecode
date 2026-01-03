import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, Files, Calendar } from "lucide-react";
import { supabase } from "@/lib/supabase";
import { format } from "date-fns";
import { Link } from "react-router-dom";

interface DashboardStats {
    posts: number;
    pages: number;
}

interface RecentActivity {
    id: string;
    title: string;
    type: 'post' | 'page';
    updated_at: string;
}

const Dashboard = () => {
    const [stats, setStats] = useState<DashboardStats>({ posts: 0, pages: 0 });
    const [recentActivity, setRecentActivity] = useState<RecentActivity[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                // Fetch counts
                const { count: postsCount } = await supabase
                    .from("posts")
                    .select("*", { count: "exact", head: true });

                const { count: pagesCount } = await supabase
                    .from("pages")
                    .select("*", { count: "exact", head: true });

                setStats({
                    posts: postsCount || 0,
                    pages: pagesCount || 0,
                });

                // Fetch recent activity (latest 5 posts and pages combined)
                const { data: recentPosts } = await supabase
                    .from("posts")
                    .select("id, title, updated_at")
                    .order("updated_at", { ascending: false })
                    .limit(5);

                const { data: recentPages } = await supabase
                    .from("pages")
                    .select("id, title, updated_at")
                    .order("updated_at", { ascending: false })
                    .limit(5);

                const activity: RecentActivity[] = [
                    ...(recentPosts?.map(p => ({ ...p, type: 'post' } as const)) || []),
                    ...(recentPages?.map(p => ({ ...p, type: 'page' } as const)) || [])
                ]
                    .sort((a, b) => new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime())
                    .slice(0, 5);

                setRecentActivity(activity);

            } catch (error) {
                console.error("Error fetching dashboard data:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    const statCards = [
        { label: "Total Posts", value: stats.posts, icon: FileText, color: "text-blue-500" },
        { label: "Total Pages", value: stats.pages, icon: Files, color: "text-green-500" },
    ];

    return (
        <div className="space-y-8">
            <h1 className="text-3xl font-bold text-slate-900">Dashboard</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {statCards.map((stat) => (
                    <Card key={stat.label}>
                        <CardHeader className="flex flex-row items-center justify-between pb-2">
                            <CardTitle className="text-sm font-medium text-slate-500">
                                {stat.label}
                            </CardTitle>
                            <stat.icon className={`w-4 h-4 ${stat.color}`} />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">
                                {loading ? "..." : stat.value}
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>

            <Card>
                <CardHeader>
                    <CardTitle>Recent Activity</CardTitle>
                </CardHeader>
                <CardContent>
                    {loading ? (
                        <div className="text-sm text-slate-500">Loading...</div>
                    ) : recentActivity.length === 0 ? (
                        <div className="text-sm text-slate-500">No recent activity.</div>
                    ) : (
                        <div className="space-y-4">
                            {recentActivity.map((item) => (
                                <div key={`${item.type}-${item.id}`} className="flex items-center justify-between border-b pb-2 last:border-0 last:pb-0">
                                    <div>
                                        <p className="font-medium text-slate-900">{item.title}</p>
                                        <p className="text-xs text-slate-500 capitalize flex items-center gap-1">
                                            {item.type} • {format(new Date(item.updated_at), "MMM d, yyyy")}
                                        </p>
                                    </div>
                                    <Link
                                        to={`/admin/${item.type}s/edit/${item.id}`}
                                        className="text-sm text-brand-blue hover:underline"
                                    >
                                        Edit
                                    </Link>
                                </div>
                            ))}
                        </div>
                    )}
                </CardContent>
            </Card>
        </div>
    );
};

export default Dashboard;
