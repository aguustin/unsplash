
import './App.css';
import Nav from './components/nav/nav';
import Unsplash from './components/unsplash/unsplash';
import { InfoContextProvider } from './context/infoContext';

function App() {
  return (
    <div className="App font-sans bg-slate-200 h-screen overflow-x-hidden">
    <InfoContextProvider>
      <Nav/>
      <Unsplash/>
    </InfoContextProvider>
    </div>
  );
}

export default App;
