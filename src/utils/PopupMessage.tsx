// import React, { useEffect, useState } from 'react';

// const PopupMessage = ({ message, duration = 5000, onClose }: {message: string, duration: number, onClose: () => void  }) => {

//   const [progress, setProgress] = useState(100);

//   // useEffect(() => {
//     // const startTime = Date.now();

//   //   const interval = setInterval(() => {
//   //     const elapsedTime = Date.now() - startTime;
//   //     const newProgress = Math.max(100 - (elapsedTime / duration) * 100, 0);
//   //     setProgress(newProgress);

//   //     if (newProgress <= 0) {
//   //       clearInterval(interval);
//   //       onClose();
//   //     }
//   //   }, 50); // Update every 50ms for smooth animation

//   //   return () => clearInterval(interval);
//   // }, [duration, onClose]);

//   return (
//     <div className='bg-red-400 h-20 max-w-40'>

//     </div>
//   );

//   // return (
//   //   <div className="absolute bg-white shadow-lg border border-gray-300 rounded-xl p-6 w-96">
//   //     <p className="text-gray-900 text-lg font-semibold mb-4">{message}</p>
//   //     <div className="relative w-full h-2 bg-gray-200 rounded-full overflow-hidden">
//   //       <div
//   //         className="absolute top-0 left-0 h-full bg-blue-600 "
//   //         style={{ width: `${progress}%` }}
//   //       ></div>
//   //     </div>
//   //   </div>
//   // );
// };

// export default PopupMessage;
