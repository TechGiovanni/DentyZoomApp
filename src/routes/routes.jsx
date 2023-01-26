// import { lazy, Suspense }
import { AuthTabs } from '../pages/auth/auth-tabs/auth-tabs.js';
import { useRoutes } from 'react-router-dom';

export const AppRouter = () => {
  const elements = useRoutes([
    // first route
    {
      path: '/',
      element: <AuthTabs />
    }
  ]);

  return elements;
};
