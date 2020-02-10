import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Posts from 'components/modules/posts/posts'
import PostDetails from 'components/modules/postDetails/postDetails';
import HomeScreen from 'components/screens/home/home';
import SearchResultScreen from 'components/screens/searchResults/searchResults';
import PartnerProfileScreen from 'components/screens/partnerScreen/partnerScreen';
import QRScreen from 'components/screens/QRScreen/QRScreen';
import LoginScreen from 'components/screens/loginScreen/loginScreen';

const Routes = () => {
  return (
    <Switch>
      <Route
        exact
        path="/"
        component={LoginScreen}
      />
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
        path="/partners/:partnerId"
        render={(props) => (<PartnerProfileScreen {...props} />)}
      />
      <Route
        exact
        path="/home"
        component={HomeScreen}
      />
      <Route
        exact
        path="/qr"
        component={QRScreen}
      />

    </Switch>
  );
};

export default Routes;
