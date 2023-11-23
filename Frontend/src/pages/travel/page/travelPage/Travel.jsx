// import React from "react";
import Footer from "../../../../components/footer/Footer";
import MailList from "../../../../components/mailList/MailList";
import Navbar from "../../../../components/navbar/Navbar";
import Headertravel from "../../component/headertravel/Headertravel";

import "./travel.css";

const Travel = () => {
  return (
    <div>
      <Navbar />
      {/* <Headertravel /> */}
      <Headertravel />
      <MailList />
      <Footer />
    </div>
  );
};

export default Travel;
