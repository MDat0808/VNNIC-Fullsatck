import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import "swiper/css/pagination";
const SilderTipycalActivities = ({ data }) => {
  console.log(data);

  return (
    <Swiper
      modules={[Pagination]}
      spaceBetween={-100}
      slidesPerView={2}
      loop={false}
      pagination={{
        clickable: true,
      }}
    >
      {data?.typicalActivities?.map((item, index) => (
        <SwiperSlide>
          <div className=" w-fit min-h-60 h-[280px]  shadow-lg rounded-xl flex ">
            <div className="w-52">
              <img
                src={item?.image}
                className="w-full h-full object-cover rounded-tl-xl rounded-bl-xl"
              />
            </div>
            <div className="w-56 flex flex-col p-4 gap-4">
              {/* <div className="flex flex-col gap-1">
              <div className="flex items-baseline gap-1">
                <p className="text-3xl font-semibold">5.0 </p>
                <p className="text-sm font-medium">stars</p>
              </div>
              <div className="">
                <p>
                  {ranking.map((element, index) => (
                    <FontAwesomeIcon
                      key={index}
                      className={` mr-1 ${
                        index + 1 <= 5 ? "text-yellow-500" : ""
                      } hover:text-yellow-500 text-black w-4 h-4`}
                      icon={faStar}
                    />
                  ))}
                </p>
              </div>
            </div> */}
              <div className="text-sm leading-relaxed">
                <div>
                  <p>"{item?.description}"</p>
                </div>
              </div>
              {/* <div className="flex flex-col gap-1 mt-auto">
              <p className="text-xl font-semibold text-gray-900">
                Pham Minh Dat
              </p>
              <p className="text-xs font-medium text-gray-500">Thiện Nghiệp</p>
            </div> */}
            </div>
          </div>
        </SwiperSlide>
      ))}

      {/* <SwiperSlide>
        <div className=" w-fit min-h-60 h-[280px]  shadow-lg rounded-xl flex ">
          <div className="w-52">
            <img
              src="https://lh5.googleusercontent.com/Lq8cvq1EWLqXgc2pRuufD_EoIKg7ysC8itaIfI8XFPEi3m7Zs09pAz6zVHEn9QIBED4eQbn1FwXFs9IvCDNhrMnBZfBUYgxp70bWobXkE0Tb8T9YSqgyx5Fd-B2tFU1waA=w1280"
              className="w-full h-full object-cover rounded-tl-xl rounded-bl-xl"
            />
          </div>
          <div className="w-56 flex flex-col p-4 gap-4">
            <div className="flex flex-col gap-1">
              <div className="flex items-baseline gap-1">
                <p className="text-3xl font-semibold">5.0 </p>
                <p className="text-sm font-medium">stars</p>
              </div>
              <div className="">
                <p>
                  {ranking.map((element, index) => (
                    <FontAwesomeIcon
                      key={index}
                      className={` mr-1 ${
                        index + 1 <= 5 ? "text-yellow-500" : ""
                      } hover:text-yellow-500 text-black w-4 h-4`}
                      icon={faStar}
                    />
                  ))}
                </p>
              </div>
            </div>
            <div className="text-xs leading-relaxed">
              <div>
                <p>
                  "Chúng tôi đã đặt banner ở đây được một vài lần và khá là hài
                  lòng. Nhân viên chăm sóc nhiệt tình và khá thân thiện. Giá cả
                  lại hợp lý."
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-1 mt-auto">
              <p className="text-xl font-semibold text-gray-900">
                Pham Minh Dat
              </p>
              <p className="text-xs font-medium text-gray-500">Thiện Nghiệp</p>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className=" w-fit min-h-60 h-[280px]  shadow-lg rounded-xl flex ">
          <div className="w-52">
            <img
              src="https://lh6.googleusercontent.com/HY7LO5oPd09HkoHJLeXqYo-hh0H00TJum6REuRBCU4NDE3AY1JK3lmmPTSkJ4zO2apSABcijOvOZtJqlTZ0riLvJy6GTH6wd7Mx7-cq8Xt1XhYG8VoeczY_uMYliSBcK5g=w1280"
              className="w-full h-full object-cover rounded-tl-xl rounded-bl-xl"
            />
          </div>
          <div className="w-56 flex flex-col p-4 gap-4">
            <div className="flex flex-col gap-1">
              <div className="flex items-baseline gap-1">
                <p className="text-3xl font-semibold">5.0 </p>
                <p className="text-sm font-medium">stars</p>
              </div>
              <div className="">
                <p>
                  {ranking.map((element, index) => (
                    <FontAwesomeIcon
                      key={index}
                      className={` mr-1 ${
                        index + 1 <= 5 ? "text-yellow-500" : ""
                      } hover:text-yellow-500 text-black w-4 h-4`}
                      icon={faStar}
                    />
                  ))}
                </p>
              </div>
            </div>
            <div className="text-xs leading-relaxed">
              <div>
                <p>
                  "Chúng tôi đã đặt banner ở đây được một vài lần và khá là hài
                  lòng. Nhân viên chăm sóc nhiệt tình và khá thân thiện. Giá cả
                  lại hợp lý."
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-1 mt-auto">
              <p className="text-xl font-semibold text-gray-900">
                Pham Minh Dat
              </p>
              <p className="text-xs font-medium text-gray-500">Thiện Nghiệp</p>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className=" w-fit min-h-60 h-[280px]  shadow-lg rounded-xl flex ">
          <div className="w-52">
            <img
              src="/images/dat.jpg"
              className="w-full h-full object-cover rounded-tl-xl rounded-bl-xl"
            />
          </div>
          <div className="w-56 flex flex-col p-4 gap-4">
            <div className="flex flex-col gap-1">
              <div className="flex items-baseline gap-1">
                <p className="text-3xl font-semibold">5.0 </p>
                <p className="text-sm font-medium">stars</p>
              </div>
              <div className="">
                <p>
                  {ranking.map((element, index) => (
                    <FontAwesomeIcon
                      key={index}
                      className={` mr-1 ${
                        index + 1 <= 5 ? "text-yellow-500" : ""
                      } hover:text-yellow-500 text-black w-4 h-4`}
                      icon={faStar}
                    />
                  ))}
                </p>
              </div>
            </div>
            <div className="text-xs leading-relaxed">
              <div>
                <p>
                  "Chúng tôi đã đặt banner ở đây được một vài lần và khá là hài
                  lòng. Nhân viên chăm sóc nhiệt tình và khá thân thiện. Giá cả
                  lại hợp lý."
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-1 mt-auto">
              <p className="text-xl font-semibold text-gray-900">
                Pham Minh Dat
              </p>
              <p className="text-xs font-medium text-gray-500">Thiện Nghiệp</p>
            </div>
          </div>
        </div>
      </SwiperSlide> */}
    </Swiper>
  );
};

export default SilderTipycalActivities;
