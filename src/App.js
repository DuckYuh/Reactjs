import './styles/App.scss';
import AppRoutes from './routes/appRoutes';
import Header from './navigator/header';
import Footer from './navigator/footer';

function App() {
  return (
    <>
      <div class="Header">
        <Header />
      </div>
      
      <div class="App">
        <AppRoutes />
      </div>

      <div class="Footer">
       <Footer />
      </div>
    </>
  );
}

export default App;
