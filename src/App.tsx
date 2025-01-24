import React from 'react';
import LandingPage from './pages/LandingPage';
import { store } from './store/store';
import { Provider } from 'react-redux';
import './assets/styles/main.scss';
import Header from './layout/header/Header';

const App: React.FC = () => {
  return (
    <div>
      <Provider store={store}>
        <Header />
        <LandingPage />
      </Provider>
    </div>
  );
};

export default App;
