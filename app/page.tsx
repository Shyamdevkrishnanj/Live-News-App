import { categories } from "@/constants";
import fetchNews from "@/lib/fetchNews";
import NewsList from "./NewsList";
import response from '../response.json';

async function Homepage() {

  // fetch news data
  const news: NewsResponse = await fetchNews(categories.join(',')); // response ||

  // timeout
  await new Promise((resolve) => setTimeout(resolve, 1000));

  console.log(news);

  return (
    <div>
      <NewsList news={news} />
    </div>
  )
}

export default Homepage