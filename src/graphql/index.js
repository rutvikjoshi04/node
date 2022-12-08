import { createClient, cacheExchange, dedupExchange } from "urql";
import { multipartFetchExchange } from "@urql/exchange-multipart-fetch";

export const client = createClient({
  url: `${process.env.BASE_URL}/graphql`,
  exchanges: [dedupExchange, cacheExchange, multipartFetchExchange],
});
