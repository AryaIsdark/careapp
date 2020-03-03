import React, { Suspense } from 'react'
import 'antd/dist/antd.css'
import './App.css'
import { useSelector } from 'react-redux'
import Routes from 'router/Routes'
import { useTranslation } from 'react-i18next'
import AppHeader from 'components/structure/header/header'
import * as meSelectors from 'store/me/selectors'
import AppMenu from 'components/structure/menu/menu'

const App = () => {
  const { t } = useTranslation('preload', { useSuspense: false })
  const { userInfo, bookingInfo } = useSelector(meSelectors.data)

  return (
    <div className="App">
      <AppHeader userInfo={userInfo} bookingInfo={bookingInfo} />}
        <Suspense fallback={t('loading...')}>
        <div className={'app-layout-page'}>
          <Routes />
        </div>
      </Suspense>
      <AppMenu userInfo={userInfo} ></AppMenu>}
      </div>
  );
}

export default App;
