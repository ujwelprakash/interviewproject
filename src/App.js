import React from 'react';
import { Provider } from 'react-redux';
import { store } from './pages/store';
import HeaderForm from './components/Headerform';
import DetailForm from './components/Detailform';
import Printform from './components/Printform';

function App() {
    return ( <
        Provider store = { store } >
        <
        div className = "container mt-4" >
        <
        HeaderForm / >
        <
        DetailForm / >
        <
        Printform / >
        <
        /div> <
        /Provider>
    );
};

export default App;