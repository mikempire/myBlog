import { Suspense } from 'react';
import './styles/index.scss';
import './styles/reset.scss';
import { useTheme } from 'app/providers/ThemeProvider';
import { classNames } from 'shared/lib/classNames/classNames';
import { Navbar } from 'widgets/Navbar';
import AppRouter from 'app/providers/router/ui/AppRouter';
import { Sidebar } from 'widgets/Sidebar';

const App = () => {
  const { theme } = useTheme();

  return (
    <div className={classNames('app', {}, [theme])}>
      <Suspense fallback="">
        <Navbar />
        <div className="content-page">
          <Sidebar />
          <p>Мир</p>
          <AppRouter />
        </div>
      </Suspense>
    </div>
  );
};

export default App;
