import {
  CREATOR_RETRIEVED, 
  CREATOR_FETCH,
  CURRENT_CREATOR_RETRIEVED,
  CREATORS_RETRIEVED,
  CREATOR_NOTIFICATION_LIST_RETRIEVED,
  SET_CREATOR_AS_FOLLOWED,
  SET_CREATOR_NOT_FOLLOWED,
  CREATOR_FOLLOWERS_RETRIEVED,
  CREATORS_FETCH
} from '../actions';
import { Creator, CreatorShort } from '@xr3ngine/common/src/interfaces/Creator';

export interface CreatorRetrievedAction {
  type: string;
  creator: Creator;
}
export interface CreatorsRetrievedAction{
  type: string;
  creators: CreatorShort[];
}

export interface FetchingCreatorAction {
  type: string;
}
export interface CreatorsNotificationsRetrievedAction{
  type: string;
  notifications: any[];
}

export type CreatorsAction =
CreatorRetrievedAction
  | FetchingCreatorAction
  | CreatorsRetrievedAction

export function creatorLoggedRetrieved(creator: Creator): CreatorRetrievedAction {
  return {
    type: CURRENT_CREATOR_RETRIEVED,
    creator
  };
}

export function creatorRetrieved (creator: Creator): CreatorRetrievedAction {
  return {
    type: CREATOR_RETRIEVED,
    creator
  };
}

export function fetchingCreators (): FetchingCreatorAction {
  return {
    type: CREATORS_FETCH
  };
}

export function fetchingCreator (): FetchingCreatorAction {
  return {
    type: CREATOR_FETCH
  };
}

export function creatorsRetrieved (creators: CreatorShort[]) : CreatorsRetrievedAction {
  return {
    type: CREATORS_RETRIEVED,
    creators
  };
}


export function creatorNotificationList (notifications: any[]) : CreatorsNotificationsRetrievedAction {
  return {
    type: CREATOR_NOTIFICATION_LIST_RETRIEVED,
    notifications
  };
}


export function updateCreatorAsFollowed (): FetchingCreatorAction {
  return {
    type: SET_CREATOR_AS_FOLLOWED
  };
}

export function updateCreatorNotFollowed (): FetchingCreatorAction {
  return {
    type: SET_CREATOR_NOT_FOLLOWED
  };
}

export function creatorFollowers(creators: CreatorShort[]) : CreatorsRetrievedAction {
  return {
    type: CREATOR_FOLLOWERS_RETRIEVED,
    creators
  };
}

export function creatorFollowing(creators: CreatorShort[]) : CreatorsRetrievedAction {
  return {
    type: CREATOR_FOLLOWERS_RETRIEVED,
    creators
  };
}