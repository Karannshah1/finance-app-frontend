
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import OAuth2RedirectHandler from './components/OAuth2RedirectHandler';
import Login from './components/LoginPage';
import Register from './components/Register';
import Sender from './components/Sender';
import Dashboard from './components/Dashboard';
import axios from 'axios';


const url = process.env.REACT_APP_API_URL+"/sender"; // Replace with your Render URL
const interval = 30000; // Interval in milliseconds (30 seconds)

//Reloader Function
function reloadWebsite() {
  axios.get(url)
    .then(response => {
      console.log(`Reloaded at ${new Date().toISOString()}: Status Code ${response.status}`);
    })
    .catch(error => {
      console.error(`Error reloading at ${new Date().toISOString()}:`, error.message);
    });
}

setInterval(reloadWebsite, interval);




function App() {
  return (
    <Router>
      <Routes>
        {/* Your other routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register/>} />
        <Route path="/sender" element={<Sender />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/" element={<Dashboard />} />
        
        {/* Add the new route for handling the OAuth2 redirect */}
        <Route path="/oauth2/redirect" element={<OAuth2RedirectHandler />} />
        
        {/* ... other routes ... */}
      </Routes>
    </Router>
  );
}

export default App;
