export interface BlackBeltProps {
  width?: number;
}

export const BlackBelt = () => (
  <div className={`flex h-[8px] w-full`}>
    <div className="h-full w-[80%] bg-black" />
    <div className="bg-red mx-1 flex h-full w-[10%] justify-end bg-red-600 px-1" />
    <div className="h-full w-[10%] bg-black" />
  </div>
);
