import { Outlet } from "react-router-dom";
import Navbar from "../componenets/Navbar";

export default function DefaultLayout() {
  return (
    <>
      <header>
        <Navbar></Navbar>
      </header>
      <div className="">
        <Outlet></Outlet>
      </div>
    </>
  );
}
