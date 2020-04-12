import React from 'react'
import RootNavigator from './navigator'
import {
  Provider as PaperProvider,
  DefaultTheme,
  DarkTheme
} from 'react-native-paper'
import { Provider as StoreProvider } from 'react-redux'
import { useColorScheme } from 'react-native-appearance'
import { Updates } from 'expo'
import store from './store'
import { I18nManager } from 'react-native'
import { PreferencesContext } from './context/preferencesContext'

export default function App() {
  const colorScheme = useColorScheme()
  const [theme, setTheme] = React.useState<'light' | 'dark'>(
    colorScheme === 'dark' ? 'dark' : 'light'
  )
  const [rtl] = React.useState<boolean>(I18nManager.isRTL)

  function toggleTheme() {
    setTheme(t => (t === 'light' ? 'dark' : 'light'))
  }

  const toggleRTL = React.useCallback(() => {
    I18nManager.forceRTL(!rtl)
    Updates.reloadFromCache()
  }, [rtl])

  const preferences = React.useMemo(
    () => ({
      toggleTheme,
      toggleRTL,
      theme,
      rtl: (rtl ? 'right' : 'left') as 'right' | 'left'
    }),
    [rtl, theme, toggleRTL]
  )

  return (
    <StoreProvider store={store}>
      <PreferencesContext.Provider value={preferences}>
        <PaperProvider
          theme={
            theme === 'light'
              ? {
                  ...DefaultTheme,
                  colors: { ...DefaultTheme.colors, primary: '#1ba1f2' }
                }
              : {
                  ...DarkTheme,
                  colors: { ...DarkTheme.colors, primary: '#1ba1f2' }
                }
          }
        >
          <RootNavigator />
        </PaperProvider>
      </PreferencesContext.Provider>
    </StoreProvider>
  )
}
