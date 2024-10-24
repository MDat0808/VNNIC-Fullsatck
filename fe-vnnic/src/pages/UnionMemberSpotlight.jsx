import UnionMemberItem from "../components/ui/unionMember/UnionMemberItem";
import UnionMemberProfile from "../components/ui/unionMember/UnionMemberProfile";
import axios from "axios";
import React, { useEffect, useState } from "react";

export default function UnionMemberSpotlight(params) {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:8088/union-member-outsanding/summary")
      .then((response) => {
        setData(response.data); // Set fetched data
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="w-full flex h-fit">
      {/* Sidebar */}
      <div className="w-1/3 h-fit sticky border-r border-gray-300">
        <div className="p-4">
          <div className="flex items-center font-medium text-xl w-full h-28">
            <div className="flex gap-4">
              <div className="max-w-56">
                <h3 className="capitalize text-gray-700">
                  N-Face - Gương mặt nhà báo nổi bật
                </h3>
              </div>
              <div className="flex gap-2 text-gray-500">
                <p>10 đề cử</p>
              </div>
            </div>
          </div>
          <div>
            <div className="flex justify-between">
              <p className="uppercase text-sm font-medium text-gray-500">
                Bảng xếp hạng
              </p>
            </div>
            <ul className="max-w-md mt-2 text-gray-700">
              {data?.map((member, index) => (
                <UnionMemberItem
                  key={member.id}
                  rank={index + 1}
                  name={member.name}
                  position={member.votes}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="w-2/3 h-[700px] overflow-auto">
        <div className="p-8">
          <div className="flex flex-wrap gap-x-8 gap-y-14">
            {data?.map((member) => (
              <UnionMemberProfile
                key={member.id}
                name={member.information.fullName}
                description={member.typicalInfo}
                imageUrl={member.information.avatar}
                position={member.information.address}
                memberCode={member.memberCode}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
