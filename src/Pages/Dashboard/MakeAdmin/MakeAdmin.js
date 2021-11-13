import React, { useState } from 'react';
import { Button, Container } from 'react-bootstrap';

const MakeAdmin = () => {
    const [email, setEmail] = useState('')
    const [success, setSuccess] = useState(false)

    const handleOnBlur = e => {
        setEmail(e.target.value)
    }


    const handleAdminSubmit = e =>{
        const user = {email}
        fetch("https://enigmatic-anchorage-98613.herokuapp.com/users", {
          method: "PUT",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(user),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.modifiedCount) {
              console.log(data);
              setSuccess(true);
            }
          });
        e.preventDefault();
    }
    return (
      <Container>
        <h2>Make an Admin</h2>
        <form onSubmit={handleAdminSubmit}>
          <div className="mb-3 w-50">
            <label for="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              onBlur={handleOnBlur}
              type="email"
              className="form-control"
            />
          </div>
          <Button type="submit" className="btn btn-primary">
            Make Admin
          </Button>
        </form>
        {success && (
          <div className="alert alert-primary d-block w-50" role="alert">
            Admin Made Successfully!!
          </div>
        )}
      </Container>
    );
};

export default MakeAdmin;