import Immutable from 'immutable';
import {
  CreatorsAction,
  CreatorRetrievedAction,
  CreatorsRetrievedAction,
  CreatorsNotificationsRetrievedAction
} from './actions';

import {
  CREATORS_RETRIEVED,
  CREATOR_FETCH,
  CREATOR_FOLLOWERS_RETRIEVED,
  CREATOR_NOTIFICATION_LIST_RETRIEVED,
  CREATOR_RETRIEVED,
  CURRENT_CREATOR_RETRIEVED,
  SET_CREATOR_AS_FOLLOWED,
  SET_CREATOR_NOT_FOLLOWED,
  CREATOR_FOLLOWING_RETRIEVED,
  CREATORS_FETCH
} from '../actions';

export const initialCreatorState = {
  creators: {
    creators: [],
    creator: {},
    currentCreator: {},
    currentCreatorNotifications: {},
    followers:[],
    following: [],
    fetching: false
  },
};

const immutableState = Immutable.fromJS(initialCreatorState);

const creatorReducer = (state = immutableState, action: CreatorsAction): any => {
  switch (action.type) {
    case CREATORS_FETCH : return state.set('fetching', true).set('creators',[]);
    
    case CREATOR_FETCH : return state.set('fetching', true).set('creator',{});

    case CREATORS_RETRIEVED:
      return state.set('creators', (action as CreatorsRetrievedAction).creators).set('fetching', false);

    case CURRENT_CREATOR_RETRIEVED:
      return state.set('currentCreator', (action as CreatorRetrievedAction).creator).set('fetching', false);

    case CREATOR_RETRIEVED: 
    console.log('CREATOR_RETRIEVED', (action as CreatorRetrievedAction).creator);
      return state.set('creator', (action as CreatorRetrievedAction).creator).set('fetching', false);

    case CREATOR_NOTIFICATION_LIST_RETRIEVED:
      return state.set('currentCreatorNotifications', (action as CreatorsNotificationsRetrievedAction).notifications).set('fetching', false);

    case SET_CREATOR_AS_FOLLOWED:
      return state.set('creator', {...state.get('creator'), followed:true});
    
    case SET_CREATOR_NOT_FOLLOWED:
        return state.set('creator', {...state.get('creator'), followed:false});

    case CREATOR_FOLLOWERS_RETRIEVED:
        return state.set('followers', (action as CreatorsRetrievedAction).creators);

    case CREATOR_FOLLOWING_RETRIEVED:
      return state.set('following', (action as CreatorsRetrievedAction).creators);

  }
  return state;
};

export default creatorReducer;
