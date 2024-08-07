import React from "react";
import UserContext from "../utilis/UserContext";

// Creating a class based component
class UserClass extends React.Component {
  render() {
    return (
      <>
        {/* using UserContext */}
        <UserContext.Consumer>
          {(data) => {
            return (
              <h2 className="font-bold text-lg">Name :{data.loggedInUser} </h2>
            );
          }}
        </UserContext.Consumer>

        <h3>Qualification:Frontend Dev</h3>
        <h3>Skills: ReactJS, Javascript ES6, CSS, HTML5, Tailwind CSS, Git & Gihtub, NodeJS... </h3>
      </>
    );
  }
}

export default UserClass;
