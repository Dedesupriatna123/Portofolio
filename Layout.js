import { Outlet, Link } from "react-router-dom";
import { FaBarsStaggered } from "react-icons/fa6";
import './Layout.css'


const Layout = () => {
    return (
        <>
        <div className="navbar">
            <h3 className="logo">PORTOFOLIO</h3>
            <div className="nav-link">
                <ul>
                    <li className="link">
                        <Link to="/">Home</Link>
                        <Link to="/Skil">Skil</Link>
                        <Link to="/Tentang">Tentang</Link>
                        <Link to="/contact">Contact</Link>
                    </li>
                </ul>
            </div>
            <div className="icons">
            <FaBarsStaggered />
            </div>
        </div>
        <Outlet />
        <footer className="content">
            <h3 className="parag">Copyright portofolio Dede Supriatna</h3>
        </footer>
        </>
    )
}

export default Layout;

