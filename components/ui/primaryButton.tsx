interface buttonProps {
  title: string;
}

const PrimaryButton = ({ title }: buttonProps) => {
  return (
    <button className="w-[50%] md:w-[25%] py-2 px-7 border border-[#3d00b7] bg-[#3d00b7] text-white rounded-full ">
      {title}
    </button>
  );
};

export default PrimaryButton;
