import React, { useEffect, useState } from 'react';

const PopupMessage = ({ message, duration = 4000, onClose }: {message: boolean, duration: number, onClose: () => void  }) => {

  const [progress, setProgress] = useState(100);

  useEffect(() => {
    const startTime = Date.now();

    const interval = setInterval(() => {
      const elapsedTime = Date.now() - startTime;
      const newProgress = Math.max(100 - (elapsedTime / duration) * 100, 0);
      setProgress(newProgress);

      if (newProgress <= 0) {
        clearInterval(interval);
        onClose();
      }
    }, 50); // Update every 50ms for smooth animation

    return () => clearInterval(interval);
  }, [duration, onClose]);


  
  return (
    <div className={`absolute right-6 bottom-3 bg-white shadow-lg border-2 ${message ? 'border-green-500' : 'border-red-500'} rounded-lg overflow-hidden max-w-96`}>
      <p className="text-gray-900 text-lg p-4">{message ? 'Email sent successfully we will contact you soon' : 'Oops something went wrong please try again later'}</p>
      <div className="w-full h-[6px]">
        <div
          className="h-full bg-blue-600 "
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    </div>
  );
};

export default PopupMessage;
