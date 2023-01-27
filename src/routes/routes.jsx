// import { lazy, Suspense }
import { useRoutes } from 'react-router-dom';
import { AuthTabs, ForgotPassword } from '../pages/auth';

export const AppRouter = () => {
  const elements = useRoutes([
    // first route
    {
      path: '/',
      element: <AuthTabs />
    },
    {
      path: '/forgot-password',
      element: <ForgotPassword />
    },
    {
      path: '/reset-password',
      element: <ForgotPassword />
    }
  ]);

  return elements;
};
