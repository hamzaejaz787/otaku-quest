import { Outlet, useParams } from "react-router-dom";
import { FcOvertime } from "react-icons/fc";

const RecommendedTop = () => {
  const { id } = useParams();
  return (
    <>
      {id ? (
        <Outlet />
      ) : (
        <div className="px-12 my-24 mx-auto">
          <h1 className="flex justify-center items-center text-white text-4xl">
            Coming Soon!!
            <FcOvertime className="ml-4" />
          </h1>
        </div>
      )}
    </>
  );
};

export default RecommendedTop;
