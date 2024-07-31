import { fetchArticles } from "./newsApi";
import { fetchGuardianArticles } from "./guardianApi";
import { fetchNYTimesArticles } from "./nyTimesApi";

export const fetchArticlesFromAllSources = async (filters, preferences) => {
  const [newsApiArticles, guardianArticles, nyTimesArticles] =
    await Promise.all([
      fetchArticles(
        filters.query,
        filters.category,
        filters.date,
        filters.source
      ),
      fetchGuardianArticles(filters.query, filters.category, filters.date),
      fetchNYTimesArticles(filters.query, filters.category, filters.date),
    ]);

  let articles = [
    ...newsApiArticles.map((el) => {
      return {
        title: el?.title,
        url: el?.url,
        source: {
          name: el?.source?.name,
        },
        description: el?.description,
        date: el?.publishedAt,
        author: el?.author,
      };
    }),
    ...guardianArticles.map((el) => {
      return {
        title: el?.webTitle,
        url: el?.webUrl,
        source: {
          name: el?.pillarName,
        },
        description: el?.description,
        date: el?.webPublicationDate,
        author: el?.author,
      };
    }),
    ...nyTimesArticles.map((el) => {
      return {
        title: el?.headline?.main,
        url: el?.web_url,
        source: {
          name: el?.source,
        },
        description: el?.abstract,
        date: el?.pub_date,
        author: el?.author,
      };
    }),
  ];
  if (preferences.sources.length > 0 && preferences.sources?.[0] !== "") {
    articles = articles.filter(
      (article) => preferences.sources[0] == article.source.name
    );
  }

  if (preferences.authors.length > 0 && preferences.authors?.[0] !== "") {
    articles = articles.filter((article) =>
      preferences.authors.some((author) =>
        article.author ? article.author.includes(author) : false
      )
    );
  }
  return articles;
};
