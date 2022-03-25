import React from 'react'
import { render } from 'react-dom'
import { ChakraProvider } from '@chakra-ui/react'
import App from './components/app'
import { TasksContextProvider } from './features/tasks/components/tasks.context-provider'

const appContainer = document.getElementById('app')

appContainer && render(
  <TasksContextProvider>
    <ChakraProvider resetCSS>
      <App/>
    </ChakraProvider>
  </TasksContextProvider>,
  appContainer
)
