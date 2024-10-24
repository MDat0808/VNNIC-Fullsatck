import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";

export default function Title({ title }) {
  return (
    <>
      <div className="flex flex-row items-center gap-2 text-sm text-gray-500 mb-2">
        <FontAwesomeIcon icon={faHouse} className="w-4 h-4" />
        <div className="flex flex-row gap-1 capitalize">
          <p className="hover:cursor-pointer hover:underline">Home</p>
          <p className="hover:cursor-pointer hover:underline">/</p>
          <p className="hover:cursor-pointer hover:underline">{title}</p>
        </div>
      </div>
      <h1 className="text-2xl font-bold mb-2 uppercase">{title}</h1>
      <p className="text-gray-600 mb-6">
        This is the place of all the opinions and views. The most recent
        articles are listed all the time.
      </p>
    </>
  );
}
