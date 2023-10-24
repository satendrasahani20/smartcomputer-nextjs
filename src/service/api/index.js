import { commonApi } from "./commonApi";
import { adminApi } from "./adminApi";
import { clientApi } from "./clientApi";
import { developerApi } from "./studentApi";

export const appApi = {
  ...commonApi,
  ...adminApi,
  ...clientApi,
  ...developerApi,
};
