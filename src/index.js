import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import PetListContext from './PetListContext';

ReactDOM.render(
<PetListContext>
    <App />
</PetListContext>, document.getElementById('root'));
