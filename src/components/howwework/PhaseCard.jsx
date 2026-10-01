import Heighlight from "../shared/Heighlight";

export default function PhaseCard({ data }) {
  if (!data) return null;

  return (
    <div
      id={data.id}
      className="w-full mb-5 scroll-mt-32 md:scroll-mt-36  text-text-primary transition-all duration-300"
    >

      {/* Top Header Row */}
      <div className="flex flex-col lg:flex-row bg-hww  ">
        {/* Phase Label Column */}
        <div className="w-full !text-black lg:w-44 lg:w-52  grow-0 py-5 px-6  flex-row-center">
          <Heighlight text={data.phaseLabel} />
        </div>

        {/* Phase Title Column */}
        <div className="w-full lg:w-72 lg:w-80 grow-1 py-5 px-6  flex-row-center gap-3 xl:gap-4">
         
          <h2 className="title2 !text-black">
            {data.title}
          </h2>
        </div>

      </div>

      {/* Phase descriptions */}
      {data.accordions && data.accordions.length > 0 && (
        <div className="px-6 py-8 sm:px-8 sm:py-10 lg:px-10">
          <div className="max-w-4xl space-y-6 sm:space-y-8">
            {data.accordions.map((item) => (
              <p
                key={item.id}
                className="description text-left"
              >
                {item.content}
              </p>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
