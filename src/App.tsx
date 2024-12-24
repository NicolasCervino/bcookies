import { BrowserRouter } from 'react-router-dom';
import Footer from './components/layout/Footer';
import Navbar from './components/navigation/Navbar';
import Router from './routes/Router';

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Navbar />
        <main>
          <Router />
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
