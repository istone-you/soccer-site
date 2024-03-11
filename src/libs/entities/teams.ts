// SDK利用準備
import { client } from "../client";

import type { MicroCMSQueries } from "microcms-js-sdk";
import type { Team, TeamResponse } from "../types";

//チーム一覧取得
export const getTeams = async (queries?: MicroCMSQueries) => {
  return await client.get<TeamResponse>({ endpoint: "teams", queries });
};
//チーム詳細取得
export const getTeamDetail = async (
  contentId: string,
  queries?: MicroCMSQueries
) => {
  return await client.getListDetail<Team>({
    endpoint: "teams",
    contentId,
    queries,
  });
};
