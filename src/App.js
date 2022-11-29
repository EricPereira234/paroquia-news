import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

//importando arquivos
import Rota from "./router";

function App() {
  return (
    <>
      <ToastContainer />
      <Rota />
    </>
  );
}

export default App;
