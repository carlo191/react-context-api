import { Outlet } from "react-router-dom";
import NavBar from "../componenets/Navbar";
export default function DefaultLayout() {
  return (
    <div>
      <header>
        <NavBar> </NavBar>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}
