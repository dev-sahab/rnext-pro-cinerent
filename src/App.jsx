import { useState } from 'react';
import './App.css';
import ContentBody from './components/ContentBody';
import Footer from './components/Footer';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import { MovieContext } from './context';

function App() {
  const [cartData, setCartData] = useState([]);
  return (
    <MovieContext.Provider value={{ cartData, setCartData }}>
      <Header />
      <main>
        <div class="container grid lg:grid-cols-[218px_1fr] gap-[3.5rem]">
          <Sidebar />
          <ContentBody />
        </div>
      </main>
      <Footer />
    </MovieContext.Provider>
  );
}

export default App;
