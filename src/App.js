import React from 'react';
import './App.css';
import { Header } from './components/Header';
import AddContact from './components/AddContact';
import ContactList from './components/ContactList';
import { Provider } from 'react-redux';
import store from './redux/store';

function App() {
  return (
    <Provider store={store}>
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
    </Provider>
  );
}

export default App;
