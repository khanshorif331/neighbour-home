import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { DarkModeContext } from "../../App";

const EngineerRow = ({ index, engineer }) => {
  const [darkMode, setDarkMode] = useContext(DarkModeContext);
  const { name, picture, _id, surname, gender } = engineer;
  return (
    <tr className={`${darkMode ? " bg-gray-800 border-gray-700 odd:bg-gray-800 even:bg-gray-700" : "border-b odd:bg-white even:bg-gray-50"}   `}>
      <th className={`${darkMode ? "text-white" : "text-gray-900"}  px-3 sm:pr-0 sm:pl-8 py-2  sm:py-4 font-medium  whitespace-nowraptext-[13px]`}>{index + 1}</th>
      <td>
        <div className="avatar">
          <div className="w-16 mask mask-hexagon">
            <img src={picture} alt={name} />
          </div>
        </div>
      </td>
      <td className="font-semibold text-xl">{name}</td>
      <td>{surname}</td>
      <td>
        <Link to={`engineer/${_id}`}>
          <button className="btn btn-xs hover:bg-slate-800">View Profile</button>
        </Link>
      </td>
    </tr>
  );
};

export default EngineerRow;
