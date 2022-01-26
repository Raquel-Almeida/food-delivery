import React, { useState } from "react";

import "./UserDetails.scss";

export default function UserDetails() {
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitting(true);

    setTimeout(() => {
      setSubmitting(false);
    }, 1000);
  };

  return (
    <>
      <h6>Your Details</h6>
      <div className="user-form">
        {submitting && <div>Submitting Form...</div>}
        <form onSubmit={handleSubmit}>
          <label>
            Full Name:
            <input type="text" placeholder="Enter your full name" required />
          </label>
          <label>
            Address:
            <input type="text" placeholder="Enter your address" required />
          </label>
          <label>
            Phone:
            <input type="phone" placeholder="Enter your phone number" required />
          </label>
          <label>
            Email:
            <input type="email" placeholder="Enter your email" required />
          </label>
          <label>
            Any special requests?
            <input type="text" placeholder="Leave us a note..." maxLength="100" />
          </label>
          <button type="submit">Confirm Order</button>
        </form>
      </div>
    </>
  );
}
