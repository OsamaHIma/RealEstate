import Image from "next/image";

const ImageCol = ({ src, sectionName, ClassName }) => {
  return (
    <div className="image-container">
      <Image
        src={src}
        className={`rounded-t-full rounded-b-md border-black/10  dark:border-white/20 border-solid border-[8px] mx-auto ${ClassName}`}
        alt={`${sectionName} section Image`}
        width={400}
        height={400}
      />
    </div>
  );
};

export default ImageCol;
