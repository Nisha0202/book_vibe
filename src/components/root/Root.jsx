import { Outlet } from "react-router-dom";
import Footer from "../Footer";
import '../../App.css';
import Header from "../Header";

export default function Root() {
    return (
        <>
            {/* all the other elements */}
            <div id="detail" className=" lexend">
                <div className="container">
                     <Header></Header>
                {/* as a chlild hishebe change hoi */}
                <Outlet />
                </div>
               

                {/* <Footer></Footer> */}



            </div>
        </>
    );
}