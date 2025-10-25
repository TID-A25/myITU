import './App.css'; // still used for global styles
import ProfilesPage from './pages/ProfilesPage'; // our main view for now

function App() {
  return (
    <div className="App">
      {/* Future: Add Router here if we get a new page */}
      <ProfilesPage />
    </div>
  );
}

export default App;