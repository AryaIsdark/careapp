import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Posts from 'components/modules/posts/posts'
import PostDetails from 'components/modules/postDetails/postDetails';
import HomeScreen from 'components/screens/home/home';
import SearchResultScreen from 'components/screens/searchResults/searchResults';
import QRScan from 'components/screens/qrScan/qrScan';


const Routes = () => {
  return (
    <Switch>
      <Route
        exact
        path="/posts"
        component={Posts}
      />
      <Route
        exact
        path="/posts/:postId"
        render={(props) => (<PostDetails {...props} />)}
      />
      <Route
        exact
        path="/area/:areaCode"
        render={(props) => (<SearchResultScreen {...props} />)}
      />
      <Route
        exact
        path="/home"
        component={HomeScreen}
      />
      <Route
        exact
        path="/qr"
        component={QRScan}
      />
    </Switch>
  );
};

export default Routes;
