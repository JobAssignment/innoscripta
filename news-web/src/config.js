import {NewsSources} from "./common/constant"

const apiKeys = {
  [`${NewsSources.NEWS_API}`]:
    "b54fe0809f3e417ab243e7823e580a14" || "d2e6413809094cdbbe2e8a670eb00cd2",
    [`${NewsSources.NEW_YORK_API}`]: "OV8TF6nXulmHStgNGrcfmDl2xm0j0lMK",
    [`${NewsSources.GUARDIAN_API}`]: "2d532acb-80ce-41dc-93ca-96e6354da216",
};
const apiUrls = {
  [`${NewsSources.NEWS_API}`]: " https://newsapi.org/v2/top-headlines",
  [`${NewsSources.NEW_YORK_API}`]: "https://api.nytimes.com/svc/search/v2/articlesearch.json",
  [`${NewsSources.GUARDIAN_API}`]: "https://content.guardianapis.com/search",
};

export { apiKeys, apiUrls };
