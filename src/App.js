import { BrowserRouter } from 'react-router-dom';
import {
  Routes,
  Route,
} from "react-router-dom";
import Layout from './components/Layout/Layout';
import Home from './page/Home/Home';
import Contact from './page/Contact/Contact';
import Detail from './components/Film/Detail/Detail';
import News from './page/News/News';

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route  path='/' element={<Layout/>}>
            <Route path='/' element={<Home/>}/>
            <Route path='/contact' element={<Contact />}/>
            <Route path='/detail/:id' element={<Detail/>}/>
            <Route path='/news' element={<News/>}/>
          </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
