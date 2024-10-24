import { useState, useEffect, useRef } from "react";
import TimeLineItem from "../components/ui/timeline/TimeLineItem";
import SilderTypicalActivities from "../components/ui/unionMember/SliderTypicalActivities";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function DetailUnionMember(params) {
  const { id } = useParams();
  const [unionMember, setUnionMember] = useState(null);
  const [typicalActivities, setTypicalActivities] = useState([]);
  useEffect(() => {
    // Fetch both requests concurrently
    Promise.all([
      axios.get(`http://localhost:8088/union-member-outsanding/detail/${id}`),
      axios.get(`http://localhost:8088/typical-activities/${id}`),
    ])
      .then(([unionMemberResponse, typicalActivitiesResponse]) => {
        setUnionMember(unionMemberResponse.data);
        setTypicalActivities(typicalActivitiesResponse.data);
      })
      .catch((err) => {
        console.error(err);
        // setError("Unable to fetch data"); // Set error if fetching fails
      })
      .finally(() => {
        // setLoading(false); // Stop loading after fetch
      });
  }, [id]);

  console.log(unionMember);
  console.log(typicalActivities);

  const timelineData = [
    { year: "2019", description: "Báo mẹ trốn học chơi net" },
    { year: "2020", description: "Cãi cha mẹ lên sì phố trốn dịch covid" },
    { year: "2021", description: "Dịch không có gì làm nên về lại quê" },
    { year: "2022", description: "Rồi quyết định đi học ở ĐN" },
    {
      year: "2023",
      description: "Báo thủ đc làm đoàn viên tiêu biều gì đó :))",
    },
  ];
  return (
    <div>
      <div className="w-full  h-screen flex">
        <div className="w-1/2">
          <img
            alt="Thumbnail Voter"
            className="w-full h-full object-cover"
            src={unionMember?.image}
          />
        </div>
        <div className="w-1/2  flex flex-col gap-4  overflow-auto">
          <div className="p-8 flex flex-col gap-8">
            <div className="flex gap-12 ">
              <p className="min-w-fit uppercase text-xs font-medium text-gray-500 ">
                Giới thiệu
              </p>
              <div>
                <h3 className="text-4xl  font-medium">
                  Kiaya - Từ cậu nhóc chỉ học hết lớp 1 đến game thủ biểu tượng
                  của VCS
                </h3>
                <p className="mt-8 text-gray-500">{unionMember?.introduce}</p>
              </div>
            </div>
            <div className="border-t border-gray-300">
              <p className="mt-4 min-w-fit uppercase text-xs font-medium text-gray-500 ">
                Thông tin tiêu biểu
              </p>
              <div>
                <p className="mt-3 text-black">{unionMember?.typicalInfo}</p>
              </div>
            </div>{" "}
          </div>
          {/* <div className="flex flex-row">
            <div className="w-1/3 border-r p-4 border-y h-40 border-solid boder-gray-400">
              <p className="text-[12px] uppercase text-gray-500">Đoàn viên</p>
              <p className="capitalize text-[24px] ">Kiaya (GAM esports)</p>
            </div>
            <div className="w-1/3 border-r p-4 border-y h-40 border-solid boder-gray-400">
              <p className="text-[12px] uppercase text-gray-500">Thành tích</p>
              <p className="capitalize text-[24px] ">
                {" "}
                N-Face- Gương mặt nhà báo nổi bật
              </p>
            </div>
            <div className="w-1/3 border-r p-4 border-y h-40 border-solid boder-gray-400">
              <p className="text-[12px] uppercase text-gray-500">
                Hoạt động tham gia
              </p>
              <p className="capitalize text-[42px]  ">123,987</p>
            </div>
          </div> */}
        </div>
      </div>
      <div className="mt-8">
        <h2 className="text-center text-3xl font-bold">Thông tin cá nhân</h2>
        <div className=" flex justify-center items-center mt-4">
          <div className=" p-8 rounded-lg flex justify-between items-start gap-8">
            <div className="max-w-96 ">
              <h3 className="text-4xl font-bold mb-4">
                {unionMember?.information?.fullName}
              </h3>
              <p className="text-lg mb-2">
                <strong>Ngày sinh:</strong>{" "}
                {unionMember?.information?.dayOfBirth}
              </p>
              <p className="text-lg mb-2">
                <strong>Email:</strong> {unionMember?.information?.email}
              </p>
              <p className="text-lg mb-2">
                <strong>Quê quán:</strong> {unionMember?.information?.address}
              </p>
              <p className="text-lg mb-2">
                <strong>Hiện nay:</strong> {unionMember?.position}
              </p>
            </div>
            <div className="w-80 h-80">
              <img
                src={unionMember?.information?.avatar}
                alt="A young man standing with a white shirt and a bag"
                className="rounded-lg w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-4 flex justify-center">
        {unionMember?.timeline && <TimeLineItem data={unionMember.timeline} />}
      </div>
      <div className="mt-8 flex flex-col items-center gap-8 justify-center">
        <h2 className="text-center text-3xl font-bold">
          Một số hoạt động tiêu biểu
        </h2>
        <div className="max-w-screen-lg">
          {typicalActivities && (
            <SilderTypicalActivities data={typicalActivities} />
          )}
        </div>
      </div>
    </div>
  );
}
