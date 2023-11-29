import axios from "axios";
import { apiKeys, apiUrls } from "../config";
import { normlaizeNewYorkApiData, normlaizeGuardianApiData } from "./apiUtils";
import { NewsSources, PageSize } from "../common/constant";
const calculateNumberOfPages = (totalHits, resultsPerPage) =>
  Math.ceil(totalHits / resultsPerPage);

export const fetchNews = async (searchOptions) => {
  const FUNC_NAME = "fetchNews";
  const { searchSource } = searchOptions;
  let newsData, dataRecived;
  try {
    switch (searchSource) {
      case NewsSources.NEW_YORK_API:
        dataRecived = await fetchNewYorkApiNews(searchOptions);
        const { pages: nyPages, list: nyList } = dataRecived;
        const normlaizeDataNewsListNY = normlaizeNewYorkApiData(nyList);
        newsData = { newsList: normlaizeDataNewsListNY, pages: nyPages };
        break;

      case NewsSources.GUARDIAN_API:
        dataRecived = await fetchGuardianApiNews(searchOptions);
        const { pages: guardianPages, list: guardianList } = dataRecived;
        const normlaizeDataNewsListGuardian =
          normlaizeGuardianApiData(guardianList);
        newsData = {
          newsList: normlaizeDataNewsListGuardian,
          pages: guardianPages,
        };
        break;

      case NewsSources.NEWS_API:
        dataRecived = await fetchOpenApiNews(searchOptions);
        const { pages: newsPages, list: newsList } = dataRecived;
        newsData = {
          newsList: newsList,
          pages: newsPages,
        };
        break;
    }
    return newsData;
  } catch (err) {
    console.error(`${FUNC_NAME}-err`, err);
  }

  // call all 3 apis
};
export const fetchOpenApiNews = async (searchOptions) => {
  const {
    searchTerm,
    pageTosearch,
    searchCategory,
    // fromDate,
    // toDate,
    searchSource,
  } = searchOptions;
  const API_KEY = apiKeys[`${searchSource}`];
  const BASE_URL = apiUrls[`${searchSource}`];
  try {
    const params = {
      q: searchTerm,
      apiKey: API_KEY,
      page: pageTosearch,
      pageSize: PageSize,
    };
    if (searchCategory) {
      params["category"] = searchCategory;
    }
    // doesnot support date
    // if (fromDate) {
    //   params["from"] = searchCategory;
    // }
    // if (toDate) {
    //   params["to"] = searchCategory;
    // }

    const response = await axios.get(BASE_URL, {
      params,
    });

    const list = response?.data?.articles || [];
    const hits = response?.data?.totalResults || 1;
    const pages = calculateNumberOfPages(hits, PageSize);
    return { list, pages };
  } catch (error) {
    console.error("Error fetching news:", error);
  }
};
export const fetchNewYorkApiNews = async (searchOptions) => {
  const { searchTerm, pageTosearch, searchCategory, fromDate, toDate } =
    searchOptions;

  const API_KEY = apiKeys[`${NewsSources.NEW_YORK_API}`];
  const BASE_URL = apiUrls[`${NewsSources.NEW_YORK_API}`];

  try {
    const params = {
      "api-key": API_KEY,
      q: searchTerm,
      page: pageTosearch,
    };
    if (searchCategory) {
      params["category"] = searchCategory;
    }
    if (fromDate) {
      params["begin_date"] = fromDate;
    }
    if (toDate) {
      params["end_date"] = toDate;
    }

    const response = await axios.get(BASE_URL, {
      params,
    });

    const res = response.data?.response;
    const list = res.docs;
    const hits = res?.meta?.hits;
    const pages = calculateNumberOfPages(hits, PageSize);

    return { list, pages };
  } catch (error) {
    console.error("Error fetching news:", error);
  }
};

export const fetchGuardianApiNews = async (searchOptions) => {
  const { searchTerm, pageTosearch, searchCategory, fromDate, toDate } =
    searchOptions;

  const API_KEY = apiKeys[`${NewsSources.GUARDIAN_API}`];
  const BASE_URL = apiUrls[`${NewsSources.GUARDIAN_API}`];

  try {
    const params = {
      "api-key": API_KEY,
      q: searchTerm,
      page: pageTosearch,
    };
    if (searchCategory) {
      params["section"] = searchCategory;
    }
    if (fromDate) {
      params["from-date"] = fromDate;
    }
    if (toDate) {
      params["to-date"] = toDate;
    }

    const response = await axios.get(BASE_URL, {
      params,
    });
    const res = response?.data?.response || "";
    const pages = res?.pages;
    const list = response?.data?.response?.results || [];

    return { list, pages };
  } catch (error) {
    console.error("Error fetching news:", error);
  }
};
