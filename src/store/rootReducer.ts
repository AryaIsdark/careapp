import { combineReducers } from 'redux';
import posts from './posts/reducer';
import { PostsState } from './posts/types';
import postDetails from './postDetails/reducer';
import { PostDetailsState } from './postDetails/types';
import comments from './comments/reducer';
import { CommentsState } from './comments/types';
import me from './me/reducer';
import { MeState } from './me/types';
import partners from './partners/reducer';
import { PartnersState } from './partners/types';


export interface AppState {
  posts: PostsState;
  postDetails: PostDetailsState;
  comments: CommentsState;
  me : MeState
  partners: PartnersState
}

const rootReducer = combineReducers<any>({
  posts,
  postDetails,
  comments, 
  me,
  partners
});

export default rootReducer;
