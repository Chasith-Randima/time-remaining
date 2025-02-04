// export function Dialog({ open, onOpenChange, children }) {
//     return open ? (
//       <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
//         <div className="bg-white p-6 rounded shadow-md">{children}</div>
//         <button className="absolute top-4 right-4" onClick={() => onOpenChange(false)}>X</button>
//       </div>
//     ) : null;
//   }
  



export function Dialog({ open, onOpenChange, children }) {
    return open ? (
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
        <div className="bg-white p-6 rounded shadow-md relative">
          {children}
          <button
            className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded"
            onClick={() => onOpenChange(false)}
          >
            X
          </button>
        </div>
      </div>
    ) : null;
  }
  
  export function DialogContent({ children }) {
    return <div className="p-4">{children}</div>;
  }
  
  export function DialogHeader({ children }) {
    return <div className="mb-4 text-lg font-bold">{children}</div>;
  }
  
  export function DialogTitle({ children }) {
    return <h2 className="text-xl font-semibold">{children}</h2>;
  }
  