import { Organization, Repository } from '../../../entities/dataEntities';
import {
  setOrganizations,
  setRepositories,
} from '../../actions/data/data.actions';
import { dataReducer, DataState } from '../dataReducer';

describe('dataReducer', () => {
  let initialState: DataState = {
    type: 'repository',
    total_count: 0,
    items: [],
    meta: {
      nextPage: 0,
      lastPage: 0,
    },
  };

  const repoItem: Repository = {
    id: '1',
    full_name: 'name',
    description: 'desc',
    language: 'English',
    html_url: 'url',
    updated_at: 'updatedAt',
    stargazers_count: 124,
    license: {
      name: 'MIT',
      url: 'url',
    },
  };

  const orgItem: Organization = {
    id: 'id',
    login: 'login',
    name: 'name',
    description: 'description',
    html_url: 'html_url',
    avatar_url: 'avatar_url',
  };

  it('updates the state when new repositories data arrive', () => {
    const setReposAction = setRepositories({
      ...initialState,
      type: 'repository',
      total_count: 1,
      items: [repoItem],
    });

    const newState = dataReducer(initialState, setReposAction);

    expect(newState.type).toEqual('repository');
    expect(newState.total_count).toEqual(1);
    expect(newState.items.length).toEqual(1);
    expect(newState.items[0]).toMatchObject(repoItem);
  });

  it('updates the state when new organizations data arrive', () => {
    const setOrgsAction = setOrganizations({
      ...initialState,
      type: 'organization',
      total_count: 1,
      items: [orgItem],
    });

    const newState = dataReducer(initialState, setOrgsAction);

    expect(newState.type).toEqual('organization');
    expect(newState.total_count).toEqual(1);
    expect(newState.items.length).toEqual(1);
    expect(newState.items[0]).toMatchObject(orgItem);
  });
});
