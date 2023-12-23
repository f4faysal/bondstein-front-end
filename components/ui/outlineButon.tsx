import React from "react";

interface buttonProps {
  title: string;
}

const OutlineButon = ({ title }: buttonProps) => {
  return (
    <button className="py-2 px-6 border border-[#3D00B7] text-[#3D00B7]  rounded-full ">
      {title}
    </button>
  );
};

export default OutlineButon;
