import React, { useState } from "react";
import useAuth from "../../Hooks/useAuth";

const MakeAdmin = () => {
  const { admin, user, logout } = useAuth();
  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState(false);

  const handleOnBlur = (e) => {
    setEmail(e.target.value);
  };
  const addAdmin = () => {
    const user = { email };
    fetch("https://ancient-scrubland-54558.herokuapp.com/users/admin", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          setSuccess(true);
        }
      });
  };
  return (
    <div>
      <h1 className="mb-3">Make A New Admin</h1>
      <div className="form-floating mb-3">
        <input
        onBlur={handleOnBlur}
        name="email"
          type="text"
          className="form-control"
          id="floatingInput"
          placeholder="Your Name"
        />
        <label for="floatingInput">Admin Email</label>
      </div>
      <button onClick={addAdmin}  type="button" className="btn btn-outline-dark btn-lg">
        Make Admin
      </button>
      {success && (
              <div className="my-3 alert alert-success" role="alert">
                Made Admin Successfully.
              </div>
            )}
    </div>
  );
};

export default MakeAdmin;
