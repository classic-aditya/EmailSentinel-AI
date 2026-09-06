import { BrowserRouter,Routes,Route } from "react-router-dom";
import Layout from "./components/Layout.jsx";
import Login from "./pages/Login.jsx";
import Inbox from "./pages/Inbox.jsx";
import EmailDetail from "./pages/EmailDetail.jsx";
import Dashboard from "./pages/Dashboard.jsx";

function App() {
  return (
    <BrowserRouter>
    <Routes>
    
      <Route path="/" element={<Login/>} />
      <Route path="/inbox" element={<Layout><Inbox/></Layout>}/>
      <Route path="/email/:id" element={<Layout><EmailDetail/></Layout>}/>
      <Route path="/dashboard" element={<Layout><Dashboard/></Layout>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App ;