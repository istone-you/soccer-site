// SDK利用準備
import { client } from "../client";

import type { MicroCMSQueries } from "microcms-js-sdk";
import type { Nationality, NationalityResponse } from "../types";

//国籍一覧取得
export const getNationalities = async (queries?: MicroCMSQueries) => {
  return await client.get<NationalityResponse>({
    endpoint: "nationalities",
    queries,
  });
};
//国籍詳細取得
export const getNationalityDetail = async (
  contentId: string,
  queries?: MicroCMSQueries
) => {
  return await client.getListDetail<Nationality>({
    endpoint: "nationalities",
    contentId,
    queries,
  });
};
