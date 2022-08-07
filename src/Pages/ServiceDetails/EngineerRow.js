import React, { useState } from "react";
import { Link } from "react-router-dom";

const EngineerRow = ({ index, engineer }) => {
  const { name, picture, _id, surname, gender } = engineer;
  return (
    <tr>
      <th>{index + 1}</th>
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
          <button className="btn btn-xs">View Profile</button>
        </Link>
      </td>
    </tr>
  );
};

export default EngineerRow;
