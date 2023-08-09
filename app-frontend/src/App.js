import React from 'react'; 
import { BrowserRouter, Switch } from 'react-router-dom';
import Login from './pages/login/Login.tsx';
import Register from './pages/register/Register.tsx';
import { Header } from "./components/header/index.tsx";
import PrivateRoute from './components/privateRoute/PrivateRoute.tsx';
import PublicRoute from './components/publicRoute/PublicRoute.tsx';
import "./App.css";
import EditUser from './pages/user/Edit.tsx';
import Dashboard from './pages/dashboard/Dashboard.tsx';
const App: React.FC = () => {
  return (
    <BrowserRouter>
    <Header />
      <Switch>
        <PublicRoute path="/login" component={Login} />
        <PublicRoute path="/register" component={Register} />
        <PrivateRoute path="/edit" component={EditUser} />
        <PrivateRoute path="/dashboard" component={Dashboard} />
        <PublicRoute path="*" component={Login} />
      </Switch>  
    </BrowserRouter>
  );
};

export default App;


