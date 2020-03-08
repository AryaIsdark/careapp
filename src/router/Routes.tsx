import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Posts from 'components/modules/posts/posts'
import PostDetails from 'components/modules/postDetails/postDetails';
import HomeScreen from 'components/screens/home/home';
import SearchResultScreen from 'components/screens/searchResults/searchResults';
import PartnerProfileScreen from 'components/screens/partnerScreen/partnerScreen';
import QRScreen from 'components/screens/QRScreen/QRScreen';
import UserProfile from 'components/screens/userProfile/userProfile';
import AdminPanel from 'components/screens/adminPanel/adminPanel';
import PartnerForm from 'components/modules/partnerForm/partnerForm';

const Routes = () => {
  return (
    <Switch>
      <Route
        exact
        path="/"
        component={AdminPanel}
      />
      <Route
        exact
        path="/admin-panel/partners"
        component={AdminPanel}
      />
      <Route
        exact
        path="/admin-panel/partners/:id"
        render={
          (props) => (<PartnerForm backUrl={'/admin-panel/partners'} {...props} />)
        }
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
        path="/qr"
        component={QRScreen}
      />
      <Route
        path="/profile"
        component={UserProfile}
      />

    </Switch>
  );
};

export default Routes;
