import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./pages/Home.jsx";
import UserProfile from './pages/UserProfile'
import OtherUserProfile from './pages/OtherUserProfile'

function App() {
  return (
    <div className="app-container">
      <Header />
      <Home />
      <Footer />
    </div>
  );
}

export default App;