const Title = ({ heading, subheading }) => {
  return (
    <div className="w-[72%] mx-auto">
      <h1 className="text-center text-black text-3xl font-semibold">
        {heading}
      </h1>
      <p className="text-center mt-5 text-[16px] text-gray-700">{subheading}</p>
    </div>
  );
};

export default Title;
