export interface Organization {
  id: string;
  login: string;
  name: string;
  description: string;
  html_url: string;
  avatar_url: string;
}

export interface Repository {
  id: string;
  full_name: string;
  description?: string;
  language?: string;
  html_url: string;
  updated_at: string;
  stargazers_count: number;
  license?: {
    name: string;
    url: string;
  };
}

export type DataEntities = Organization | Repository;
