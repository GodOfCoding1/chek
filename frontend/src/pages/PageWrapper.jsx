import Footer from "../components/footer";
import NavBar from "../components/nav-bar";

const PageWrapper = ({ children }) => {
  return (
    <>
      <NavBar />
      {children}
      <Footer />
    </>
  );
};

export default PageWrapper;
