import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

import Game from './Components/Game/game';
import InsertDigit from './Components/InsertDigit/insertDigit';
import InsertPlayers from './Components/InsertPlayers/insertPlayers';
import InsertRoles from './Components/InsertRoles/insertRoles';
import ShowRoles from './Components/ShowRoles/showRoles';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
      
        <Routes>
          <Route path='/' element={<InsertDigit />} />
          <Route path='roles' element={<InsertRoles />} />
          <Route path='show' element={<ShowRoles />} />
          <Route path='players' element={<InsertPlayers />} />
          <Route path='game' element={<Game />} />
        </Routes>

      </div>
    </BrowserRouter>
  );
}

export default App;
