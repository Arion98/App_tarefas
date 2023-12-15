import {BrowserRouter as Router, Routes, Route, Navigate} from "react-router-dom";
import NavBar from "./components/pages/NavBar"
import './index.css'

import { AuthProvider, useAuth } from './components/Validacion/AuthProvider';
import RegisterTarefas from "./components/RegisterTaferas/Taferas";
import ManutencaoTarefas from "./components/ManutencaoDeTarefas/Manutencao_tarefas";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register"

const ProtectedRoute = ({ children }) => {
  const { autenticado } = useAuth();
  return autenticado ? children : <Navigate to="/login" />;
};

const RoutesWithAuth = () => {
  const { autenticado } = useAuth();

  return (
   
      <Router>
          {autenticado && <NavBar /> }
          <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/registrar" element={<Register />} />
                <Route path="/manutencao" element={ <ManutencaoTarefas /> } />
                <Route path="/" element={autenticado ? <Navigate to="/tarefas" /> : <Login />} />
                <Route path="/tarefas" element={<ProtectedRoute><ManutencaoTarefas /></ProtectedRoute>} />
                <Route path="/registrarTarefas" element={<ProtectedRoute><RegisterTarefas /></ProtectedRoute>} />
          </Routes>
      </Router>
  );
};

const App = () => {
  return (
      <AuthProvider>
          <RoutesWithAuth/>
      </AuthProvider>
  );
};

export default App;

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <Router>
//     <NavBar/>
//     <Routes>
//       <Route path="/login" element={<Login />}/>
//       <Route path="/" element={<Tarefas />} />
//       <Route path="/tarefas" element={<RegisterTarefas />} />
//       <Route path="/Registrar" element={<Register />}/>
//     </Routes>
//   </Router>
// )
