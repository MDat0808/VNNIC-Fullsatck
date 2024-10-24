import { Link, useLocation } from "react-router-dom";

export default function UnionMemberProfile({
  name,
  description,
  imageUrl,
  position,
  memberCode,
}) {
  return (
    <Link to={`/doan-vien-tieu-bieu/detail/${memberCode}`}>
      <div className="flex flex-col gap-3 max-w-60 hover:cursor-pointer">
        <div>
          <img className="w-full h-64 object-cover" alt={name} src={imageUrl} />
        </div>
        <h3 className="uppercase text-sm text-gray-700 font-medium">{name}</h3>
        <div className="text-sm text-gray-500 overflow-hidden text-ellipsis line-clamp-6">
          {description}
        </div>
        <div className="text-sm text-gray-500">
          <p>{position}</p>
        </div>
      </div>
    </Link>
  );
}
