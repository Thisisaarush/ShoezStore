export type ButtonType = {
  width?: Number;
  height?: Number;
  title?: String;
};

export const Button = ({ title = "Title Here" }: ButtonType) => {
  return (
    <div
      className={`w-44 h-16 bg-black relative flex justify-center items-center`}
    >
      <p className="text-white">{title}</p>
      <span
        className={`w-44 h-16 border border-black absolute top-2 left-2 -z-10`}
      ></span>
    </div>
  );
};
