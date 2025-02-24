import { useLoaderData } from "react-router-dom";
import NewsCard from "../components/NewsCard";

const CategoryNews = () => {
  const { data: news } = useLoaderData();
  // console.log(news);
  return (
    <div>
      <h2 className="text-xl font-bold mb-3">Dragon News Home</h2>
      <div className="flex flex-col gap-4">
        {news.map((singleNews) => (
          <NewsCard key={singleNews._id} news={singleNews}></NewsCard>
        ))}
      </div>
    </div>
  );
};

export default CategoryNews;
