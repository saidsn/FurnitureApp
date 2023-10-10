import React, { useState } from "react";
import Header from "../header/Header";
import Navbar from "../navbar/Navbar";

const Headers = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Header open={open} setOpen={setOpen} />
      <Navbar open={open} setOpen={setOpen} />
    </>
  );
};

export default Headers;
