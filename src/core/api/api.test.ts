import axios, { AxiosInstance } from 'axios';
import MockAdapter from 'axios-mock-adapter';

import { GithubApi } from './api';

const baseURL = 'https://api.github.com';
const getRepositoriesUrl = `${baseURL}/search/repositories?q=test&page=1&per_page=10`;
const getOrganizationsUrl = `${baseURL}/search/users?q=test+type:org&page=1&per_page=10`;
const getOrganizationDetailsUrl = `${baseURL}/orgs/test`;

describe('GithubApi class performs correct requests', () => {
  let githubApi: GithubApi;
  let axiosInstance: AxiosInstance;
  let mock: MockAdapter;

  const mockReposResponse = {
    total_count: 1,
    items: [
      {
        id: 'id',
        full_name: 'full_name',
        description: 'description',
        language: 'language',
        html_url: 'html_url',
        updated_at: 'updated_at',
        stargazers_count: 'stargazers_count',
        license: 'license',
      },
    ],
    meta: {
      nextPage: 2,
      lastPage: 3,
    },
  };

  const mockOrgsResponse = {
    total_count: 1,
    items: [
      {
        id: 'id',
        login: 'login',
        name: '',
        description: '',
        html_url: 'html_url',
        avatar_url: 'avatar_url',
      },
    ],
    meta: {
      nextPage: 2,
      lastPage: 3,
    },
  };

  const mockDetailsResponse = {
    id: 1,
    name: 'test',
    avatar_url: 'url',
    description: 'description',
    html_url: 'html_url',
  };

  beforeAll(() => {
    axiosInstance = axios.create({ baseURL });
    mock = new MockAdapter(axiosInstance, { delayResponse: 200 });
    githubApi = new GithubApi({ client: axiosInstance, PER_PAGE: 10 });

    mock.onGet(getRepositoriesUrl).reply(200, mockReposResponse, {
      link: `<https://api.github.com/search/repositories?q=test&page=2>; rel="next", <https://api.github.com/search/repositories?q=test&page=3>; rel="last"`,
    });
    mock.onGet(getOrganizationsUrl).reply(200, mockOrgsResponse, {
      link: `<https://api.github.com/search/users?q=test+type%3Aorg&page=2>; rel="next", <https://api.github.com/search/users?q=test+type%3Aorg&page=3>; rel="last"`,
    });
    mock.onGet(getOrganizationDetailsUrl).reply(200, mockDetailsResponse);
  });

  afterAll(() => {
    mock.reset();
    mock.restore();
  });

  it('successfully /GET repositories from GitHub API', async () => {
    const data = await githubApi.getRepos({ query: 'test' });
    expect(data).toMatchObject(mockReposResponse);
  });

  it('successfully /GET organizations from GitHub API', async () => {
    const data = await githubApi.getOrganizations({ query: 'test' });
    expect(data).toMatchObject(mockOrgsResponse);
  });

  it('successfully /GET organization details from GitHub API', async () => {
    const data = await githubApi.getOrganization('test');
    expect(data).toMatchObject(mockDetailsResponse);
  });
});
