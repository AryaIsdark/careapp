import React, { Suspense, useEffect } from 'react'
import 'antd/dist/antd.css'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import Routes from 'router/Routes'
import { useTranslation } from 'react-i18next'
import AppHeader from 'components/structure/header/header'
// import * as meActions from 'store/me/actions'
import * as meSelectors from 'store/me/selectors'
import AppMenu from 'components/structure/menu/menu'
import history from 'router/history'

const App = () => {
  const { t } = useTranslation('preload', { useSuspense: false })
  // const dispatch = useDispatch()
  const { userInfo, bookingInfo } = useSelector(meSelectors.data)
  const isLoggedIn = useSelector(meSelectors.isLoggedIn)

  useEffect(() => {
    if(isLoggedIn) {
      history.replace('/area/2830')
    }
    else{
      history.replace('/')
    }
  }, [isLoggedIn])

  return (
      <div className="App">
        {isLoggedIn &&
        <AppHeader userInfo={userInfo} bookingInfo={bookingInfo} />}
        <Suspense fallback={t('loading...')}>
          <div className={'app-layout-page'}>
            <Routes />
          </div>
        </Suspense>
        {isLoggedIn &&
        <AppMenu userInfo={userInfo} ></AppMenu>}
      </div>
  );
}

export default App;
