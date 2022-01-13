import React from "react";

function TableRow({id, name, last, buy, sell, volume, base_unit }) {
  const indianNumberFormat = new Intl.NumberFormat("en-IN")
  return (
    <div className="m-2 rounded-lg py-4 bg-gray-700">
      <div className="flex items-center justify-between pb-5">
        <p className="text-sm mx-auto font-bold m-4 text-white">{id}</p>
        <p className="text-sm mx-auto font-bold m-4 text-white">{name}</p>
        <p className="text-sm mx-auto font-bold m-4 text-white">₹ {indianNumberFormat.format(last)}</p>
        <p className="text-sm mx-auto font-bold m-4 text-white">₹ {indianNumberFormat.format(buy)} / ₹ {indianNumberFormat.format(sell)}</p>
        <p className="text-sm mx-auto font-bold m-4 text-white">{volume}</p>
        <p className="text-sm mx-auto font-bold m-4 text-white">{base_unit}</p>
      </div>
    </div>
  );
}

export default TableRow;
