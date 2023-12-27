import './App.css';
import {Route,Routes} from "react-router-dom";
import {Home,SingleHotel,SearchResults} from "./pages"
function App() {
  return (
    <Routes>
      <Route path ="/" element={<Home/>}/>
      <Route path="/hotels/:name/:address/:id/reserve" element={<SingleHotel/>}/>
      <Route path="/hotels/:address" element={<SearchResults/>}/>
    </Routes>
  );
}

export default App;
