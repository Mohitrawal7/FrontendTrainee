
const VerticalCard = ({ count, title1,title2, desc1,desc2 }) => {
  return (
    <div 
      className="md:col-span-3 lg:col-span-2.5 bg-[#FDF1F1] rounded-4xl pt-8 px-10 py-4 flex flex-col justify-center cursor-pointer border border-transparent hover:border-[#C63A3D]/20 transition-colors"
    >
      <div className="flex gap-0 justify-content  ">
       
        <div className="[writing-mode:vertical-lr] text-2xl rotate-180 text-[#C63A3D] font-bold mb-2  tracking-wide">
          {title1}
        </div>
        <div className="[writing-mode:vertical-lr] rotate-180 text-[#C63A3D] font-bold text-2xl mb-2 tracking-wide text-wrap">
          {title2}
        </div>
        <div className="[writing-mode:vertical-lr] rotate-180  ml-3 text-[#C63A3D] text-[13px] font-medium pt-2 text-wrap">
          {desc1}
        </div>
        <div className="[writing-mode:vertical-lr] rotate-180  text-[#C63A3D] text-[13px] font-medium pt-2 text-wrap">
          {desc2}
        </div>
      </div>

      <div className="mt-8 text-center text-5xl ">
        <h2 className="text-9xl -mt-4 font-black text-[#C63A3D] tracking-tighter relative inline-block">
          {count}
          <span className="text-3xl absolute -top-1 -right-4 font-bold">+</span>
        </h2>
      </div>
    </div>
  );
};

export default VerticalCard;