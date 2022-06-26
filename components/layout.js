import Footer from "./footer";
import Navbar from "./navbar";

const Layout = ({ children }) => {
    return (
        <div className="content scroll-smooth">
            <Navbar />
            { children }
            <Footer />
        </div>
    );
}
 
export default Layout;