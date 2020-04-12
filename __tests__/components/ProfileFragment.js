import 'react-native'
import React from 'react'
import ProfileFragment from '../../app/components/ProfileFragment'
import { Provider as PaperProvider } from 'react-native-paper'
import { Provider as StoreProvider } from 'react-redux'
import store from '../../app/store'

import renderer from 'react-test-renderer'

describe('ProfileFragment', () => {
  it('renders properly', () => {
    renderer.create(
      <StoreProvider store={store}>
        <PaperProvider>
          <ProfileFragment />
        </PaperProvider>
      </StoreProvider>
    )
  })
})
