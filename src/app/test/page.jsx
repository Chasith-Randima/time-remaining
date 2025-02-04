// 'use client';

// import { useEffect, useState } from 'react';

// const CountdownTimer = () => {
//   const [timeLeft, setTimeLeft] = useState({
//     days: 5,
//     hours: 20,
//     minutes: 12,
//     seconds: 39,
//   });

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setTimeLeft((prev) => {
//         let { days, hours, minutes, seconds } = prev;
//         if (seconds > 0) {
//           seconds -= 1;
//         } else {
//           if (minutes > 0) {
//             minutes -= 1;
//             seconds = 59;
//           } else if (hours > 0) {
//             hours -= 1;
//             minutes = 59;
//             seconds = 59;
//           } else if (days > 0) {
//             days -= 1;
//             hours = 23;
//             minutes = 59;
//             seconds = 59;
//           } else {
//             clearInterval(interval);
//           }
//         }
//         return { days, hours, minutes, seconds };
//       });
//     }, 1000);

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="flex flex-col items-center bg-[#1D3A50] p-6 rounded-lg text-white">
//       <h2 className="text-lg mb-4 tracking-wide">TIME REMAINING</h2>
//       <div className="flex space-x-4">
//         {Object.entries(timeLeft).map(([label, value], index) => (
//           <div key={index} className="flex flex-col items-center">
//             <div className="relative w-20 h-24 bg-green-500 text-4xl font-bold rounded-lg flex justify-center items-center overflow-hidden">
//               <span className="absolute top-0 left-0 w-full h-1/2 bg-green-600"></span>
//               <span className="relative z-10">{String(value).padStart(2, '0')}</span>
//               {label === 'seconds' && (
//                 <div className="absolute bottom-0 left-0 w-full h-1/2 bg-green-400"></div>
//                 // <div className="absolute bottom-0 left-0 w-full h-1/2 bg-green-400 animate-flip"></div>
//               )}
//             </div>
//             <span className="text-sm mt-2 tracking-wide">{label.toUpperCase()}</span>
//           </div>
//         ))}
//       </div>
//     </div>

         
//   );
// };

// export default CountdownTimer;















// 'use client';

// import { useEffect, useState } from 'react';

// const CountdownTimer = () => {
//   const calculateTimeLeft = () => {
//     const targetDate = new Date('2025-12-31T23:59:59');
//     const now = new Date();
//     const difference = targetDate - now;

//     if (difference <= 0) {
//       return { days: 0, hours: 0, minutes: 0, seconds: 0 };
//     }

//     return {
//       days: Math.floor(difference / (1000 * 60 * 60 * 24)),
//       hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
//       minutes: Math.floor((difference / (1000 * 60)) % 60),
//       seconds: Math.floor((difference / 1000) % 60),
//     };
//   };

//   const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setTimeLeft(calculateTimeLeft());
//     }, 1000);

//     return () => clearInterval(timer);
//   }, []);

//   return (
//     <div
//       className="w-full h-96 rounded-2xl flex gap-9 flex-col items-center justify-center bg-cover bg-center"
//       style={{ backgroundImage: "url(https://pagedone.io/asset/uploads/1710565658.jpg)" }}
//     >
//       <div className="flex items-start justify-center w-full gap-1.5">
//         {Object.entries(timeLeft).map(([label, value]) => (
//           <div key={label} className="timer">
//             <div className="rounded-xl bg-black/25 backdrop-blur-sm py-3 min-w-[96px] flex items-center justify-center flex-col gap-1 px-3">
//               <h3 className="font-manrope font-semibold text-2xl text-white text-center">{value}</h3>
//               <p className="text-lg uppercase font-normal text-white mt-1 text-center w-full">{label}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default CountdownTimer;





// "use client";

// import { useEffect, useState } from "react";

// const CountdownTimer = () => {
//   const [birthDate, setBirthDate] = useState(null);
//   const [timeLeft, setTimeLeft] = useState({ seconds: 0 });
//   const [showModal, setShowModal] = useState(false);

//   // Function to calculate remaining seconds until midnight
//   const calculateTimeLeft = () => {
//     const now = new Date();
//     const midnight = new Date(now);
//     midnight.setHours(23, 59, 59, 999); // Set to end of the current day
//     const difference = midnight - now;

//     return {
//       seconds: Math.floor(difference / 1000),
//     };
//   };

//   useEffect(() => {
//     const storedBirthDate = localStorage.getItem("birthDate");

//     if (!storedBirthDate) {
//       setShowModal(true);
//     } else {
//       setBirthDate(storedBirthDate);
//       setTimeLeft(calculateTimeLeft());
//     }
//   }, []);

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setTimeLeft(calculateTimeLeft());
//     }, 1000);

//     return () => clearInterval(timer);
//   }, []);

//   const handleSaveBirthDate = () => {
//     const inputDate = document.getElementById("birthDateInput").value;
//     if (inputDate) {
//       localStorage.setItem("birthDate", inputDate);
//       setBirthDate(inputDate);
//       setShowModal(false);
//     }
//   };

//   return (
//     <>
//       {/* Modal for birthdate input */}
//       {showModal && (
//         <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
//           <div className="bg-white p-6 rounded-lg shadow-lg text-center">
//             <h2 className="text-xl font-semibold mb-4">Enter Your Birth Date</h2>
//             <input
//               type="date"
//               id="birthDateInput"
//               className="border p-2 rounded w-full mb-4"
//             />
//             <button
//               onClick={handleSaveBirthDate}
//               className="bg-blue-500 text-white px-4 py-2 rounded"
//             >
//               Save
//             </button>
//           </div>
//         </div>
//       )}

//       {/* Countdown UI */}
//       <div
//         className="w-full h-96 rounded-2xl flex gap-9 flex-col items-center justify-center bg-cover bg-center"
//         style={{ backgroundImage: "url(https://pagedone.io/asset/uploads/1710565658.jpg)" }}
//       >
//         <div className="flex items-start justify-center w-full gap-1.5">
//           <div className="timer">
//             <div className="rounded-xl bg-black/25 backdrop-blur-sm py-3 min-w-[96px] flex items-center justify-center flex-col gap-1 px-3">
//               <h3 className="font-manrope font-semibold text-2xl text-white text-center">
//                 {timeLeft.seconds}
//               </h3>
//               <p className="text-lg uppercase font-normal text-white mt-1 text-center w-full">
//                 Seconds Left Today
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default CountdownTimer;















// "use client";

// import { useEffect, useState } from "react";

// const CountdownTimer = () => {
//   const [birthDate, setBirthDate] = useState(null);
//   const [timeLeftToday, setTimeLeftToday] = useState({ hours: 0, seconds: 0 });
//   const [timeLeftMonth, setTimeLeftMonth] = useState({
//     days: 0,
//     hours: 0,
//     minutes: 0,
//     seconds: 0,
//     weeks: 0,
//   });
//   const [showModal, setShowModal] = useState(false);

//   // Function to calculate remaining time until midnight
//   const calculateTimeLeftToday = () => {
//     const now = new Date();
//     const midnight = new Date(now);
//     midnight.setHours(23, 59, 59, 999); // End of today
//     const difference = midnight - now;

//     return {
//       hours: Math.floor(difference / (1000 * 60 * 60)),
//       seconds: Math.floor(difference / 1000),
//     };
//   };

//   // Function to calculate remaining time until the end of the month
//   const calculateTimeLeftMonth = () => {
//     const now = new Date();
//     const endOfMonth = new Date(now.getFullYear(), now.getMonth() + 1, 0, 23, 59, 59, 999); // Last second of the month
//     const difference = endOfMonth - now;

//     return {
//       days: Math.floor(difference / (1000 * 60 * 60 * 24)),
//       hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
//       minutes: Math.floor((difference / (1000 * 60)) % 60),
//       seconds: Math.floor((difference / 1000) % 60),
//       weeks: Math.floor(difference / (1000 * 60 * 60 * 24 * 7)),
//     };
//   };

//   useEffect(() => {
//     const storedBirthDate = localStorage.getItem("birthDate");

//     if (!storedBirthDate) {
//       setShowModal(true);
//     } else {
//       setBirthDate(storedBirthDate);
//       setTimeLeftToday(calculateTimeLeftToday());
//       setTimeLeftMonth(calculateTimeLeftMonth());
//     }
//   }, []);

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setTimeLeftToday(calculateTimeLeftToday());
//       setTimeLeftMonth(calculateTimeLeftMonth());
//     }, 1000);

//     return () => clearInterval(timer);
//   }, []);

//   const handleSaveBirthDate = () => {
//     const inputDate = document.getElementById("birthDateInput").value;
//     if (inputDate) {
//       localStorage.setItem("birthDate", inputDate);
//       setBirthDate(inputDate);
//       setShowModal(false);
//     }
//   };

//   return (
//     <>
//       {/* Modal for birthdate input */}
//       {showModal && (
//         <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
//           <div className="bg-white p-6 rounded-lg shadow-lg text-center">
//             <h2 className="text-xl font-semibold mb-4">Enter Your Birth Date</h2>
//             <input
//               type="date"
//               id="birthDateInput"
//               className="border p-2 rounded w-full mb-4"
//             />
//             <button
//               onClick={handleSaveBirthDate}
//               className="bg-blue-500 text-white px-4 py-2 rounded"
//             >
//               Save
//             </button>
//           </div>
//         </div>
//       )}

//       {/* Countdown UI */}
//       <div
//         className="w-full h-auto p-6 rounded-2xl bg-cover bg-center flex flex-col items-center justify-center"
//         style={{ backgroundImage: "url(https://pagedone.io/asset/uploads/1710565658.jpg)" }}
//       >
//         <div className="grid grid-cols-3 gap-6 w-full max-w-4xl">
//           {/* Left Section - Today's Remaining Time */}
//           <div className="col-span-1 flex flex-col items-center gap-4">
//             <h2 className="text-white text-lg font-semibold">Today's Remaining Time</h2>
//             <div className="timer">
//               <div className="rounded-xl bg-black/25 backdrop-blur-sm py-3 min-w-[120px] flex items-center justify-center flex-col gap-1 px-3">
//                 <h3 className="font-manrope font-semibold text-2xl text-white text-center">
//                   {timeLeftToday.hours}
//                 </h3>
//                 <p className="text-lg uppercase font-normal text-white mt-1 text-center w-full">
//                   Hours Left
//                 </p>
//               </div>
//             </div>
//             <div className="timer">
//               <div className="rounded-xl bg-black/25 backdrop-blur-sm py-3 min-w-[120px] flex items-center justify-center flex-col gap-1 px-3">
//                 <h3 className="font-manrope font-semibold text-2xl text-white text-center">
//                   {timeLeftToday.seconds}
//                 </h3>
//                 <p className="text-lg uppercase font-normal text-white mt-1 text-center w-full">
//                   Seconds Left
//                 </p>
//               </div>
//             </div>
//           </div>

//           {/* Right Section - Monthly Remaining Time */}
//           <div className="col-span-2 flex flex-col items-center gap-4">
//             <h2 className="text-white text-lg font-semibold">Remaining Time in This Month</h2>
//             <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
//               {Object.entries(timeLeftMonth).map(([label, value]) => (
//                 <div key={label} className="timer">
//                   <div className="rounded-xl bg-black/25 backdrop-blur-sm py-3 min-w-[120px] flex items-center justify-center flex-col gap-1 px-3">
//                     <h3 className="font-manrope font-semibold text-2xl text-white text-center">
//                       {value}
//                     </h3>
//                     <p className="text-lg uppercase font-normal text-white mt-1 text-center w-full">
//                       {label}
//                     </p>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default CountdownTimer;






















// "use client";

// import { useEffect, useState } from "react";

// const CountdownTimer = () => {
//   const [birthDate, setBirthDate] = useState(null);
//   const [timeLeftToday, setTimeLeftToday] = useState({ hours: 0, seconds: 0 });
//   const [timeLeftMonth, setTimeLeftMonth] = useState({
//     days: 0,
//     weeks: 0,
//     hours: 0,
//     minutes: 0,
//     seconds: 0,
//   });
//   const [showModal, setShowModal] = useState(false);

//   // Function to calculate remaining time until midnight
//   const calculateTimeLeftToday = () => {
//     const now = new Date();
//     const midnight = new Date(now);
//     midnight.setHours(23, 59, 59, 999); // End of today
//     const difference = midnight - now;

//     return {
//       hours: Math.floor(difference / (1000 * 60 * 60)),
//       seconds: Math.floor(difference / 1000),
//     };
//   };

//   // Function to calculate remaining time until the end of the month
//   const calculateTimeLeftMonth = () => {
//     const now = new Date();
//     const lastDayOfMonth = new Date(now.getFullYear(), now.getMonth() + 1, 0);
//     const endOfMonth = new Date(lastDayOfMonth);
//     endOfMonth.setHours(23, 59, 59, 999); // Last second of the month

//     const difference = endOfMonth - now;

//     return {
//       days: Math.floor((difference / (1000 * 60 * 60 * 24))),
//       weeks: Math.floor((difference / (1000 * 60 * 60 * 24)) / 7),
//       hours: Math.floor(difference / (1000 * 60 * 60)),
//       minutes: Math.floor(difference / (1000 * 60)),
//       seconds: Math.floor(difference / 1000),
//     };
//   };

//   useEffect(() => {
//     const storedBirthDate = localStorage.getItem("birthDate");

//     if (!storedBirthDate) {
//       setShowModal(true);
//     } else {
//       setBirthDate(storedBirthDate);
//       setTimeLeftToday(calculateTimeLeftToday());
//       setTimeLeftMonth(calculateTimeLeftMonth());
//     }
//   }, []);

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setTimeLeftToday(calculateTimeLeftToday());
//       setTimeLeftMonth(calculateTimeLeftMonth());
//     }, 1000);

//     return () => clearInterval(timer);
//   }, []);

//   const handleSaveBirthDate = () => {
//     const inputDate = document.getElementById("birthDateInput").value;
//     if (inputDate) {
//       localStorage.setItem("birthDate", inputDate);
//       setBirthDate(inputDate);
//       setShowModal(false);
//     }
//   };

//   return (
//     <>
//       {/* Modal for birthdate input */}
//       {showModal && (
//         <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
//           <div className="bg-white p-6 rounded-lg shadow-lg text-center">
//             <h2 className="text-xl font-semibold mb-4">Enter Your Birth Date</h2>
//             <input
//               type="date"
//               id="birthDateInput"
//               className="border p-2 rounded w-full mb-4"
//             />
//             <button
//               onClick={handleSaveBirthDate}
//               className="bg-blue-500 text-white px-4 py-2 rounded"
//             >
//               Save
//             </button>
//           </div>
//         </div>
//       )}

//       {/* Countdown UI */}
//       <div
//         className="w-full h-auto p-6 rounded-2xl bg-cover bg-center flex flex-col items-center justify-center"
//         style={{ backgroundImage: "url(https://pagedone.io/asset/uploads/1710565658.jpg)" }}
//       >
//         <div className="grid grid-cols-3 gap-6 w-full max-w-4xl">
//           {/* Left Section - Today's Remaining Time */}
//           <div className="col-span-1 flex flex-col items-center gap-4">
//             <h2 className="text-white text-lg font-semibold">Today's Remaining Time</h2>
//             <div className="timer">
//               <div className="rounded-xl bg-black/25 backdrop-blur-sm py-3 min-w-[120px] flex items-center justify-center flex-col gap-1 px-3">
//                 <h3 className="font-manrope font-semibold text-2xl text-white text-center">
//                   {timeLeftToday.hours}
//                 </h3>
//                 <p className="text-lg uppercase font-normal text-white mt-1 text-center w-full">
//                   Hours Left
//                 </p>
//               </div>
//             </div>
//             <div className="timer">
//               <div className="rounded-xl bg-black/25 backdrop-blur-sm py-3 min-w-[120px] flex items-center justify-center flex-col gap-1 px-3">
//                 <h3 className="font-manrope font-semibold text-2xl text-white text-center">
//                   {timeLeftToday.seconds}
//                 </h3>
//                 <p className="text-lg uppercase font-normal text-white mt-1 text-center w-full">
//                   Seconds Left
//                 </p>
//               </div>
//             </div>
//           </div>

//           {/* Right Section - Monthly Remaining Time */}
//           <div className="col-span-2 flex flex-col items-center gap-4">
//             <h2 className="text-white text-lg font-semibold">Remaining Time in This Month</h2>
//             <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
//               {/* Days Remaining */}
//               <div className="timer">
//                 <div className="rounded-xl bg-black/25 backdrop-blur-sm py-3 min-w-[120px] flex items-center justify-center flex-col gap-1 px-3">
//                   <h3 className="font-manrope font-semibold text-2xl text-white text-center">
//                     {timeLeftMonth.days}
//                   </h3>
//                   <p className="text-lg uppercase font-normal text-white mt-1 text-center w-full">
//                     Days Left
//                   </p>
//                 </div>
//               </div>

//               {/* Weeks Remaining */}
//               <div className="timer">
//                 <div className="rounded-xl bg-black/25 backdrop-blur-sm py-3 min-w-[120px] flex items-center justify-center flex-col gap-1 px-3">
//                   <h3 className="font-manrope font-semibold text-2xl text-white text-center">
//                     {timeLeftMonth.weeks}
//                   </h3>
//                   <p className="text-lg uppercase font-normal text-white mt-1 text-center w-full">
//                     Weeks Left
//                   </p>
//                 </div>
//               </div>

//               {/* Hours Remaining */}
//               <div className="timer">
//                 <div className="rounded-xl bg-black/25 backdrop-blur-sm py-3 min-w-[120px] flex items-center justify-center flex-col gap-1 px-3">
//                   <h3 className="font-manrope font-semibold text-2xl text-white text-center">
//                     {timeLeftMonth.hours}
//                   </h3>
//                   <p className="text-lg uppercase font-normal text-white mt-1 text-center w-full">
//                     Hours Left
//                   </p>
//                 </div>
//               </div>

//               {/* Minutes Remaining */}
//               <div className="timer">
//                 <div className="rounded-xl bg-black/25 backdrop-blur-sm py-3 min-w-[120px] flex items-center justify-center flex-col gap-1 px-3">
//                   <h3 className="font-manrope font-semibold text-2xl text-white text-center">
//                     {timeLeftMonth.minutes}
//                   </h3>
//                   <p className="text-lg uppercase font-normal text-white mt-1 text-center w-full">
//                     Minutes Left
//                   </p>
//                 </div>
//               </div>

//               {/* Seconds Remaining */}
//               <div className="timer">
//                 <div className="rounded-xl bg-black/25 backdrop-blur-sm py-3 min-w-[120px] flex items-center justify-center flex-col gap-1 px-3">
//                   <h3 className="font-manrope font-semibold text-2xl text-white text-center">
//                     {timeLeftMonth.seconds}
//                   </h3>
//                   <p className="text-lg uppercase font-normal text-white mt-1 text-center w-full">
//                     Seconds Left
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default CountdownTimer;


































// "use client";

// import { useEffect, useState } from "react";

// const CountdownTimer = () => {
//   const [birthDate, setBirthDate] = useState(null);
//   const [timeLeftToday, setTimeLeftToday] = useState({ hours: 0, seconds: 0 });
//   const [timeLeftMonth, setTimeLeftMonth] = useState({
//     days: 0,
//     hours: 0,
//     minutes: 0,
//     seconds: 0,
//     weeks: 0,
//   });
//   const [showModal, setShowModal] = useState(false);

//   // Function to calculate remaining time until midnight
//   const calculateTimeLeftToday = () => {
//     const now = new Date();
//     const midnight = new Date(now);
//     midnight.setHours(23, 59, 59, 999); // End of today
//     const difference = midnight - now;

//     return {
//       hours: Math.floor(difference / (1000 * 60 * 60)),
//       seconds: Math.floor(difference / 1000),
//     };
//   };

//   // Function to calculate remaining time until the end of the month
//   const calculateTimeLeftMonth = () => {
//     const now = new Date();
//     const endOfMonth = new Date(now.getFullYear(), now.getMonth() + 1, 0, 23, 59, 59, 999); // Last second of the month
//     const difference = endOfMonth - now;

//     return {
//       days: Math.floor(difference / (1000 * 60 * 60 * 24)),
//       hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
//       minutes: Math.floor((difference / (1000 * 60)) % 60),
//       seconds: Math.floor((difference / 1000) % 60),
//       weeks: Math.floor(difference / (1000 * 60 * 60 * 24 * 7)),
//     };
//   };

//   useEffect(() => {
//     const storedBirthDate = localStorage.getItem("birthDate");

//     if (!storedBirthDate) {
//       setShowModal(true);
//     } else {
//       setBirthDate(storedBirthDate);
//       setTimeLeftToday(calculateTimeLeftToday());
//       setTimeLeftMonth(calculateTimeLeftMonth());
//     }
//   }, []);

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setTimeLeftToday(calculateTimeLeftToday());
//       setTimeLeftMonth(calculateTimeLeftMonth());
//     }, 1000);

//     return () => clearInterval(timer);
//   }, []);

//   const handleSaveBirthDate = () => {
//     const inputDate = document.getElementById("birthDateInput").value;
//     if (inputDate) {
//       localStorage.setItem("birthDate", inputDate);
//       setBirthDate(inputDate);
//       setShowModal(false);
//     }
//   };

//   return (
//     <>
//       {/* Modal for birthdate input */}
//       {showModal && (
//         <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
//           <div className="bg-white p-6 rounded-lg shadow-lg text-center">
//             <h2 className="text-xl font-semibold mb-4">Enter Your Birth Date</h2>
//             <input
//               type="date"
//               id="birthDateInput"
//               className="border p-2 rounded w-full mb-4"
//             />
//             <button
//               onClick={handleSaveBirthDate}
//               className="bg-blue-500 text-white px-4 py-2 rounded"
//             >
//               Save
//             </button>
//           </div>
//         </div>
//       )}

//       {/* Countdown UI */}
//       <div
//         className="w-full h-auto p-6 rounded-2xl bg-cover bg-center flex flex-col items-center justify-center"
//         style={{ backgroundImage: "url(https://pagedone.io/asset/uploads/1710565658.jpg)" }}
//       >
//         <div className="grid grid-cols-3 gap-6 w-full max-w-4xl">
//           {/* Left Section - Today's Remaining Time */}
//           <div className="col-span-1 flex flex-col items-center gap-4">
//             <h2 className="text-white text-lg font-semibold">Today's Remaining Time</h2>
//             <div className="timer">
//               <div className="rounded-xl bg-black/25 backdrop-blur-sm py-3 min-w-[120px] flex items-center justify-center flex-col gap-1 px-3">
//                 <h3 className="font-manrope font-semibold text-2xl text-white text-center">
//                   {timeLeftToday.hours}
//                 </h3>
//                 <p className="text-lg uppercase font-normal text-white mt-1 text-center w-full">
//                   Hours Left
//                 </p>
//               </div>
//             </div>
//             <div className="timer">
//               <div className="rounded-xl bg-black/25 backdrop-blur-sm py-3 min-w-[120px] flex items-center justify-center flex-col gap-1 px-3">
//                 <h3 className="font-manrope font-semibold text-2xl text-white text-center">
//                   {timeLeftToday.seconds}
//                 </h3>
//                 <p className="text-lg uppercase font-normal text-white mt-1 text-center w-full">
//                   Seconds Left
//                 </p>
//               </div>
//             </div>
//           </div>

//           {/* Right Section - Monthly Remaining Time */}
//           <div className="col-span-2 flex flex-col items-center gap-4">
//             <h2 className="text-white text-lg font-semibold">Remaining Time in This Month</h2>
//             <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
//               {Object.entries(timeLeftMonth).map(([label, value]) => (
//                 <div key={label} className="timer">
//                   <div className="rounded-xl bg-black/25 backdrop-blur-sm py-3 min-w-[120px] flex items-center justify-center flex-col gap-1 px-3">
//                     <h3 className="font-manrope font-semibold text-2xl text-white text-center">
//                       {value}
//                     </h3>
//                     <p className="text-lg uppercase font-normal text-white mt-1 text-center w-full">
//                       {label}
//                     </p>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default CountdownTimer;



































// "use client";

// import { useEffect, useState } from "react";

// const CountdownTimer = () => {
//   const [birthDate, setBirthDate] = useState(null);
//   const [timeLeftToday, setTimeLeftToday] = useState({ hours: 0, seconds: 0 });
//   const [timeLeftMonth, setTimeLeftMonth] = useState({
//     days: 0,
//     hours: 0,
//     minutes: 0,
//     seconds: 0,
//     weeks: 0,
//   });
//   const [timeLeftYear, setTimeLeftYear] = useState({
//     months: 0,
//     weeks: 0,
//     days: 0,
//     hours: 0,
//     seconds: 0,
//   });
//   const [showModal, setShowModal] = useState(false);

//   // Function to calculate remaining time until midnight
//   const calculateTimeLeftToday = () => {
//     const now = new Date();
//     const midnight = new Date(now);
//     midnight.setHours(23, 59, 59, 999);
//     const difference = midnight - now;

//     return {
//       hours: Math.floor(difference / (1000 * 60 * 60)),
//       seconds: Math.floor(difference / 1000),
//     };
//   };

//   // Function to calculate remaining time until the end of the month
//   const calculateTimeLeftMonth = () => {
//     const now = new Date();
//     const endOfMonth = new Date(now.getFullYear(), now.getMonth() + 1, 0, 23, 59, 59, 999);
//     const difference = endOfMonth - now;

//     return {
//       days: Math.floor(difference / (1000 * 60 * 60 * 24)),
//       hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
//       minutes: Math.floor((difference / (1000 * 60)) % 60),
//       seconds: Math.floor((difference / 1000) % 60),
//       weeks: Math.floor(difference / (1000 * 60 * 60 * 24 * 7)),
//     };
//   };

//   // Function to calculate remaining time until the end of the year
//   const calculateTimeLeftYear = () => {
//     const now = new Date();
//     const endOfYear = new Date(now.getFullYear(), 11, 31, 23, 59, 59, 999);
//     const difference = endOfYear - now;

//     return {
//       months: 11 - now.getMonth(), // Remaining months in the year
//       weeks: Math.floor(difference / (1000 * 60 * 60 * 24 * 7)),
//       days: Math.floor(difference / (1000 * 60 * 60 * 24)),
//       hours: Math.floor(difference / (1000 * 60 * 60)),
//       seconds: Math.floor(difference / 1000),
//     };
//   };

//   useEffect(() => {
//     const storedBirthDate = localStorage.getItem("birthDate");

//     if (!storedBirthDate) {
//       setShowModal(true);
//     } else {
//       setBirthDate(storedBirthDate);
//       setTimeLeftToday(calculateTimeLeftToday());
//       setTimeLeftMonth(calculateTimeLeftMonth());
//       setTimeLeftYear(calculateTimeLeftYear());
//     }
//   }, []);

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setTimeLeftToday(calculateTimeLeftToday());
//       setTimeLeftMonth(calculateTimeLeftMonth());
//       setTimeLeftYear(calculateTimeLeftYear());
//     }, 1000);

//     return () => clearInterval(timer);
//   }, []);

//   const handleSaveBirthDate = () => {
//     const inputDate = document.getElementById("birthDateInput").value;
//     if (inputDate) {
//       localStorage.setItem("birthDate", inputDate);
//       setBirthDate(inputDate);
//       setShowModal(false);
//     }
//   };

//   return (
//     <>
//       {/* Modal for birthdate input */}
//       {showModal && (
//         <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
//           <div className="bg-white p-6 rounded-lg shadow-lg text-center">
//             <h2 className="text-xl font-semibold mb-4">Enter Your Birth Date</h2>
//             <input
//               type="date"
//               id="birthDateInput"
//               className="border p-2 rounded w-full mb-4"
//             />
//             <button
//               onClick={handleSaveBirthDate}
//               className="bg-blue-500 text-white px-4 py-2 rounded"
//             >
//               Save
//             </button>
//           </div>
//         </div>
//       )}

//       {/* Countdown UI */}
//       <div
//         className="w-full h-auto p-6 rounded-2xl bg-cover bg-center flex flex-col items-center justify-center"
//         style={{ backgroundImage: "url(https://pagedone.io/asset/uploads/1710565658.jpg)" }}
//       >
//         <div className="grid grid-cols-3 gap-6 w-full max-w-4xl">
//           {/* Left Section - Today's Remaining Time */}
//           <div className="col-span-1 flex flex-col items-center gap-4">
//             <h2 className="text-white text-lg font-semibold">Today's Remaining Time</h2>
//             <div className="timer">
//               <div className="rounded-xl bg-black/25 backdrop-blur-sm py-3 min-w-[120px] flex items-center justify-center flex-col gap-1 px-3">
//                 <h3 className="font-manrope font-semibold text-2xl text-white text-center">
//                   {timeLeftToday.hours}
//                 </h3>
//                 <p className="text-lg uppercase font-normal text-white mt-1 text-center w-full">
//                   Hours Left
//                 </p>
//               </div>
//             </div>
//             <div className="timer">
//               <div className="rounded-xl bg-black/25 backdrop-blur-sm py-3 min-w-[120px] flex items-center justify-center flex-col gap-1 px-3">
//                 <h3 className="font-manrope font-semibold text-2xl text-white text-center">
//                   {timeLeftToday.seconds}
//                 </h3>
//                 <p className="text-lg uppercase font-normal text-white mt-1 text-center w-full">
//                   Seconds Left
//                 </p>
//               </div>
//             </div>
//           </div>

//           {/* Right Section - Monthly Remaining Time */}
//           <div className="col-span-2 flex flex-col items-center gap-4">
//             <h2 className="text-white text-lg font-semibold">Remaining Time in This Month</h2>
//             <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
//               {Object.entries(timeLeftMonth).map(([label, value]) => (
//                 <div key={label} className="timer">
//                   <div className="rounded-xl bg-black/25 backdrop-blur-sm py-3 min-w-[120px] flex items-center justify-center flex-col gap-1 px-3">
//                     <h3 className="font-manrope font-semibold text-2xl text-white text-center">
//                       {value}
//                     </h3>
//                     <p className="text-lg uppercase font-normal text-white mt-1 text-center w-full">
//                       {label}
//                     </p>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Full-width row - Yearly Remaining Time */}
//           <div className="col-span-3 flex flex-col items-center gap-4 w-full">
//             <h2 className="text-white text-lg font-semibold">Remaining Time in This Year</h2>
//             <div className="grid grid-cols-2 md:grid-cols-5 gap-4 w-full max-w-4xl">
//               {Object.entries(timeLeftYear).map(([label, value]) => (
//                 <div key={label} className="timer w-full">
//                   <div className="rounded-xl bg-black/25 backdrop-blur-sm py-3 flex items-center justify-center flex-col gap-1 px-3">
//                     <h3 className="font-manrope font-semibold text-2xl text-white text-center">
//                       {value}
//                     </h3>
//                     <p className="text-lg uppercase font-normal text-white mt-1 text-center w-full">
//                       {label}
//                     </p>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//           {/* Full-width row - Yearly Remaining Time */}
//           <div className="col-span-3 flex flex-col items-center gap-4 w-full">
//             <h2 className="text-white text-lg font-semibold">Remaining Time before you die</h2>
//             <div className="grid grid-cols-2 md:grid-cols-5 gap-4 w-full max-w-4xl">
//               {Object.entries(timeLeftYear).map(([label, value]) => (
//                 <div key={label} className="timer w-full">
//                   <div className="rounded-xl bg-black/25 backdrop-blur-sm py-3 flex items-center justify-center flex-col gap-1 px-3">
//                     <h3 className="font-manrope font-semibold text-2xl text-white text-center">
//                       {value}
//                     </h3>
//                     <p className="text-lg uppercase font-normal text-white mt-1 text-center w-full">
//                       {label}
//                     </p>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default CountdownTimer;





















// "use client";

// import { useEffect, useState } from "react";

// const CountdownTimer = () => {
//   const [birthDate, setBirthDate] = useState(null);
//   const [timeLeftToday, setTimeLeftToday] = useState({ hours: 0, seconds: 0 });
//   const [timeLeftMonth, setTimeLeftMonth] = useState({
//     days: 0,
//     hours: 0,
//     minutes: 0,
//     seconds: 0,
//     weeks: 0,
//   });
//   const [timeLeftYear, setTimeLeftYear] = useState({
//     months: 0,
//     weeks: 0,
//     days: 0,
//     hours: 0,
//     seconds: 0,
//   });
//   const [timeLeftLife, setTimeLeftLife] = useState({
//     years: 0,
//     months: 0,
//     weeks: 0,
//     days: 0,
//     hours: 0,
//     minutes: 0,
//     seconds: 0,
//   });
//   const [showModal, setShowModal] = useState(false);

//   // Function to calculate remaining time until midnight
//   const calculateTimeLeftToday = () => {
//     const now = new Date();
//     const midnight = new Date(now);
//     midnight.setHours(23, 59, 59, 999);
//     const difference = midnight - now;

//     return {
//       hours: Math.floor(difference / (1000 * 60 * 60)),
//       seconds: Math.floor(difference / 1000),
//     };
//   };

//   // Function to calculate remaining time until the end of the month
//   const calculateTimeLeftMonth = () => {
//     const now = new Date();
//     const endOfMonth = new Date(now.getFullYear(), now.getMonth() + 1, 0, 23, 59, 59, 999);
//     const difference = endOfMonth - now;

//     return {
//       days: Math.floor(difference / (1000 * 60 * 60 * 24)),
//       hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
//       minutes: Math.floor((difference / 1000 * 60) % 60),
//       seconds: Math.floor((difference / 1000) % 60),
//       weeks: Math.floor(difference / (1000 * 60 * 60 * 24 * 7)),
//     };
//   };

//   // Function to calculate remaining time until the end of the year
//   const calculateTimeLeftYear = () => {
//     const now = new Date();
//     const endOfYear = new Date(now.getFullYear(), 11, 31, 23, 59, 59, 999);
//     const difference = endOfYear - now;

//     return {
//       months: 11 - now.getMonth(),
//       weeks: Math.floor(difference / (1000 * 60 * 60 * 24 * 7)),
//       days: Math.floor(difference / (1000 * 60 * 60 * 24)),
//       hours: Math.floor(difference / (1000 * 60 * 60)),
//       seconds: Math.floor(difference / 1000),
//     };
//   };

//   // Function to calculate remaining lifetime (until 75 years)
//   const calculateTimeLeftLife = (birthDateString) => {
//     if (!birthDateString) return null;

//     const now = new Date();
//     const birth = new Date(birthDateString);
//     const deathDate = new Date(birth.getFullYear() + 75, birth.getMonth(), birth.getDate());
    
//     if (deathDate <= now) {
//       return {
//         years: 0,
//         months: 0,
//         weeks: 0,
//         days: 0,
//         hours: 0,
//         minutes: 0,
//         seconds: 0
//       };
//     }

//     const difference = deathDate - now;
//     const years = deathDate.getFullYear() - now.getFullYear();
//     const months = (years * 12) + (deathDate.getMonth() - now.getMonth());

//     return {
//       years: years,
//       months: months,
//       weeks: Math.floor(difference / (1000 * 60 * 60 * 24 * 7)),
//       days: Math.floor(difference / (1000 * 60 * 60 * 24)),
//       hours: Math.floor(difference / (1000 * 60 * 60)),
//       minutes: Math.floor(difference / (1000 * 60)),
//       seconds: Math.floor(difference / 1000)
//     };
//   };

//   useEffect(() => {
//     const storedBirthDate = localStorage.getItem("birthDate");

//     if (!storedBirthDate) {
//       setShowModal(true);
//     } else {
//       setBirthDate(storedBirthDate);
//       setTimeLeftToday(calculateTimeLeftToday());
//       setTimeLeftMonth(calculateTimeLeftMonth());
//       setTimeLeftYear(calculateTimeLeftYear());
//       setTimeLeftLife(calculateTimeLeftLife(storedBirthDate));
//     }
//   }, []);

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setTimeLeftToday(calculateTimeLeftToday());
//       setTimeLeftMonth(calculateTimeLeftMonth());
//       setTimeLeftYear(calculateTimeLeftYear());
//       if (birthDate) {
//         setTimeLeftLife(calculateTimeLeftLife(birthDate));
//       }
//     }, 1000);

//     return () => clearInterval(timer);
//   }, [birthDate]);

//   const handleSaveBirthDate = () => {
//     const inputDate = document.getElementById("birthDateInput").value;
//     if (inputDate) {
//       localStorage.setItem("birthDate", inputDate);
//       setBirthDate(inputDate);
//       setShowModal(false);
//     }
//   };

//   return (
//     <>
//       {/* Modal for birthdate input */}
//       {showModal && (
//         <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
//           <div className="bg-white p-6 rounded-lg shadow-lg text-center">
//             <h2 className="text-xl font-semibold mb-4">Enter Your Birth Date</h2>
//             <input
//               type="date"
//               id="birthDateInput"
//               className="border p-2 rounded w-full mb-4"
//             />
//             <button
//               onClick={handleSaveBirthDate}
//               className="bg-blue-500 text-white px-4 py-2 rounded"
//             >
//               Save
//             </button>
//           </div>
//         </div>
//       )}

//       {/* Countdown UI */}
//       <div
//         className="w-full h-auto p-6 rounded-2xl bg-cover bg-center flex flex-col items-center justify-center"
//         style={{ backgroundImage: "url(https://pagedone.io/asset/uploads/1710565658.jpg)" }}
//       >
//         <div className="grid grid-cols-3 gap-6 w-full max-w-4xl">
//           {/* Left Section - Today's Remaining Time */}
//           <div className="col-span-1 flex flex-col items-center gap-4">
//             <h2 className="text-white text-lg font-semibold">Today's Remaining Time</h2>
//             <div className="timer">
//               <div className="rounded-xl bg-black/25 backdrop-blur-sm py-3 min-w-[120px] flex items-center justify-center flex-col gap-1 px-3">
//                 <h3 className="font-manrope font-semibold text-2xl text-white text-center">
//                   {timeLeftToday.hours}
//                 </h3>
//                 <p className="text-lg uppercase font-normal text-white mt-1 text-center w-full">
//                   Hours Left
//                 </p>
//               </div>
//             </div>
//             <div className="timer">
//               <div className="rounded-xl bg-black/25 backdrop-blur-sm py-3 min-w-[120px] flex items-center justify-center flex-col gap-1 px-3">
//                 <h3 className="font-manrope font-semibold text-2xl text-white text-center">
//                   {timeLeftToday.seconds}
//                 </h3>
//                 <p className="text-lg uppercase font-normal text-white mt-1 text-center w-full">
//                   Seconds Left
//                 </p>
//               </div>
//             </div>
//           </div>

//           {/* Right Section - Monthly Remaining Time */}
//           <div className="col-span-2 flex flex-col items-center gap-4">
//             <h2 className="text-white text-lg font-semibold">Remaining Time in This Month</h2>
//             <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
//               {Object.entries(timeLeftMonth).map(([label, value]) => (
//                 <div key={label} className="timer">
//                   <div className="rounded-xl bg-black/25 backdrop-blur-sm py-3 min-w-[120px] flex items-center justify-center flex-col gap-1 px-3">
//                     <h3 className="font-manrope font-semibold text-2xl text-white text-center">
//                       {value}
//                     </h3>
//                     <p className="text-lg uppercase font-normal text-white mt-1 text-center w-full">
//                       {label}
//                     </p>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Full-width row - Yearly Remaining Time */}
//           <div className="col-span-3 flex flex-col items-center gap-4 w-full">
//             <h2 className="text-white text-lg font-semibold">Remaining Time in This Year</h2>
//             <div className="grid grid-cols-2 md:grid-cols-5 gap-4 w-full max-w-4xl">
//               {Object.entries(timeLeftYear).map(([label, value]) => (
//                 <div key={label} className="timer w-full">
//                   <div className="rounded-xl bg-black/25 backdrop-blur-sm py-3 flex items-center justify-center flex-col gap-1 px-3">
//                     <h3 className="font-manrope font-semibold text-2xl text-white text-center">
//                       {value}
//                     </h3>
//                     <p className="text-lg uppercase font-normal text-white mt-1 text-center w-full">
//                       {label}
//                     </p>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Full-width row - Life Remaining Time */}
//           <div className="col-span-3 flex flex-col items-center gap-4 w-full">
//             <h2 className="text-white text-lg font-semibold">Remaining Time before you die (Age 75)</h2>
//             <div className="grid grid-cols-2 md:grid-cols-7 gap-4 w-full max-w-4xl">
//               {timeLeftLife && Object.entries(timeLeftLife).map(([label, value]) => (
//                 <div key={label} className="timer w-full">
//                   <div className="rounded-xl bg-black/25 backdrop-blur-sm py-3 flex items-center justify-center flex-col gap-1 px-3">
//                     <h3 className="font-manrope font-semibold text-2xl text-white text-center">
//                       {value}
//                     </h3>
//                     <p className="text-lg uppercase font-normal text-white mt-1 text-center w-full">
//                       {label}
//                     </p>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default CountdownTimer;



























"use client";

import { useEffect, useState,useRef } from "react";
import quotes from "@/data/quote";

const CountdownTimer = () => {
  const [birthDate, setBirthDate] = useState(null);
  const [timeLeftToday, setTimeLeftToday] = useState({ hours: 0, seconds: 0 ,minutes:0});
  const [timeLeftMonth, setTimeLeftMonth] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    weeks: 0,
  });
  const [timeLeftYear, setTimeLeftYear] = useState({
    months: 0,
    weeks: 0,
    days: 0,
    hours: 0,
    seconds: 0,
  });
  const [timeLeftLife, setTimeLeftLife] = useState({
    years: 0,
    months: 0,
    weeks: 0,
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [showNotification, setShowNotification] = useState(false);
  const [notificationContent, setNotificationContent] = useState("");
  const [showModal, setShowModal] = useState(false);
  // const notificationSound = new Audio("/notification.wav");
  const notificationSoundRef = useRef(null); // Use ref for Audio object

  useEffect(() => {
    if (typeof window !== "undefined") {
      notificationSoundRef.current = new Audio("/notification.wav"); // Initialize in browser
      notificationSoundRef.current.load(); // Load audio file
    }
  }, []);

  // useEffect(() => {
  //   notificationSound.load(); // Ensures the audio file is ready to play

  //   // notificationSound.play().catch(error => console.error("Audio playback failed:", error));
  // }, []);


  // Function to calculate remaining time until midnight
  const calculateTimeLeftToday = () => {
    const now = new Date();
    const midnight = new Date(now);
    midnight.setHours(23, 59, 59, 999);
    const difference = midnight - now;

    return {
      hours: Math.floor(difference / (1000 * 60 * 60)),
      minutes:Math.floor(difference/(1000 * 60)),
      seconds: Math.floor(difference / 1000),

    };
  };

  // Function to calculate remaining time until the end of the month
  const calculateTimeLeftMonth = () => {
    const now = new Date();
    const endOfMonth = new Date(now.getFullYear(), now.getMonth() + 1, 0, 23, 59, 59, 999);
    const difference = endOfMonth - now;

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 * 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
      weeks: Math.floor(difference / (1000 * 60 * 60 * 24 * 7)),
    };
  };

  // Function to calculate remaining time until the end of the year
  const calculateTimeLeftYear = () => {
    const now = new Date();
    const endOfYear = new Date(now.getFullYear(), 11, 31, 23, 59, 59, 999);
    const difference = endOfYear - now;

    return {
      months: 11 - now.getMonth(),
      weeks: Math.floor(difference / (1000 * 60 * 60 * 24 * 7)),
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor(difference / (1000 * 60 * 60)),
      seconds: Math.floor(difference / 1000),
    };
  };

  // Function to calculate remaining lifetime
  const calculateTimeLeftLife = (birthDateString) => {
    if (!birthDateString) return null;

    const now = new Date();
    const birthDate = new Date(birthDateString);
    const birthYear = birthDate.getFullYear();
    const currentYear = now.getFullYear();
    
    // Calculate remaining years using the formula: 75 - (currentYear - birthYear)
    const remainingYears = 75 - (currentYear - birthYear);
    
    if (remainingYears <= 0) {
      return {
        years: 0,
        months: 0,
        weeks: 0,
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
      };
    }

    // Calculate total milliseconds remaining
    const millisecondsPerYear = 365.25 * 24 * 60 * 60 * 1000; // Account for leap years
    const totalMilliseconds = remainingYears * millisecondsPerYear;

    return {
      years: remainingYears,
      months: remainingYears * 12,
      weeks: Math.floor(totalMilliseconds / (7 * 24 * 60 * 60 * 1000)),
      days: Math.floor(totalMilliseconds / (24 * 60 * 60 * 1000)),
      hours: Math.floor(totalMilliseconds / (60 * 60 * 1000)),
      minutes: Math.floor(totalMilliseconds / (60 * 1000)),
      seconds: Math.floor(totalMilliseconds / 1000)
    };
  };

  useEffect(() => {
    const storedBirthDate = localStorage.getItem("birthDate");

    if (!storedBirthDate) {
      setShowModal(true);
    } else {
      setBirthDate(storedBirthDate);
      setTimeLeftToday(calculateTimeLeftToday());
      setTimeLeftMonth(calculateTimeLeftMonth());
      setTimeLeftYear(calculateTimeLeftYear());
      setTimeLeftLife(calculateTimeLeftLife(storedBirthDate));
    }
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeftToday(calculateTimeLeftToday());
      setTimeLeftMonth(calculateTimeLeftMonth());
      setTimeLeftYear(calculateTimeLeftYear());
      if (birthDate) {
        setTimeLeftLife(calculateTimeLeftLife(birthDate));
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [birthDate]);

  const handleSaveBirthDate = () => {
    const inputDate = document.getElementById("birthDateInput").value;
    if (inputDate) {
      localStorage.setItem("birthDate", inputDate);
      setBirthDate(inputDate);
      setShowModal(false);
    }
  };

  const showHourlyNotification = () => {
    const now = new Date();
    const remainingTime = calculateTimeLeftToday();
    const wastedTime = {
      hours: 23 - remainingTime.hours,
      minutes: 59 - remainingTime.minutes,
      seconds: 59 - remainingTime.seconds,
    };
    const moneyWasted = ((wastedTime.hours * 3600 + wastedTime.minutes * 60 + wastedTime.seconds) / 1_000_000).toFixed(2);
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    
    setNotificationContent(
      `Time Remaining Today: ${remainingTime.hours}h ${remainingTime.minutes}m ${remainingTime.seconds}s\n` +
      `Time Wasted: ${wastedTime.hours}h ${wastedTime.minutes}m ${wastedTime.seconds}s\n` +
      `Potential Earnings: $${moneyWasted}M if every second = $1\n` +
      `\"${randomQuote.quote}\" - ${randomQuote.author}`
    );
    setShowNotification(true);
    // notificationSound.play(); 
    notificationSoundRef.play().catch(error => console.error("Audio playback failed:", error));
  };

  useEffect(() => {
    setTimeLeftToday(calculateTimeLeftToday());
    
    const interval = setInterval(() => {
      setTimeLeftToday(calculateTimeLeftToday());
    }, 1000);
    
    const hourlyTimer = setInterval(() => {
      showHourlyNotification();
    }, 60 * 60 * 1000); // Every hour
    
    return () => {
      clearInterval(interval);
      clearInterval(hourlyTimer);
    };
  }, []);

  return (
    <>
      {/* Modal for birthdate input */}

      {showNotification && (
        <div className="fixed bottom-4 right-4 bg-gray-800 text-white p-4 rounded-lg shadow-lg cursor-pointer" onClick={() => setShowNotification(false)}>
          <p>{notificationContent}</p>
        </div>
      )}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-[9999]">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <h2 className="text-xl font-semibold mb-4">Enter Your Birth Date</h2>
            <input
              type="date"
              id="birthDateInput"
              className="border p-2 rounded w-full mb-4"
            />
            <button
              onClick={handleSaveBirthDate}
              className="bg-blue-500 text-white px-4 py-2 rounded"
            >
              Save
            </button>
          </div>
        </div>
      )}

      {/* Countdown UI */}
      <div
        className="w-full h-auto p-6 rounded-2xl bg-cover bg-center flex flex-col items-center justify-center"
        style={{ backgroundImage: "url(https://pagedone.io/asset/uploads/1710565658.jpg)" }}
      >
  

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl">
          {/* Left Section - Today's Remaining Time */}
          <div className="col-span-3 md:col-span-1 flex flex-col items-center gap-4">
            <h2 className="text-white text-lg font-semibold">Today's Remaining Time</h2>
            <div className="grid grid-cols-2 gap-4">
              {Object.entries(timeLeftToday).map(([label, value]) => (
                <div key={label} className="timer">
                  <div className="rounded-xl bg-black/25 backdrop-blur-sm py-3 min-w-[120px] flex items-center justify-center flex-col gap-1 px-3">
                    <h3 className="font-manrope font-semibold text-2xl text-white text-center">
                      {value}
                    </h3>
                    <p className="text-lg uppercase font-normal text-white mt-1 text-center w-full">
                      {label}
                    </p>
                  </div>
                </div>
              ))}
            </div>
       
          </div>

          {/* Right Section - Monthly Remaining Time */}
          <div className="col-span-3 md:col-span-2 flex flex-col items-center gap-4">
            <h2 className="text-white text-lg font-semibold">Remaining Time in This Month</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {Object.entries(timeLeftMonth).map(([label, value]) => (
                <div key={label} className="timer">
                  <div className="rounded-xl bg-black/25 backdrop-blur-sm py-3 min-w-[120px] flex items-center justify-center flex-col gap-1 px-3">
                    <h3 className="font-manrope font-semibold text-2xl text-white text-center">
                      {value}
                    </h3>
                    <p className="text-lg uppercase font-normal text-white mt-1 text-center w-full">
                      {label}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Full-width row - Yearly Remaining Time */}
          <div className="col-span-3 flex flex-col items-center gap-4 w-full">
            <h2 className="text-white text-lg font-semibold">Remaining Time in This Year</h2>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 w-full max-w-4xl">
              {Object.entries(timeLeftYear).map(([label, value]) => (
                <div key={label} className="timer w-full">
                  <div className="rounded-xl bg-black/25 backdrop-blur-sm py-3 flex items-center justify-center flex-col gap-1 px-3">
                    <h3 className="font-manrope font-semibold text-2xl text-white text-center">
                      {value}
                    </h3>
                    <p className="text-lg uppercase font-normal text-white mt-1 text-center w-full">
                      {label}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Full-width row - Life Remaining Time */}
          <div className="col-span-3 flex flex-col items-center gap-4 w-full">
            <h2 className="text-white text-lg font-semibold">Remaining Time before you die (Age 75)</h2>
            <div className="grid grid-cols-2 md:grid-cols-7 gap-4 w-full max-w-4xl">
              {timeLeftLife && Object.entries(timeLeftLife).map(([label, value]) => (
                <div key={label} className="timer w-full">
                  <div className="rounded-xl bg-black/25 backdrop-blur-sm py-3 flex items-center justify-center flex-col gap-1 px-3">
                    <h3 className="font-manrope font-semibold text-2xl text-white text-center">
                      {value}
                    </h3>
                    <p className="text-lg uppercase font-normal text-white mt-1 text-center w-full">
                      {label}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CountdownTimer;