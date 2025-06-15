import icon from "../../assets/icons/icon.svg";
import icon2 from "../../assets/icons/icon2.svg";
import icon3 from "../../assets/icons/icon3.svg";
import icon4 from "../../assets/icons/icon4.svg";
const Main = () => {
  return (
    <div className="flex items-center flex-col gap-[66px]">
      <strong className="text-[32px] w-[450px]">
        Product was Built Specifically for You
      </strong>

      <div className="flex items-center gap-[50px] w-[1083px]">
        <div className="flex flex-col gap-[30px]">
          <img src={icon} alt="icon svg" width={50} height={50} />
          <strong className="text-[22px]">First click tests</strong>
          <p className="text-[19px]">
            While most people enjoy casino gambling,
          </p>
        </div>
        <div className="flex flex-col gap-[30px]">
          <img src={icon2} alt="icon svg" width={50} height={50} />
          <strong className="text-[22px]">Design surveys</strong>
          <p className="text-[19px]">
            Sports betting, lottery and bingo playing for the fun
          </p>
        </div>
        <div className="flex flex-col gap-[30px]">
          <img src={icon3} alt="icon svg" width={50} height={50} />
          <strong className="text-[22px]">Preference tests</strong>
          <p className="text-[19px]">
            The Myspace page defines the individual.
          </p>
        </div>
        <div className="flex flex-col gap-[30px] w-[390px]">
          <img src={icon4} alt="icon svg" width={50} height={50} />
          <strong className="text-[22px]">Five second tests</strong>
          <p className="text-[19px]">
            Personal choices and the overall personality of the person.
          </p>
        </div>
      </div>
      <button className="w-[175px] h-[50px] bg-[#02897A] rounded-[4px]">
        <strong className="text-[16px] text-white">SIGN UP NOW</strong>
      </button>
    </div>
  );
};

export default Main;
