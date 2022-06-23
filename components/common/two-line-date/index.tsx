import { memo } from "react";

interface Props {
  data: any;
}

const Index = ({ data }: Props) => {
  const timeFormat = (value: string) => {
    let timeText = "오전";
    let hours: any = value.substr(0, 2);
    const min = value.substr(2, 3);
    if (parseInt(hours) > 12) {
      timeText = "오후";
      hours = (hours - 12).toString();
      hours = hours.length < 2 ? `0${hours}` : hours;
    }
    timeText = `${timeText} ${hours}${min}`;
    return timeText;
  };

  return (
    <div className="date">
      {data.text.substr(0, 10)}
      <br />
      <span className="time">{timeFormat(data.text.substr(11, 5))}</span>
    </div>
  );
};

export default memo(Index);
