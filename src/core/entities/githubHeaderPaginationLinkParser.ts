export interface PaginationLinkParser {
  parsePaginationLink: (
    paginationLink: string
  ) => { nextPage: number; lastPage: number };
}

export class GithubHeaderPaginationLinkParser implements PaginationLinkParser {
  public parsePaginationLink(paginationLink: string) {
    return this.parse(paginationLink);
  }

  private parse(
    paginationLink: string
  ): { nextPage: number; lastPage: number } {
    if (!paginationLink) {
      return {
        nextPage: 1,
        lastPage: 1,
      };
    }

    const links = paginationLink.split(', ');
    const nextLink = links.find((link) => link.includes('rel="next"'));
    const lastLink = links.find((link) => link.includes('rel="last"'));

    let nextPage;
    let lastPage;

    if (nextLink) {
      nextPage = this.getPageNumberFromPaginationLink(nextLink);
    }

    if (lastLink) {
      lastPage = this.getPageNumberFromPaginationLink(lastLink);
    }

    return {
      nextPage: nextPage ?? 1,
      lastPage: lastPage ?? 1,
    };
  }

  private getPageNumberFromPaginationLink(link: string): number | null {
    const matchedPageQueryParam = link.match(/&page=\d+(?!.*&page=\d+)/);

    if (matchedPageQueryParam && matchedPageQueryParam[0]) {
      return +matchedPageQueryParam[0].split('=')[1];
    }

    return null;
  }
}
