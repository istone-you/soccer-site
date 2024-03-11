// SDK利用準備
import { client } from "../client";

import type { MicroCMSQueries } from "microcms-js-sdk";
import type { Player, PlayerResponse } from "../types";

//選手一覧取得
export const getPlayers = async (queries?: MicroCMSQueries) => {
  return await client.get<PlayerResponse>({
    endpoint: "players",
    queries,
  });
};
//選手詳細取得
export const getPlayerDetail = async (
  contentId: string,
  queries?: MicroCMSQueries
) => {
  return await client.getListDetail<Player>({
    endpoint: "players",
    contentId,
    queries,
  });
};
