import React from 'react'
import GooglePartner from './components/GooglePartner';
import Services from './components/Services';
import Header from './components/Header';
import Global from './components/Global';
import Features from './components/Features';
import Partner from './components/Partner';
import Newsletter from './components/Newsletter';
import Counter from './components/Counter';
import Footer from './components/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navbar from './components/navbar/Navbar';
AOS.init();

const App = () => {
    return (
        <div>
            <Navbar />
            <Header />

            <div className="max-w-screen-xl mx-auto my-0" >
                <GooglePartner  />
                <Services />
                <Global />
                <Counter />
            </div>


            <div className="max-w-screen-xl mx-auto my-0">
                <Features />
                <Partner />
            </div>

            <Newsletter />
            <Footer />
        </div>
    )
}

export default App;