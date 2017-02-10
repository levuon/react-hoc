import 'babel-polyfill'
import React from 'react';
import { render } from 'react-dom';

import Container from './container/Container.js'


render(
    <Container />,
    document.getElementById('root')
);
