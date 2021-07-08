import Image from "next/image";
import React from "react";
import Flicking from "@egjs/react-flicking";
import "@egjs/react-flicking/dist/flicking.css";
const destinations = [];

const TravelCard = React.forwardRef(({ index }, ref) => {
  return (
    <div ref={ref} className="relative w-[400px] h-[700px] p-8 bg-transparent">
      <div className="absolute top-0 left-0 w-[850px] h-[700px]">
        <img
          className=" absolute inset-0  h-full w-full clip"
          src="https://www.niarratravel.com/content/images/_800x800_crop_center-center_80_none/Victoria-Falls-River-Lodge-Zimbabwe-17.jpg?mtime=20210413155845&focal=63.94%25+69.68%25&tmtime=20210430110543"
          width={800}
          height={800}
        />
      </div>

      <div className="bg-transparent z-10 pointer-events-none filter mix-blend-screen">
        <div className="flex items-center space-x-2 group-hover:rotate-[-1deg]">
          <p className="h-10 w-10 rounded-full "></p>
          <p className="font-semibold">AFRICA</p>
        </div>
        <div className="flex-1 h-[200px]"></div>
        <p className="capitalize text-xs font-semibold">11-DAY TRIP</p>
        <h3 className="text-4xl">Cape,Wine, Wildlife and Waterfalls</h3>
        <p className="mt-10 z-10">
          This is the perfect first-time trip to South Africa, showcasing the
          very best of the Rainbow Nation before a spectacular finale by
          Victoria Falls..
        </p>
        <div className="flex justify-between mt-6 bg-transparent">
          <button className="px-6 rounded-full border-2">Discover Trip</button>
          <div className="flex flex-col items-center">
            <p className="text-xs">FROM</p>
            <p className="text-lg font-semibold">$7,304</p>
          </div>
        </div>
      </div>
      <style jsx>{`
        .clip {
          transition: clip-path 0.5s;
          clip-path: polygon(
            0.3125rem 0.3125rem,
            calc(100% - 55%) 0.3125rem,
            calc(100% - 55%) calc(100% - 0.3125rem),
            0.3125rem calc(100% - 0.3125rem)
          );
        }

        .clip:hover {
          clip-path: polygon(
            0.3125rem 0rem,
            calc(100% - 55% + 0.3125rem) calc(0.3125rem * 2),
            calc(100% - 55% - 0.3125rem) calc(100%),
            0rem calc(100% - 0.3125rem * 2)
          );
        }
      `}</style>
    </div>
  );
});

function niarratravel() {
  return (
    <div className="h-screen  mt-10 ">
      <div className="h-[50px] w-full "></div>
      <Flicking align="prev" renderOnlyVisible={true}>
        <TravelCard />
        <TravelCard />
        <TravelCard />
        <TravelCard />
        <TravelCard />
        <TravelCard />
        <TravelCard />
        <TravelCard />
      </Flicking>
    </div>
  );
}

export async function getStaticProps(ctx) {
  return {
    props: {
      data: null,
    },
  };
}

export default niarratravel;
