import { BrowserRouter,Routes,Route } from "react-router-dom";
import Login from "./pages/Login.jsx";
import Inbox from "./pages/Inbox.jsx";
import EmailDetail from "./pages/EmailDetail.jsx";
import Dashboard from "./pages/Dashboard.jsx";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login/>} />
      <Route path="/inbox" element={<Inbox/>}/>
      <Route path="/email/:id" element={<EmailDetail/>}/>
      <Route path="/dashboard" element={<Dashboard/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App ;