function Layout({ notifications, analytics, children }) {
  return (
    <>
      {children}
      {notifications}
      {analytics}
    </>
  );
}

export default Layout;
