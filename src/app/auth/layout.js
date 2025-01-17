export const metadata = {
  title: {
    absolute: "Next Js OP",
  },
  description: "For rapid devolopment",
};

function Layout({ children }) {
  return (
    <>
      <div>Layout ONly for AUth </div>
      {children}
    </>
  );
}

export default Layout;
