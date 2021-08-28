import React from "react";
import { useDispatch } from "react-redux";
import { logOut } from "../redux/actions/login";

const Logout = () => {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(logOut());
  }, [dispatch]);

  return (
    <div>
      <div>Logout page</div>
    </div>
  );
};

export default Logout;
