import React from 'react';
import LandingPage from './pages/LandingPage';
import { store } from './store/store';
import { Provider } from 'react-redux';
import './assets/styles/main.scss';
import Header from './layout/header/Header';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

const App: React.FC = () => {
  return (
    <DndProvider backend={HTML5Backend}>
      <Provider store={store}>
        <Header />
        <LandingPage />
      </Provider>
    </DndProvider>
  );
};

export default App;
