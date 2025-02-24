import { FaRegBookmark, FaRegEye, FaStar } from "react-icons/fa";

const NewsCard = (props = {}) => {
  const { news } = props || {};
  return (
    <div className="bg-white border-1 border-gray-500 rounded-lg p-4 max-w-xl mx-auto">
      <div className="flex items-center justify-between pb-2 border-b">
        <div className="flex items-center gap-2">
          <img
            src={news.author.img}
            alt={news.author.name}
            className="w-10 h-10 rounded-full"
          />
          <div>
            <p className="font-semibold">{news.author.name}</p>
            <p className="text-sm text-gray-500">
              {new Date(news.author.published_date).toDateString()}
            </p>
          </div>
        </div>
        <FaRegBookmark className="text-gray-500 cursor-pointer" />
      </div>

      <h2 className="font-bold text-lg my-2">{news.title}</h2>
      <img
        src={news.image_url}
        alt={news.title}
        className="w-full h-70 object-cover rounded-lg"
      />

      <p className="text-sm text-gray-600 mt-2">
        {news.details.slice(0, 150)}...
        <span className="text-red-500 cursor-pointer"> Read More</span>
      </p>

      <div className="flex items-center justify-between mt-3 text-gray-600">
        <div className="flex items-center gap-1">
          <FaStar className="text-yellow-500" />
          <span className="font-bold">{news.rating.number}</span>
        </div>
        <div className="flex items-center gap-1">
          <FaRegEye />
          <span>{news.total_view}</span>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
