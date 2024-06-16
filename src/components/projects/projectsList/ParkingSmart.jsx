import React from "react";
import BackButton from "../../../../public/img/BackButton.svg";
import { useNavigate } from "react-router-dom";
import Markdown from "react-markdown";
import Carousel from "../../carousel/Carousel";

const ParkingSmart = () => {
  const markDownText = `
**Functionalities**

**QR Generator Page**

**QR Code Generation for Vehicle Registration:**
- Users can register their vehicles by entering their license plate number.
- The application generates a QR code for the entered license plate number.
- The status of the QR code generation is displayed (e.g., "Printing," "Printed," "Failed").

**Check-In Using QR Code:**
- Users can check in their vehicles using the generated QR code.
- The system verifies the QR code and updates the check-in status accordingly (e.g., "Successfully checked-in," "Code is not valid," "Garage is full").

**Tabs for Different Actions:**
- The page has two tabs: "Register" for vehicle registration and "Check-in" for vehicle check-ins.

**Status Display:**
- The current status of the QR code generation or check-in process is displayed to the user.

**Generated and Failed Counts:**
- The page displays the total number of successfully generated QR codes and the number of failed attempts.

**QR Code Image and Copy Button:**
- Once a QR code is generated, it is displayed on the page with an option to copy the QR code string.

**Garage Management Page**

**Display Checked-In Vehicles:**
- The page displays a table of all vehicles currently checked into the garage, including details such as slot number, plate number, check-in time, and parking duration.

**Calculate Parking Fee:**
- The system calculates the parking fee based on the duration of the parking. The first hour is free, and after that, a fee is calculated per minute.

**Payment Integration:**
- Users can pay their parking fee via Stripe integration. Clicking the "Pay" button initiates the payment process, and upon successful payment, the vehicle is checked out.

**Visual Representation of Parking Slots:**
- The page visually represents the garage with images of parked cars in the respective slots.

**Error Handling**

**QR Generator Page**

**Input Validation:**
- The application validates the length of the entered plate number to ensure it meets the required format.

**API Error Handling:**
- The application handles API errors by updating the status to "Failed" if the QR code generation or check-in process encounters an error.

**Button State Management:**
- The submit button is disabled while waiting for a response from the server to prevent multiple submissions. A countdown timer is implemented to manage the wait time between successive registration attempts.

**Garage Management Page**

**Fetch Garage Data:**
- The application fetches the current state of the garage from the backend. If the fetch request fails, it logs an error without disrupting the user interface.

**Parking Fee Calculation:**
- The system handles errors in calculating the parking fee and ensures accurate billing.

**Stripe Payment Integration:**
- Errors during the payment process are logged, and appropriate messages are displayed to the user. The system checks the payment status and handles cases where the payment is not successful.
`;
  const repo =
    " https://github.com/Ahmedyasser19/CarParkingSystem2024/tree/main";
  const navigate = useNavigate();
  const images = [
    "/img/parkingSmart/Home.png",
    "/img/parkingSmart/garage.png",
    "/img/parkingSmart/stripe.png",
    "/img/parkingSmart/reserve.png",
  ];

  return (
    <div className="ProjectsContainer">
      <div className="BackButton" onClick={() => navigate(-1)}>
        <img src={BackButton} />
      </div>
      <div className="ProjectTitle">
        <h1>Parking Smart</h1>
        <h2>{"Full Stack Project. (scroll for full desc)"}</h2>
      </div>
      <div className="mainContainer">
        <div className="ProjectDesc">
          <Markdown>{markDownText}</Markdown>
        </div>
        <Carousel images={images} gitRepo={repo} />
      </div>
      <div className="ProjectTech">
        <ul className="Tech">
          Tech:
          <li>HTML </li>
          <li> CSS </li>
          <li> REACT</li>
          <li> Nextjs </li>
          <li> Node js</li>
          <li> Express</li>
        </ul>
        <a href={repo} target="_blank">
          Link
        </a>
      </div>
    </div>
  );
};

export default ParkingSmart;
