import './App.css';
import ContentBody from './components/ContentBody';
import Footer from './components/Footer';
import Header from './components/Header';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div>
      <Header />
      <main>
        <div class="container grid lg:grid-cols-[218px_1fr] gap-[3.5rem]">
          <Sidebar />
          <ContentBody />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
