import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { PetListProvider } from './PetListContext';

ReactDOM.render(
<PetListProvider>
    <App />
</PetListProvider>, document.getElementById('root'));
