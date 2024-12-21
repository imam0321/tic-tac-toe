

export const Square = ({value, onSquareClick}) => {
  
  
  return (
    <button
      onClick={onSquareClick}
      className="bg-white border border-gray-400 leading-9 text-lg h-12 w-12 m-1"
    >
      {value}
    </button>
  );
};
