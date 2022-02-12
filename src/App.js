import './App.css';
import Home from './Components/Home/Home';
import PicturesContexProvider from './MyContex/PicturesContex';

function App() {
  return (
    <div className="App">
      <PicturesContexProvider>
        <Home />
      </PicturesContexProvider>

    </div>
  );
}

export default App;
