// "use client"

// import { useEffect, useState } from 'react';
// // import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
// import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

// import dayjs from 'dayjs';
// export default function Home() {
//   const [birthdate, setBirthdate] = useState(null);
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [expectedAge, setExpectedAge] = useState(75);
//   const [currentAge, setCurrentAge] = useState(0);
//   const [timeLeft, setTimeLeft] = useState({});
  
//   useEffect(() => {
//     const storedBirthdate = localStorage.getItem('birthdate');
//     if (storedBirthdate) {
//       setBirthdate(storedBirthdate);
//     } else {
//       setIsModalOpen(true);
//     }
//   }, []);

//   useEffect(() => {
//     if (birthdate) {
//       localStorage.setItem('birthdate', birthdate);
//       calculateLifeStats(birthdate);
//     }
//   }, [birthdate]);

//   const calculateLifeStats = (bDate) => {
//     const birth = dayjs(bDate);
//     const now = dayjs();
//     const endOfLife = birth.add(expectedAge, 'year');
    
//     const age = now.diff(birth, 'year');
//     const remainingYears = endOfLife.diff(now, 'year');
    
//     setCurrentAge(age);
//     setTimeLeft({
//       years: remainingYears,
//       months: endOfLife.diff(now, 'month') % 12,
//       days: endOfLife.diff(now, 'day') % 30,
//       hours: endOfLife.diff(now, 'hour') % 24,
//       minutes: endOfLife.diff(now, 'minute') % 60,
//       seconds: endOfLife.diff(now, 'second') % 60
//     });
//   };

//   return (
//         <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center p-6">
//           <h1 className="text-3xl font-bold">Life Tracker</h1>
//           {birthdate && (
//             <p className="mt-2 text-lg">Age: {currentAge} years | Remaining: {timeLeft.years} years</p>
//           )}
//           <button onClick={() => setIsModalOpen(true)} className="mt-4 px-4 py-2 bg-blue-500 rounded">Update Birthdate</button>
//           <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
//             <DialogContent>
//               <DialogHeader>
//                 <DialogTitle>Enter Your Birthdate</DialogTitle>
//               </DialogHeader>
//               <input 
//                 type="date" 
//                 className="p-2 border rounded text-black"
//                 onChange={(e) => setBirthdate(e.target.value)}
//               />
//               <button 
//                 onClick={() => setIsModalOpen(false)}
//                 className="mt-2 bg-green-500 px-4 py-2 rounded"
//               >Save</button>
//             </DialogContent>
//           </Dialog>
//         </div>
//       );
//     }





"use client"


import { useEffect, useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import dayjs from 'dayjs';

export default function LifeTracker() {
  const [birthdate, setBirthdate] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [expectedAge, setExpectedAge] = useState(75);
  const [currentAge, setCurrentAge] = useState(0);
  const [timeLeft, setTimeLeft] = useState({});
  const [dailyTime, setDailyTime] = useState({});

  useEffect(() => {
    const storedBirthdate = localStorage.getItem('birthdate');
    if (storedBirthdate) {
      setBirthdate(storedBirthdate);
    } else {
      setIsModalOpen(true);
    }
  }, []);

  useEffect(() => {
    if (birthdate) {
      localStorage.setItem('birthdate', birthdate);
      calculateLifeStats(birthdate);
    }
  }, [birthdate]);

  const calculateLifeStats = (bDate) => {
    const birth = dayjs(bDate);
    const now = dayjs();
    const endOfLife = birth.add(expectedAge, 'year');
    
    const age = now.diff(birth, 'year');
    const remainingYears = endOfLife.diff(now, 'year');
    
    setCurrentAge(age);
    setTimeLeft({
      years: remainingYears,
      months: endOfLife.diff(now, 'month') % 12,
      days: endOfLife.diff(now, 'day') % 30,
      hours: endOfLife.diff(now, 'hour') % 24,
      minutes: endOfLife.diff(now, 'minute') % 60,
      seconds: endOfLife.diff(now, 'second') % 60
    });
  };

  useEffect(() => {
    const updateDailyTime = () => {
      const now = dayjs();
      const startOfDay = now.startOf('day');
      const endOfDay = now.endOf('day');

      setDailyTime({
        spentHours: now.diff(startOfDay, 'hour'),
        spentMinutes: now.diff(startOfDay, 'minute') % 60,
        spentSeconds: now.diff(startOfDay, 'second') % 60,
        remainingHours: endOfDay.diff(now, 'hour'),
        remainingMinutes: endOfDay.diff(now, 'minute') % 60,
        remainingSeconds: endOfDay.diff(now, 'second') % 60
      });
    };

    updateDailyTime();
    const interval = setInterval(updateDailyTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center p-6">
      <h1 className="text-3xl font-bold">Life Tracker</h1>
      {birthdate && (
        <p className="mt-2 text-lg">Age: {currentAge} years | Remaining: {timeLeft.years} years</p>
      )}
      <button onClick={() => setIsModalOpen(true)} className="mt-4 px-4 py-2 bg-blue-500 rounded">Update Birthdate</button>
      
      <div className="grid grid-cols-12 gap-1 mt-6">
        {[...Array(expectedAge)].map((_, year) => (
          <div key={year} className="col-span-12 flex">
            {[...Array(12)].map((_, month) => {
              const isPast = year < currentAge || (year === currentAge && month < dayjs().month());
              return (
                <div key={month} className={`w-8 h-8 m-1 ${isPast ? 'bg-red-500' : 'bg-green-500'}`}></div>
              );
            })}
          </div>
        ))}
      </div>
      
      <div className="mt-6 p-4 bg-gray-800 rounded-lg">
        <h2 className="text-lg font-bold">Time Remaining & Spent</h2>
        <p>Remaining: {timeLeft.years} years, {timeLeft.months} months, {timeLeft.days} days</p>
        <p>Spent: {currentAge} years</p>
      </div>
      
      <div className="mt-6 p-4 bg-gray-800 rounded-lg">
        <h2 className="text-lg font-bold">Daily Time Usage</h2>
        <p>Spent: {dailyTime.spentHours}h {dailyTime.spentMinutes}m {dailyTime.spentSeconds}s</p>
        <p>Remaining: {dailyTime.remainingHours}h {dailyTime.remainingMinutes}m {dailyTime.remainingSeconds}s</p>
      </div>
      
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Enter Your Birthdate</DialogTitle>
          </DialogHeader>
          <input 
            type="date" 
            className="p-2 border rounded text-black"
            onChange={(e) => setBirthdate(e.target.value)}
          />
          <button 
            onClick={() => setIsModalOpen(false)}
            className="mt-2 bg-green-500 px-4 py-2 rounded"
          >Save</button>
        </DialogContent>
      </Dialog>
    </div>
  );
}