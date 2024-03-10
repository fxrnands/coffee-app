import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Image from "next/image";

interface Props {
  item: any[];
  isTeam?: boolean;
}

const Slider = ({ item }: Props) => {
  const responsive = {
    desktop: {
      breakpoint: {
        max: 3000,
        min: 1024,
      },
      items: 2,
      slidesToSlide: 1,
    },
    medium: {
      breakpoint: {
        max: 1024,
        min: 688,
      },
      items: 2,
      slidesToSlide: 1,
    },
    tablet: {
      breakpoint: {
        max: 688,
        min: 464,
      },
      items: 2,
      slidesToSlide: 1,
    },
    mobile: {
      breakpoint: {
        max: 464,
        min: 0,
      },
      items: 2,
      slidesToSlide: 1,
    },
  };

  return (
    <Carousel
      swipeable={true}
      deviceType="desktop"
      ssr={true}
      autoPlay={true}
      infinite={true}
      autoPlaySpeed={1500}
      draggable={true}
      responsive={responsive}
      showDots={false}
      arrows={false}
    >
      {item.map((item, index) => (
        <div key={index} className="flex flex-col items-center">
          <div className="w-[11.5rem] rounded-md h-[11.5rem] overflow-hidden flex items-center border">
            <Image
              src={item.image}
              alt={item.image}
              width={1000}
              height={1000}
              className="h-full w-full object-cover object-center group-hover:opacity-75"
            />
          </div>
        </div>
      ))}
    </Carousel>
  );
};

export default Slider;
