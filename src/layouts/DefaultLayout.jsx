import { Outlet } from "react-router-dom";
import Navbar from "../componenets/PostsPage/Navbar";
export default function DefaultLayout() {
  return (
    <div>
      <header>
        <Navbar> </Navbar>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}
