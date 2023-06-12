import Dashboard from '../pages/Dashboard';
import Home from '../pages/Home/index';
import { User } from './../pages/User';
import { Login } from './../pages/Login/index';
import { Rule } from '../pages/Rule';
import EmployeeList from '../pages/Employee';
import EmployeeForm from '../pages/Employee/EmployeeForm';

export default function Config() {
  const privateRoutes = [
    {
      path: '/app',
      group: 'app',
      element: <Home />,
      rules: ['admin'],
      name: 'home',
      title: 'Home',
      icon: 'fas fa-fw fa-home',
    },
    {
      path: '/app/cadastro',
      group: 'register',
      element: <User />,
      rules: ['admin'],
      name: 'registrations',
      title: 'Cadastros',
      icon: 'fas fa-fw fa-user',
      children: [
        {
          path: '/app/cadastro/listagem',
          group: 'rule',
          title: 'Perfil',
          icon: 'fas fa-fw fa-user',
          element: <Rule />,
        },
        {
          path: '/app/cadastro/usuarios',
          group: 'user',
          title: 'Usuários',
          icon: 'fas fa-fw fa-user',
          element: <User />,
        },
        {
          path: '/app/cadastro/funcionarios',
          group: 'employee',
          title: 'Funcionários',
          icon: 'fas fa-fw fa-user',
          element: <EmployeeList />,
        },
        {
          path: '/app/cadastro/funcionarios/novo',
          group: 'employee',
          title: 'Cadastrar Funcionários',
          icon: 'fas fa-fw fa-user',
          element: <EmployeeForm />,
        },
      ],
    },
    {
      path: '/app/dashboard',
      group: 'dashboard',
      element: <Dashboard />,
      rules: ['admin'],
      name: 'dashboard',
      title: 'Dashboard',
      icon: 'fas fa-fw fa-tachometer-alt',
    },
    {
      path: '/app/agenda',
      group: 'schedule',
      element: <div>Agenda</div>,
      rules: ['admin'],
      name: 'schedule',
      title: 'Dashboard',
      icon: 'fas fa-fw fa-tachometer-alt',
    },
  ];

  const publicRoutes = [
    {
      path: '/login',
      element: <Login />,
      rules: [],
      name: 'login',
      title: 'Login',
      icon: 'fas fa-fw fa-home',
    },
    // {
    //   path: '/menu',
    //   element: <Menu />,
    //   rules: [],
    //   name: 'menu',
    //   title: 'Menu',
    //   icon: 'fas fa-fw fa-home',
    // },
  ];

  return { privateRoutes, publicRoutes };
}
