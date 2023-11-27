import { createBrowserRouter, RouterProvider, Navigate} from "react-router-dom";
import Login_adm from '../pages/Login_adm';
import Login_cli from '../pages/Login_cli';
import Carrinho from '../pages/Carrinho';
import Home from '../pages/Home_site';
import Dashboard from '../dashboard/dashboard';
import CadastroDeProduto from "../pages/Cadastro_prod";
import HistoricoCompras from "../pages/Hist_cli";
import Venda from "../pages/Efet_vendas";
import Editar from "../pages/Atualiza_prod";
import Conf from "../pages/Efet_vendas";



const RotaPrivada = ({elemento}) => {
    
  return elemento
}
const router = createBrowserRouter([
    {
      path: "/Login",
      element: <Login_adm/>,
    },
    {
      path: "/Cliente",
      element: <Login_cli/>,
    },
    {
      path: "/Historico",
      element: <HistoricoCompras/>,
    },
    {
      path: "/Carrinho",
      element: <RotaPrivada elemento={<Carrinho/>} />,
    },
    {
      path: "/Dashboard",
      element: <RotaPrivada elemento={<Dashboard/>} />,
    },
    {
      path: "/Cadastro",
      element: <RotaPrivada elemento={<CadastroDeProduto/>} />,
    },
    {
        path: "/",
        element: <RotaPrivada elemento={<Home/>} />,
    },
    {
      path: "/Venda",
      element: <RotaPrivada elemento={<Venda/>} />,
  },
  { 
    path: "/Editar/:codigo",
    element: <RotaPrivada elemento={<Editar/>} />,
},
{
  path: "/Conf",
  element: <RotaPrivada elemento={<Conf/>} />,
},
    
  ]);

  const Rota = () => {
    return(
        <RouterProvider router={router} />
    )
  }

  export default Rota 
