import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Template from "../components/BlogTemplate";
function Blogs() {
  return (
    <>
    
    <div className="page-container">
      <div className="content-wrap">
      <NavBar />
      <Template />
      </div>
    </div>
      <Footer />
    </>
  );
}
export default Blogs;
