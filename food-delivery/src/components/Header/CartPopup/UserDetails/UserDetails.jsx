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
            <input type="text" />
          </label>
          <label>
            Address:
            <input type="text" />
          </label>
          <label>
            Telephone:
            <input type="text" />
          </label>
          <label>
            Email:
            <input type="text" />
          </label>
          <button type="submit">Confirm Order</button>
        </form>
      </div>
    </>
  );
}
