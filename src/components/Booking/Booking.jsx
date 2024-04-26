import React from "react";
import Button from "components/Button/Button";
import { getTodayFormatted } from "utils/utils";

import {
  Wrapper,
  BookingHeader,
  BookingTitle,
  BookingSubtitle,
  BookingForm,
  BookingInput,
  BookingComment,
} from "./Booking.styled";

const handleSubmit = e => {
  e.preventDefault();
  window.location.reload();
};

const Booking = () => {
  return (
    <Wrapper>
      <BookingHeader>
        <BookingTitle>Book your campervan now</BookingTitle>
        <BookingSubtitle>Stay connected! We are always ready to help you.</BookingSubtitle>
      </BookingHeader>

      <BookingForm onSubmit={handleSubmit}>
        <label>
          <span className="visually-hidden">Name</span>
          <BookingInput type="text" id="name" name="name" placeholder="Name" required />
        </label>

        <label>
          <span className="visually-hidden">Email</span>
          <BookingInput type="email" id="email" name="email" placeholder="Email" required />
        </label>

        <label>
          <span className="visually-hidden">Date</span>
          <BookingInput
            min={getTodayFormatted()}
            max="2050-01-01"
            type="date"
            id="date"
            name="date"
            required
          />
        </label>

        <label>
          <span className="visually-hidden">Comment</span>
          <BookingComment id="comment" name="comment" rows="4" placeholder="Comment" />
        </label>

        <Button type="submit">Submit</Button>
      </BookingForm>
    </Wrapper>
  );
};

export default Booking;
