import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar';
import HomePage from './pages/homePage';



function App() {
  return (
    <div className="App">
<Navbar/>

<Routes>
   <Route index element={<HomePage/>}/>
</Routes>


    </div>
  );
}

export default App;
