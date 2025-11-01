import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import type { Settings } from "react-slick";
export default function Testimonail() {
  const testiMonails: {
    name: string;
    address: string;
    imgUrl: string;
    comment: string;
  }[] = [
    {
      name: "Ali",
      address: "Kabul, Afghnistan",
      imgUrl: "./images/img (1).webp",
      comment:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit veniam, id reiciendis nesciunt veritatis nulla quo non cupiditate expedita vel inventore ut odio? Quia animi, voluptate suscipit blanditiis aliquam accusamus!",
    },
    {
      name: "Kalil",
      address: "Kandahar, Afghnistan",
      imgUrl: "./images/img (2).jpg",
      comment:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit veniam, id reiciendis nesciunt veritatis nulla quo non cupiditate expedita vel inventore ut odio? Quia animi, voluptate suscipit blanditiis aliquam accusamus!",
    },
    {
      name: "Arman",
      address: "Ghazni, Afghnistan",
      imgUrl: "./images/img (3).jpg",
      comment:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit veniam, id reiciendis nesciunt veritatis nulla quo non cupiditate expedita vel inventore ut odio? Quia animi, voluptate suscipit blanditiis aliquam accusamus!",
    },
    {
      name: "Mahdi",
      address: "Laghman, Afghnistan",
      imgUrl: "./images/img (4).jpg",
      comment:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit veniam, id reiciendis nesciunt veritatis nulla quo non cupiditate expedita vel inventore ut odio? Quia animi, voluptate suscipit blanditiis aliquam accusamus!",
    },
    {
      name: "Jawid",
      address: "Herat, Afghnistan",
      imgUrl: "./images/m5.jpg",
      comment:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit veniam, id reiciendis nesciunt veritatis nulla quo non cupiditate expedita vel inventore ut odio? Quia animi, voluptate suscipit blanditiis aliquam accusamus!",
    },
    {
      name: "Abulfazl",
      address: "Helmand, Afghnistan",
      imgUrl: "./images/img1.jpg",
      comment:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit veniam, id reiciendis nesciunt veritatis nulla quo non cupiditate expedita vel inventore ut odio? Quia animi, voluptate suscipit blanditiis aliquam accusamus!",
    },
  ];
  const settings: Settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 3,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2500,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div id="testimonail" className=" w-full my-4 flex flex-col items-center">
      <h1 className="font-bold text-5xl mb-3">Testimonail</h1>
      <p className="font-bold text-[16px] mb-4">
        Read the experience of our happy client
      </p>
      <div className="w-full">
        <Slider {...settings}>
          {testiMonails.map((feedback, index) => (
            <div
              key={index}
              className="py-4 h-fit bg-white text-center border relative rounded-xl"
            >
              <img
                className="h-20 w-20 rounded-full ml-[40%] mb-2"
                src={feedback.imgUrl}
                alt={feedback.name}
              />
              <h1 className="font-bold">{feedback.name}</h1>
              <address className="text-[16px] font-bold underline underline-offset-8 mb-3 underline-[10px]">
                {feedback.address}
              </address>
              <p>{feedback.comment}</p>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
