import GoogleAuth from "./components/googleauth";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Campaigns from "./components/campaigns";
import CampaignForm from "./components/campaignForm";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<GoogleAuth />} />
        <Route path="/campaigns" element={<Campaigns />} />
        <Route path="/CampaignForm" element={<CampaignForm />} />
      </Routes>
    </Router>
  );
}

export default App;
