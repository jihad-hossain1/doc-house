import { Modal } from "antd";
import React from "react";

const BookModalComponents = ({
  handleCancel,
  handleOk,
  isModalOpen,
  items,
}) => {
  console.log(items);
  return (
    <>
      <Modal
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        cancelButtonProps={{ style: { display: "none" } }}
        okButtonProps={{ style: { display: "none" } }}
      >
        <div className="flex flex-col justify-center items-center space-y-2">
          <h4 className="text-xl font-semibold pb-2">{items?.name}</h4>
          <p>Schedule time: {items?.schedule}</p>
          <p>Pay Time: {items?.date}</p>
          <p>Price: ${items?.price}</p>
        </div>
      </Modal>
    </>
  );
};

export default BookModalComponents;
