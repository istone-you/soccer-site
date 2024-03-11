// SDK利用準備
import { createClient } from "microcms-js-sdk";

// clientの作成
export const client = createClient({
  serviceDomain: import.meta.env.MICROCMS_SERVICE_DOMAIN,
  apiKey: import.meta.env.MICROCMS_API_KEY,
});
