"use client";

import { useState } from "react";
import { LuCalendarClock } from "react-icons/lu";

const CheckDate = () => {
  const [date] = useState<Date>(new Date());

  const formateDate = (date: Date) => {
    const day = date.getDate();
    const month = date.toLocaleString("default", { month: "short" });
    const year = date.getFullYear();
    return `${day} ${month} ${year}`;
  };

  return (
    <div className="flex items-center">
      <div className="flex flex-col items-end mr-3">
        <h3 className="text-xl font-medium">Today</h3>
        <p className="text-sm font-light text-neutral-400">{formateDate(date)}</p>
      </div>
      <LuCalendarClock size={30} className="text-primary" />
    </div>
  );
};

export default CheckDate;
