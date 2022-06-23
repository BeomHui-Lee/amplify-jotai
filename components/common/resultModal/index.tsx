import { memo } from "react";
import Modal from "@components/common/modal";
import ErrorIcon from "@components/icons/error-icon";
import CheckIcon from "@components/icons/check-icon";

type ResultModalType = "success" | "error" | "imageUploadError";

export interface Props {
  type: ResultModalType;
  visible: boolean;
  func: Function;
  isImageUpload: boolean;
}

const signUpResultModal = ({ type = "success", visible, func, isImageUpload }: Props) => {
  return (
    <Modal
      open={visible}
      mode={type === "error" ? "onlyCancel" : "onlyConfirm"}
      confirmButtonText={"돌아가기"}
      cancleButtonText={"돌아가기"}
      onClose={e => {
        func(e, "signUpResult");
      }}
    >
      <div className="text-center">
        {/*모달 헤더*/}
        <div className="flex justify-center">{type === "success" ? <CheckIcon /> : <ErrorIcon />}</div>
        {/*모달 타이틀*/}
        <div className="mt-5">
          <span className="text-2xl font-bold">{type === "success" ? "가입 신청 완료" : "가입 신청 오류"}</span>
        </div>
        {/*모달 내용*/}
        <div className="mt-5">
          <span className="text-gray-600">
            {type === "error" ? (
              <>
                <span>오류가 발생 하였습니다.</span>
                <br />
                <span>관리자에게 문의 하여 주세요.</span>
              </>
            ) : type === "success" ? (
              <>
                <span>관리자 승인완료 후</span>
                <br />
                <span>정상적인 서비스를 이용하실 수 있습니다.</span>
              </>
            ) : (
              <>
                <span>오류가 발생 하였습니다.</span>
                <br />
                <span>사업자 정보 스텝에서 사업자등록증을 다시 첨부해주세요</span>
              </>
            )}
          </span>
        </div>
      </div>
    </Modal>
  );
};

export default memo(signUpResultModal);
