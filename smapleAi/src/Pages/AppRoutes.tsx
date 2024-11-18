import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MiniDrawer from "../components/Sidebar/main";
import Tools from "./Tools";
import Playground from "./playground";
import ToolsPage from "./Tools";
function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MiniDrawer />} /> {/* Home route */}
        <Route path="/home" element={<MiniDrawer />} /> {/* Home route */}
        <Route path="/playground"element={<Playground />} />
        <Route path="/tools" element={<Tools />} /> {/* Tools route */}
      </Routes>
    </Router>
  );
}

export default AppRoutes;
