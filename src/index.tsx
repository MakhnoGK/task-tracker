import React from 'react';
import { render } from 'react-dom';
import { ChakraProvider } from '@chakra-ui/react';
import App from "./components/app";

const appContainer = document.getElementById('app');

appContainer && render(
    <ChakraProvider resetCSS>
        <App />
    </ChakraProvider>,
    appContainer
);
