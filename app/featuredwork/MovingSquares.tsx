import React from "react";

function MovingSquares() {
  return (
    <div className="flex justify-evenly items-center h-screen bg-blackbean w-screen">
      <div className="w-96 h-96 bg-magnolia rounded-xl animate-move"></div>
      <div className="w-96 h-96 bg-magnolia rounded-xl animate-move delay-500"></div>
      <div className="w-96 h-96 bg-magnolia rounded-xl animate-move delay-1000"></div>
    </div>
  );
}

export default MovingSquares;
