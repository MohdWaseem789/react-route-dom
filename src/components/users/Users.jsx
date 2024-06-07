import React from "react";
import { useParams } from "react-router-dom";

function Users() {
  const { userid } = useParams();
  return (
    <div className="bg-gray-700 text-white p-4 rounded-md text-3xl">
      Users : {userid}
    </div>
  );
}

export default Users;
