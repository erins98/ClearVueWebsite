
type ICTABannerProps = {
  title: string;
  subtitle: string;
};

const CTABanner = (props: ICTABannerProps) => (
  <div className="flex flex-col rounded-md bg-[#E9F7F5] p-4 text-center sm:flex-row sm:items-center sm:justify-between sm:p-12 sm:text-left">
    <div className="text-4xl font-semibold">
      <div className="text-gray-900">{props.title}</div>
      <div className="text-[#84CCBF]">{props.subtitle}</div>
    </div>

    <div className="whitespace-no-wrap mt-3 sm:ml-2 sm:mt-0">
    </div>
  </div>
);

export { CTABanner };
