
  export default function DashboardLayout({
    children, notifications, user, revenue, login
  }: {
    children: React.ReactNode,
    user: React.ReactNode,
    notifications: React.ReactNode,
    revenue: React.ReactNode,
    login: React.ReactNode
  }) {
    const isLoggedIn = true
    return (
      isLoggedIn ? <div>
        <div>{children}</div>
        <div>{notifications}</div>
        <div>{user}</div>
        <div>{revenue}</div>
     </div> : <div>{login}</div>
    )
  }
  