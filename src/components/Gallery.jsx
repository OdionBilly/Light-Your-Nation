import React from "react";
import { useState } from "react";
import { Testimonia } from "./Testimonia";
import { Modal } from "./modal";

export const Gallery = () => {
  const [showModal, setShowModal] = useState(false);

  function openModal() {
    console.log("open modal");
    setShowModal(true);
  }

  function closeModal() {
    console.log("close modal");
    setShowModal(false);
  }
  return (
    <div>
      <div className="px-10 pb-10">
        <h1 className="font-merriweather text-[30px]">
          Our Previous Project that we have done
        </h1>
        <Testimonia handleClick={openModal} text="See More" />
      </div>
      {/* <div>{setShowModal && <Modal />}</div> */}
      <Modal/>
    </div>
  );
};
