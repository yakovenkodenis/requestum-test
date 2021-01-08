import { GithubHeaderPaginationLinkParser } from '../githubHeaderPaginationLinkParser';

describe('GithubHeaderPaginationLinkParser', () => {
  let parser: GithubHeaderPaginationLinkParser;
  beforeAll(() => {
    parser = new GithubHeaderPaginationLinkParser();
  });

  it('parses the github pagination link headers correctly', () => {
    const linkHeader1 = `<https://api.github.com/search/users?q=test+type%3Aorg&page=2>; rel="next", <https://api.github.com/search/users?q=test+type%3Aorg&page=34>; rel="last"`;
    const expectedNextPage1 = 2;
    const expectedLastPage1 = 34;
    const {
      nextPage: nextPage1,
      lastPage: lastPage1,
    } = parser.parsePaginationLink(linkHeader1);

    expect(nextPage1).toEqual(expectedNextPage1);
    expect(lastPage1).toEqual(expectedLastPage1);

    const linkHeader2 = `<https://api.github.com/search/repositories?q=test&page=4>; rel="prev", <https://api.github.com/search/repositories?q=test&page=6>; rel="next", <https://api.github.com/search/repositories?q=test&page=34>; rel="last", <https://api.github.com/search/repositories?q=test&page=1>; rel="first"`;
    const expectedNextPage2 = 6;
    const expectedLastPage2 = 34;
    let {
      nextPage: nextPage2,
      lastPage: lastPage2,
    } = parser.parsePaginationLink(linkHeader2);

    expect(nextPage2).toEqual(expectedNextPage2);
    expect(lastPage2).toEqual(expectedLastPage2);
  });
});
