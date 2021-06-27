
import Image from "next/image";

const destinations = [];

const TravelCard = () => {
  return (
    <div className="relative inset-0 w-[400px] h-[700px] p-8 border-gray-500 z-10 transition delay-150">
      <Image
        className="absolute inset-0 h-full w-full object-cover  transform transition-all duration-500  hover:rotate-[1deg] z-0 mix-blend-overlay filter brightness-90  hover:border-2"
        src="https://www.niarratravel.com/content/images/_800x800_crop_center-center_80_none/Victoria-Falls-River-Lodge-Zimbabwe-17.jpg?mtime=20210413155845&focal=63.94%25+69.68%25&tmtime=20210430110543"
        width={350}
        height={700}
      />
      <div className="flex items-center space-x-2 group-hover:rotate-[-1deg]">
        <p className="h-10 w-10 rounded-full bg-white"></p>
        <p className="font-semibold">AFRICA</p>
      </div>
      <div className="flex-1 h-[200px]"></div>
      <p className="capitalize text-xs font-semibold">11-DAY TRIP</p>
      <h3 className="text-4xl">Cape,Wine, Wildlife and Waterfalls</h3>
      <p className="mt-10 z-10">
        This is the perfect first-time trip to South Africa, showcasing the very
        best of the Rainbow Nation before a spectacular finale by Victoria
        Falls..
      </p>
      <div className="flex justify-between mt-6">
        <button className="px-6 rounded-full border-2">Discover Trip</button>
        <div className="flex flex-col items-center">
          <p className="text-xs">FROM</p>
          <p className="text-lg font-semibold">$7,304</p>
        </div>
      </div>
    </div>
  );
};

function niarratravel() {
  return (
    <div className="h-screen bg-white mt-10 ">
      <div className="h-[50px] w-full bg-white"></div>
      <section className="flex space-x-2 overflow-scroll">
        <TravelCard />
        <TravelCard />
        <TravelCard />
        <TravelCard />
        <TravelCard />
        <TravelCard />
        <TravelCard />
        <TravelCard />
        <TravelCard />
        <TravelCard />
      </section>
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
