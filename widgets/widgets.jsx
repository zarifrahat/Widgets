import React from 'react';
import ReactDOM from 'react-dom';
import Clock from './clock';
import {Root} from './root';
import Tabs from './tabs';
import Header from "./header"


document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById("root");
    ReactDOM.render(<Root />, root);

});