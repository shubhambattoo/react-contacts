import React, { lazy, Suspense } from 'react';
import './App.css';
// import Header from './components/Header';
// import AddContact from './components/AddContact';
// import ContactList from './components/ContactList';
import { Provider } from 'react-redux';
import store from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';
const Header = lazy(() => import('./components/Header'));
const AddContact = lazy(() => import('./components/AddContact'));
const ContactList = lazy(() => import('./components/ContactList'));

function App() {
  return (
    <Provider store={store().store}>
      <PersistGate loading={null} persistor={store().persistor}>
        <Suspense fallback={<div>Loading...</div>}>
          <Header />
          <div className="container">
            <div className="row">
              <div className="col-md-4">
                <AddContact />
              </div>
              <div className="col-md-8">
                <ContactList />
              </div>
            </div>
          </div>
        </Suspense>
      </PersistGate>
    </Provider>
  );
}

export default App;
