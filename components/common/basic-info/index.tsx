import { memo } from "react";

interface Props {
  data: any;
  type: string;
}

const Index = ({ data, type }: Props) => {
  const render = () => {
    switch (type) {
      case "default":
        return (
          <div className="">
            <div className="inline-block text-xs model-basicstruct">
              {(data.data.basicStruct ? data.data.basicStruct : "-") + " 구조,"}
            </div>
            <div className="inline-block text-xs model-basicbay">
              {(data.data.basicBay ? data.data.basicBay : "-") + "동,"}
            </div>
            <div className="inline-block text-xs model-basiclevel">
              {(data.data.basicLevel ? data.data.basicLevel : "-") + "중,"}
            </div>
            <div className="inline-block text-xs model-basicwidth">
              {"폭 " + (data.data.basicWidth ? data.data.basicWidth + "m," : "-,")}
            </div>
            <div className="inline-block text-xs model-basiclength">
              {"길이 " + (data.data.basicLength ? data.data.basicLength + "m," : "-,")}
            </div>
            <div className="inline-block text-xs model-basicheightside">
              {"측고 " + (data.data.basicHeightSide ? data.data.basicHeightSide + "m," : "-,")}
            </div>
            <div className="inline-block text-xs model-basicareapyeong">
              {"면적 " + (data.data.basicAreaPyeong ? data.data.basicAreaPyeong + "평" : "-")}
            </div>
          </div>
        );
      case "oneline":
        return (
          <div className="inline-block relative mt-[-8px] text-xs">
            <div className="inline-block absolute ml-0 text-xs result-basicstruct">
              {(data.data.basicStruct ? data.data.basicStruct : "-") + " 구조"}
            </div>
            <div className="inline-block absolute ml-[70px] text-xs result-basicbay">
              {(data.data.basicBay ? data.data.basicBay : "-") + "동"}
            </div>
            <div className="inline-block absolute ml-[100px] text-xs result-basiclevel">
              {(data.data.basicLevel ? data.data.basicLevel : "-") + "중"}
            </div>
            <div className="inline-block absolute ml-[130px] text-xs result-basicwidth">
              {"폭 " + (data.data.basicWidth ? data.data.basicWidth + "m" : "-")}
            </div>
            <div className="inline-block absolute ml-[170px] text-xs result-basiclength">
              {"길이 " + (data.data.basicLength ? data.data.basicLength + "m" : "-")}
            </div>
            <div className="inline-block absolute ml-[230px] text-xs result-basicheightside">
              {"측고 " + (data.data.basicHeightSide ? data.data.basicHeightSide + "m" : "-")}
            </div>
            <div className="inline-block absolute ml-[300px] text-xs result-basicareapyeong">
              {"면적 " + (data.data.basicAreaPyeong ? data.data.basicAreaPyeong + "평" : "-")}
            </div>
          </div>
        );
      default:
        return (
          <div className=" relative mt-[-15px] ">
            <div className="inline-block absolute ml-0 text-xs result-basicstruct">
              {(data.data.basicStruct ? data.data.basicStruct : data.data.houseStruct ? data.data.houseStruct : "-") +
                " 구조"}
            </div>
            <div className="inline-block absolute ml-[70px] text-xs result-basicbay">
              {(data.data.basicBay ? data.data.basicBay : data.data.houseBay ? data.data.houseBay : "-") + "동"}
            </div>
            <div className="inline-block absolute ml-[100px] text-xs result-basiclevel">
              {(data.data.basicLevel ? data.data.basicLevel : data.data.houseLevel ? data.data.houseLevel : "-") + "중"}
            </div>
            <div className="inline-block absolute ml-[130px] text-xs result-basicwidth">
              {"폭 " +
                (data.data.basicWidth
                  ? data.data.basicWidth + "m"
                  : data.data.houseWidth
                  ? data.data.houseWidth + "m"
                  : "-")}
            </div>
            <br />
            <div className="inline-block absolute ml-0 text-xs result-basiclength">
              {"길이 " +
                (data.data.basicLength
                  ? data.data.basicLength + "m"
                  : data.data.houseLength
                  ? data.data.houseLength + "m"
                  : "-")}
            </div>
            <div className="inline-block absolute ml-[60px] text-xs result-basicheightside">
              {"측고 " +
                (data.data.basicHeightSide
                  ? data.data.basicHeightSide + "m"
                  : data.data.houseHeightSide
                  ? data.data.houseHeightSide + "m"
                  : "-")}
            </div>
            <div className="inline-block absolute ml-[130px] text-xs result-basicareapyeong">
              {"면적 " +
                (data.data.basicAreaPyeong
                  ? data.data.basicAreaPyeong + "평"
                  : data.data.houseAreaPyeong
                  ? data.data.houseAreaPyeong + "평"
                  : "-")}
            </div>
          </div>
        );
    }
  };

  return render();
};

export default memo(Index);
