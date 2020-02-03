import React, { Suspense, useEffect } from 'react'
import 'antd/dist/antd.css'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import Routes from 'router/Routes'
import { useTranslation } from 'react-i18next'
import AppHeader from 'components/structure/header/header'
import * as meActions from 'store/me/actions'
import * as meSelectors from 'store/me/selectors'

const App = () => {
  const { t } = useTranslation('preload', { useSuspense: false })
  const dispatch = useDispatch()
  const { userInfo, bookingInfo } = useSelector(meSelectors.data)

  useEffect(() => {
    dispatch(meActions.loadData())
  }, [dispatch])

  return (
    <div className="App">
      <AppHeader userInfo={userInfo} bookingInfo={bookingInfo}  />
      <Suspense fallback={t('loading...')}>
        <div className={'app-layout-page'}>
          <Routes />
        </div>
      </Suspense>
    </div>
  );
}

export default App;
