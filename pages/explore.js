const TravelCard = ({title="Red ballet", price=967, city="New York"}) => {
  return (
    <div className="shadow-2xl bg-white rounded-2xl p-2">
      <img className="rounded-2xl" src="https://source.unsplash.com/random" />
      <div className="flex mt-2 justify-between">
        <div className="flex flex-col">
          <h2 className="">{title}</h2>
          <p className="text-gray-400 text-xs">${price} {city}</p>
        </div>
        <span>.</span>
      </div>
    </div>
  );
};

function Explore() {
  return (
    <div className="bg-white flex flex-col">
      <div className="h-[300px]">Enter</div>
      <div className="mt-2 bg-gray-200 h-[300px] px-10 pt-4">
        <div className="flex items-center justify-between">
          <h2 className="text-lg text-gray-600">Featured</h2>
          <button className="bg-red-400 rounded-full  px-4 py-2">
            See all {`>`}
          </button>
        </div>
        <div className="mt-4 grid grid-cols-2 text-gray-500 gap-2">
          <TravelCard />
          <TravelCard title="Mexico City Festival"/>
          <TravelCard />
          <TravelCard />
          <TravelCard />
          <TravelCard />
        </div>
      </div>
    </div>
  );
}

export default Explore;
