import React, { memo } from "react";
import DaumPostcode from "react-daum-postcode";
import Modal from "../modal";

const Postcode = ({ getPostcodeData, isOpen, onClose }: any) => {
  const postCodeStyle: any = {
    width: "100%",
    height: "500px",
  };

  const onCompletePost = (data: any) => {
    let fullAddress = data.address;
    let extraAddress = "";
    const jibunAddress = data.jibunAddress ? data.jibunAddress : data.autoJibunAddress;

    if (data.addressType === "R") {
      if (data.bname !== "") {
        extraAddress += data.bname;
      }
      if (data.buildingName !== "") {
        extraAddress += extraAddress !== "" ? `, ${data.buildingName}` : data.buildingName;
      }
      fullAddress += extraAddress !== "" ? ` (${extraAddress})` : "";
    }
    getPostcodeData({ zonecode: data.zonecode, fullAddress, jibunAddress, visible: false });
  };

  return (
    <>
      <Modal
        open={isOpen}
        onClose={e => {
          onClose(false);
        }}
        mode="onlyCancel"
      >
        <DaumPostcode autoClose style={postCodeStyle} onComplete={onCompletePost} />
      </Modal>
    </>
  );
};

export default memo(Postcode);
