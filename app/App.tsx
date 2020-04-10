import React from 'react'
import RootNavigator from './navigator'
import { Provider as PaperProvider } from 'react-native-paper'
import { Provider as StoreProvider } from 'react-redux'
import store from './store'

export default function App() {
  return (
    <StoreProvider store={store}>
      <PaperProvider>
        <RootNavigator />
      </PaperProvider>
    </StoreProvider>
  )
}
