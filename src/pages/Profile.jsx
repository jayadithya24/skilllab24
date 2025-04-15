import React from "react";
import { Container, Card, Button } from "react-bootstrap";

const Profile = () => {
  const user = {
    name: "Ice Cream Lover",
    email: "icecream@example.com",
    favorite: "Gadbad 🍨",
  };

  return (
    <Container className="d-flex justify-content-center align-items-center min-vh-100">
      <Card className="p-4 shadow-lg border-0" style={{ width: "100%", maxWidth: "450px" }}>
        <h3 className="text-center mb-4 text-danger fw-bold">👤 Your Profile</h3>
        <div className="mb-3">
          <strong>Name:</strong>
          <p className="mb-1 text-muted">{user.name}</p>
        </div>
        <div className="mb-3">
          <strong>Email:</strong>
          <p className="mb-1 text-muted">{user.email}</p>
        </div>
        <div className="mb-4">
          <strong>Favorite Item:</strong>
          <p className="mb-1 text-muted">{user.favorite}</p>
        </div>
        <Button variant="outline-danger" className="w-100">Edit Profile</Button>
      </Card>
    </Container>
  );
};

export default Profile;
