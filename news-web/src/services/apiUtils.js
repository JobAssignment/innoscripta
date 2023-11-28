import { NewsSources } from "../common/constant";

const normlaizeData1 = (apiData) => {};
const normlaizeNewYorkApiData = (apiData) => {
  console.log("newYorkData", apiData);
  return apiData.map((data) => {
    return {
      description: data?.abstract,
      title: data?.headline?.main,
      url: data?.web_url,
      source: {
        id: data?.source?.toLowerCase().replace(/\s+/g, "-"),
        name: data.source,
      },
      author: data?.byline?.original,
      apiUsed: NewsSources.NEW_YORK_API,
    };
  });
};
const normlaizeGuardianApiData = (apiData) => {
  console.log("normlaizeGuardianApiData", apiData);
  return apiData.map((data) => {
    return {
      description: data?.webTitle,
      title: data?.webTitle,
      url: data?.webUrl,
      source: {
        id: data?.source?.toLowerCase().replace(/\s+/g, "-"),
        name: data.source,
      },
      author: data?.byline?.original,
      apiUsed: NewsSources.GUARDIAN_API,
    };
  });
};
const normlaizeData3 = (apiData) => {};
export { normlaizeNewYorkApiData, normlaizeGuardianApiData };
