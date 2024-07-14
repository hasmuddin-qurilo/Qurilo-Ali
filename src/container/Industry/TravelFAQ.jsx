import { useState } from "react";
import { faqData } from "../../Data/IT/FAQData";
import { IoMdAdd } from "react-icons/io";
import { HiMinus } from "react-icons/hi";
import Title from "../../components/Faq/List";
const TravelFAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  return (
    <div className="my-10">
      <Title
        heading="Frequently Asked Questions"
        subheading="Here are some questions related to software outsourcing that our clients
        frequently ask:"
      />
      <div className="mt-10 lg:w-[72%] md:w-[90%] w-[93%] mx-auto">
        {faqData.map((item, index) => {
          return (
            <div key={index}>
              <div
                onClick={() =>
                  setActiveIndex(activeIndex === index ? null : index)
                }
                className="flex justify-between items-center md:py-7 py-3  cursor-pointer"
              >
                <h2 className="md:text-xl text-[16px] w-[96%] font-normal">
                  {item.question}
                </h2>
                {activeIndex === index ? (
                  <HiMinus size={25} className="text-blue font-bold" />
                ) : (
                  <IoMdAdd size={25} className="text-blue font-bold" />
                )}
              </div>
              {activeIndex === index && (
                <div className="pb-4 text-lg font-normal text-gray-600">
                  <p>{item.answer}</p>
                  <ul className="mt-2">
                    {item.list?.map((listItem, index) => {
                      return (
                        <div key={index} className="flex gap-x-4 items-center">
                          <div className="w-2 h-2 bg-blue rounded-full"></div>
                          <li>{listItem}</li>
                        </div>
                      );
                    })}
                  </ul>
                </div>
              )}
              {index !== faqData.length - 1 && (
                <div className="w-[100%] h-[1px] bg-gray-300"></div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default TravelFAQ;
