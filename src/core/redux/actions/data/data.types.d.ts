import { Action } from 'redux';
import { GithubSearchResponse } from '../../../api/api';
import { Repository } from '../../../entities/repository.interface';
import { Organization } from '../../../entities/organizarion.interface';
import { REPOS_LOADED, ORGANIZATIONS_LOADED } from './repo.actions';

export type ReposSearchPayload = GithubSearchResponse<Repository>;

export type OrganizationsSearchPayload = GithubSearchResponse<Organization>;

interface SetRepos extends Action<typeof REPOS_LOADED> {
  payload: ReposSearchPayload;
}

interface SetOrganizations extends Action<typeof ORGANIZATIONS_LOADED> {
  payload: OrganizationsSearchPayload;
}

export type DataActions = SetOrganizations | SetRepos;
