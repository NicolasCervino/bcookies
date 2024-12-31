import { PHONE_NUMBER } from '@constants/contact-information';
import { BrowserRouter } from 'react-router-dom';
import { WhatsAppButton } from './components/atoms';
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
                <WhatsAppButton phoneNumber={PHONE_NUMBER} />
            </div>
        </BrowserRouter>
    );
}

export default App;
