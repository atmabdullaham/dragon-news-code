import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const LatestNews = () => {
  return (
    <div className="flex gap-2 items-center bg-base-200 p-2">
      <p className="bg-[#D72050] text-base-100 px-3 py-2">Latest</p>
      <Marquee pauseOnHover={true}>
        <Link to="/news" className="space-x-5">
          News-1: Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim,
          ratione!
        </Link>
        <Link to="/news" className="ml-2">
          News-2: Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim,
          ratione!
        </Link>
        <Link to="/news" className="ml-2">
          News-3: Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim,
          ratione!
        </Link>
        <Link to="/news" className="ml-2">
          News-4: Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim,
          ratione!
        </Link>
      </Marquee>
    </div>
  );
};

export default LatestNews;
