import React from "react";

interface buttonProps {
  title: string;
}

const PrimaryButton = ({ title }: buttonProps) => {
  return (
    <button className="w-[50%] md:w-[25%] py-2 px-6 border border-[#3D00B7] bg-[#3D00B7] text-white rounded-full ">
      {title}
    </button>
  );
};

export default PrimaryButton;
