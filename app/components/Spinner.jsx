import React from "react";
import spinner from "../../public/spinner.gif";
import Image from "next/image";

const Spinner = () => {
  return (
    <>
      <Image src={spinner} alt="loading.." className="w-[200px] m-auto block" />
    </>
  );
};
export default Spinner;
