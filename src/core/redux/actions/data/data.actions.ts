import { ActionCreator } from 'redux';
import {
  DataActions,
  OrganizationsSearchPayload,
  ReposSearchPayload,
} from './data.types';

export const REPOS_LOADED = 'REPOS_LOADED' as const;
export const REPOS_LOADING = 'REPOS_LOADING' as const;
export const ORGANIZATIONS_LOADED = 'ORGANIZATIONS_LOADED' as const;
export const ORGANIZATIONS_LOADING = 'ORGANIZATIONS_LOADING' as const;

export const setRepositories: ActionCreator<DataActions> = (
  data: ReposSearchPayload
) => ({
  type: REPOS_LOADED,
  payload: data,
});

export const setOrganizations: ActionCreator<DataActions> = (
  data: OrganizationsSearchPayload
) => ({
  type: ORGANIZATIONS_LOADED,
  payload: data,
});
