import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";

export default function Footer() {
  return (
    <footer className="static bottom-0 mt-28 bg-zinc-500 text-white  w-screen h-80">
      <div className="flex w-full h-3/4 items-center ">
        <div className="w-2/3 flex justify-center">
          <div className="w-3/5 font-sans">
            <h1 className="mb-1 italic text-2xl font-serif">Hotel Minh khoi</h1>
            <p className="font-sans text-xs ">
              Chung toi luon mang den cho ban nhung trai nghiem tot nhat va tien
              loi nhat.Rat vui khi ban ghe Mui Ne-Phan Thiet va su dung dich vu
              ben Minh khoi chung toi
            </p>
          </div>
        </div>
        <div className="flex flex-row  w-full justify-center">
          <div className="w-1/3 ">
            <h1 className=" text-xl font-sans mb-1">Phone Support</h1>
            <p className="font-sans font-light text-xs mb-1">24 HOURS A DAY</p>
            <p className="font-sans text-xl mb-1">+ 84 123 456 789</p>
          </div>
          <div className="w-1/3 ">
            <h1 className="text-xl font-sans mb-1"> Contact Us </h1>
            <p className="font-sans font-light text-xs mb-1">
              SOCIAL MEDIA CHANNELS
            </p>
            <div className="flex mt-2 ">
              <FontAwesomeIcon className="w-6 h-6 mr-1" icon={faFacebook} />
              <FontAwesomeIcon className="w-6 h-6 ml-2" icon={faTwitter} />
              <FontAwesomeIcon className="w-6 h-6 ml-2" icon={faGithub} />
              <FontAwesomeIcon className="w-6 h-6 ml-2" icon={faYoutube} />
            </div>
          </div>
          <div className="w-1/3">
            <h1 className="text-xl font-sans mb-1">Quick Link</h1>
            <p className="font-sans font-light text-xs mb-1">Home</p>
            <p className="font-sans font-light text-xs mb-1">About Us</p>
            <p className="font-sans font-light text-xs mb-1">Booking</p>
          </div>
        </div>
        {/* Newsletter */}
        <div className="ml-4 mr-4 w-1/3 flex flex-col justify-center">
          <div className="w-11/12">
            <h1 className="text-xl font-sans mb-1">Newsletter</h1>
            <p className="font-sans font-light text-xs mb-2">
              Vui lòng nhâp gmail để nhận những thông tin mới và ưu đãi cực hot
              từ Hotel Minh Khôi.
            </p>
            <div className="flex flex-row mt-1 mr-2">
              <input
                className="h-8	 text-black rounded-l placeholder:font-sans placeholder:text-xs"
                type="email"
                placeholder="
              Enter your email"
              />
              <button className=" bg-red-500 px-8 py-1 rounded-r	 ">
                <FontAwesomeIcon className="w-4" icon={faPaperPlane} />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className=" h-px w-full bg-red-50"></div>
      <div className="flex flex-col text-center items-center  w-full ">
        {/* <Image
          className=" w-12"
          src="/img/logo.png"
          alt="Logo Minh Khoi"
          width={56}
          height={12}
        /> */}
        <p className="font-sans font-light text-xs ">
          Copyright - Powered by : Phạm Minh Đạt
        </p>
      </div>
    </footer>
  );
}
