//型定義
export type Team = {
  id: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
  name: string;
  emblem: {
    url: string;
  };
  league: string[];
};
export type TeamResponse = {
  totalCount: number;
  offset: number;
  limit: number;
  contents: Team[];
};
export type Nationality = {
  id: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
  name: string;
  flag: {
    url: string;
  };
};
export type NationalityResponse = {
  totalCount: number;
  offset: number;
  limit: number;
  contents: Nationality[];
};
export type Player = {
  id: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
  name: string;
  team: Team;
  nationality: Nationality;
  position: string[];
  image: {
    url: string;
  };
};
export type PlayerResponse = {
  totalCount: number;
  offset: number;
  limit: number;
  contents: Player[];
};
