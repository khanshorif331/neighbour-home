import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { DarkModeContext } from '../../../App';

const OrderRow = ({ index, d }) => {

  console.log(d);
  const { customerEmail, customerPhone, customerName, customerAddress } = d?.data;
  const { name, email, _id, picture, phone } = d.engineer;
  const [darkMode] = useContext(DarkModeContext);
  return (
    <tr className={`${darkMode ? 'text-gray-400 py-2' : 'text-gray-500'} `}>
      <th>{index + 1}</th>

      <td className="">{customerName}</td>
      <td className="">{customerEmail}</td>
      <td className="">{customerPhone}</td>

      <td className="">{name}</td>
      <td>{email}</td>
      <td>{phone}</td>
      <td className='flex flex-col'>
        <Link to={`engineer/${_id}`}>
          <button className="btn btn-xs mb-1 hover:bg-slate-800">details</button>
        </Link>
          <button className="btn btn-xs btn-success hover:bg-slate-800">Processing</button>
          {/* <button className="btn btn-xs btn-warning hover:bg-slate-800">delete</button> */}
      </td>
    </tr>
  );
};

export default OrderRow;