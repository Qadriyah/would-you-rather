import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Dropdown, Button } from "react-bootstrap";

import logo from "../logo.svg";
import { loginUser } from "../actions/login";

const Login = ({ history, user }) => {
  const [selectedItem, setSelectedItem] = React.useState({
    name: "Select User",
  });
  const { users } = useSelector((state) => state.users);

  React.useEffect(() => {
    if (user) {
      history.push("/home");
    }
  }, [history, user]);
  const dispatch = useDispatch();

  const onSubmit = () => {
    dispatch(loginUser(selectedItem.id));
  };

  return (
    <div className="main-content">
      <div
        style={{
          borderBottom: "solid",
          borderBottomWidth: "1px",
          borderBottomColor: "rgba(0,0,0,.15)",
          padding: "10px",
          margin: "-10px -10px 0 -10px",
          backgroundColor: "#f2f2f2",
          height: "100px",
        }}
      >
        <div>
          <h5>Welcome to the Would You Rather App!</h5>
        </div>
        <div>Please sign in to continue</div>
      </div>
      <div>
        <img src={logo} className="App-logo" alt="logo" />
      </div>
      <div style={{ padding: "10px" }}>
        <h4>Sign in</h4>
      </div>
      <div>
        <Dropdown>
          <Dropdown.Toggle variant="transparent">
            {selectedItem.name}
          </Dropdown.Toggle>
          <Dropdown.Menu>
            {users
              ? Object.entries(users).map(([key, value]) => {
                  return (
                    <Dropdown.Item
                      key={key}
                      onClick={() => setSelectedItem(value)}
                    >
                      {value.name}
                    </Dropdown.Item>
                  );
                })
              : null}
          </Dropdown.Menu>
        </Dropdown>
      </div>
      <div className="padding-ten">
        <Button variant="primary" onClick={onSubmit}>
          Sign in
        </Button>
      </div>
    </div>
  );
};

export default Login;
