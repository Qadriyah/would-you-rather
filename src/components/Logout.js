import React from "react";
import { useDispatch } from "react-redux";
import { logOut } from "../redux/actions/login";

const Logout = ({ history }) => {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(logOut()).then(() => history.push("/"));
  }, [dispatch, history]);

  return (
    <div>
      <div>Logout page</div>
    </div>
  );
};

export default Logout;
