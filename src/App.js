import logo from './logo.svg';
import './App.css';
import Layout from './layout/Layout';
import HomePage from './pages/home';

function App() {
  return (
    <div className="App">
      <Layout>
        <HomePage></HomePage>
      </Layout>
    </div>
  );
}

export default App;
