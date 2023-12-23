interface buttonProps {
  title: string;
}

const OutlineButon = ({ title }: buttonProps) => {
  return (
    <button className="py-2 px-7 border-2 border-[#3d00b7] text-[#3d00b7]  rounded-full ">
      {title}
    </button>
  );
};

export default OutlineButon;
