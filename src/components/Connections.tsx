import axios from "axios";
import { BASE_URL } from "../utils/constants";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addConnections } from "../utils/connectionSlice";

const Connections = () => {
  const connections = useSelector((store: any) => store.connections);
  const dispatch = useDispatch();
  console.log(connections);
  const fetchConnections = async () => {
    try {
      if (connections) return;
      const res = await axios.get(BASE_URL + "/user/connections", {
        withCredentials: true
      });
      console.log(res.data);
      dispatch(addConnections(res.data.data));
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchConnections();
  }, []);

  if (!connections) return;
  if (connections.length === 0) return <h1>No Connections Found</h1>;
  return (
    <div className=" text-center my-10">
      <h1 className="text-bold text-2xl">Connections</h1>

      {connections.map((connection) => {
        const { _id, firstName, lastName, gender, age, photoUrl, about } =
          connection;
        return (
          <>
            <div
              key={_id}
              className=" flex m-4 p-4 bg-base-200 rounded-lg w-1/2 mx-auto"
            >
              <div>
                <img
                  src={photoUrl}
                  alt="icon"
                  className="w-20 h-20 rounded-full"
                />
              </div>
              <div className="m-2 p-2 text-left">
                <h2 className="font-bold text-xl">
                  {firstName + " " + lastName}
                </h2>
                {age && gender && <p>{age + ", " + gender} </p>}
                <p>{about}</p>
              </div>
            </div>
          </>
        );
      })}
    </div>
  );
};

export default Connections;
