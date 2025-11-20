import React, { useMemo, useState } from 'react';
import DesktopFlightImg from '@/Components/Flights/DesktopFlightImg';

interface Seat {
  id: number;
  number: number;
  status: 'available' | 'unavailable' | 'selected';
}

/**
 * splitSeatsDynamic
 * - يقسم مصفوفة المقاعد تبعاً للـ layout (مثلاً leftCount=2, rightCount=3)
 * - يرجع leftRows و rightRows (كل واحدة مصفوفة من الصفوف)
 * - يرجع steps للتوضيح (visualization) يبين كل iteration وما أخدناه
 */
const splitSeatsDynamic = (seats: Seat[], leftCount: number, rightCount: number) => {
  const left: Seat[][] = [];
  const right: Seat[][] = [];
  const steps: { iBefore: number; leftRow: number[]; rightRow: number[]; iAfter: number }[] = [];

  let i = 0;
  while (i < seats.length) {
    const leftSlice = seats.slice(i, i + leftCount);
    if (leftSlice.length === leftCount) left.push(leftSlice);
    i += leftCount;

    const rightSlice = seats.slice(i, i + rightCount);
    if (rightSlice.length === rightCount) right.push(rightSlice);
    i += rightCount;

    steps.push({
      iBefore: i - (leftCount + rightCount),
      leftRow: leftSlice.map(s => s.number),
      rightRow: rightSlice.map(s => s.number),
      iAfter: i
    });
  }

  return { left, right, steps };
};

const Seats: React.FC = () => {
  // --------------------------
  // 🔧 Dynamic flight object
  // --------------------------
  const flight = {
    flightNumber: 'MS123',
    totalSeats: 30, // تقدر تغيره لأي رقم
    bookedSeats: [2, 5, 7, 9, 13, 18, 22, 25, 28], // مثال - تيجي من API عادة
    layout: {
      left: 2,
      right: 3
    }
  };

  // عدد الركاب اللي اليوزر اختاره (المطلوب منك: 4)
  const passengersCount = 4;

  // --------------------------
  // ✨ Build seats array dynamically
  // --------------------------
  const seats: Seat[] = useMemo(
    () =>
      Array.from({ length: flight.totalSeats }, (_, idx) => {
        const num = idx + 1;
        return {
          id: num,
          number: num,
          status: flight.bookedSeats.includes(num) ? 'unavailable' : 'available'
        } as Seat;
      }),
    [flight.totalSeats, flight.bookedSeats]
  );

  // --------------------------
  // ✂️ Split seats into left/right using the dynamic layout
  // --------------------------
  const { left: leftSeats, right: rightSeats, steps } = useMemo(
    () => splitSeatsDynamic(seats, flight.layout.left, flight.layout.right),
    [seats, flight.layout.left, flight.layout.right]
  );

  // --------------------------
  // state for selected seats (numbers)
  // --------------------------
  const [selectedSeats, setSelectedSeats] = useState<number[]>([]);

  // --------------------------
  // seat click handler (enforces passenger limit)
  // --------------------------
  const handleSeatClick = (num: number) => {
    // إذا مقعد محجوز — ممنوع
    if (flight.bookedSeats.includes(num)) return;

    // لو المقعد غير مختار و المستخدم وصل الحد الأقصى — منع واظهار تحذير
    if (!selectedSeats.includes(num) && selectedSeats.length >= passengersCount) {
      alert(`You can only select up to ${passengersCount} seats.`);
      return;
    }

    // Toggle selection
    if (selectedSeats.includes(num)) {
      setSelectedSeats(prev => prev.filter(s => s !== num));
    } else {
      setSelectedSeats(prev => [...prev, num]);
    }
  };

  // helper لتلوين الزر
  const getSeatClass = (num: number) => {
    if (selectedSeats.includes(num)) return 'bg-[#03D947] text-white';
    if (flight.bookedSeats.includes(num)) return 'bg-[#D1D5DB] cursor-not-allowed';
    return 'bg-[#1E429F] hover:bg-[#1E429F] text-white';
  };



  // render button من Seat object
  const renderSeat = (seat: Seat) => (
    <button
      key={seat.id}
      onClick={() => handleSeatClick(seat.number)}
      disabled={seat.status === 'unavailable'}
      className={`w-10 h-10 rounded-md flex items-center justify-center text-sm font-medium transition ${getSeatClass(
        seat.number
      )}`}
    >
      {seat.number}
    </button>
  );

  return (
    <div className="md:mt-16 px-4">
      <div className="lg:mx-24">
        <div className="flex flex-col md:flex-row justify-center gap-10">
          {/* Plane Image */}
          <DesktopFlightImg />

          {/* Seat Picker */}
          <div className="w-full md:w-1/2 pb-8 flex flex-col gap-4 items-center">
            <h1 className="w-full text-center text-[26px] font-medium">
              Flight {flight.flightNumber} — Choose seats (max {passengersCount})
            </h1>

            {/* legend */}
            <div className="flex justify-between items-center w-full max-w-md">
              <div className="flex items-center gap-2">
                <span className="w-4 h-4 bg-[#1E429F] rounded-full"></span>
                <p className="text-sm">Available</p>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-4 h-4 bg-[#03D947] rounded-full"></span>
                <p className="text-sm">Selected</p>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-4 h-4 bg-[#D1D5DB] rounded-full"></span>
                <p className="text-sm">Unavailable</p>
              </div>
            </div>

            {/* Selected info */}
            {selectedSeats.length > 0 && (
              <div className="w-full max-w-md bg-blue-50 border border-blue-200 rounded-lg p-4">
                <p className="font-medium text-[#1E429F]">
                  Selected Seats: {selectedSeats.sort((a, b) => a - b).join(', ')}
                </p>
                <p className="text-sm text-gray-600 mt-1">
                  Total: {selectedSeats.length} / {passengersCount}
                </p>
              </div>
            )}

            {/* seats layout */}
            <div className="flex gap-8 mt-4">
              {/* LEFT side */}
              <div className="flex flex-col gap-4">
                {leftSeats.map((row, idx) => (
                  <div key={`L-${idx}`} className="flex gap-4">
                    {row.map(renderSeat)}
                  </div>
                ))}
              </div>

              {/* Aisle */}
              <div className="w-8 flex items-center justify-center">
                <div className="h-full w-1 bg-gray-300 rounded"></div>
              </div>

              {/* RIGHT side */}
              <div className="flex flex-col gap-4">
                {rightSeats.map((row, idx) => (
                  <div key={`R-${idx}`} className="flex gap-4">
                    {row.map(renderSeat)}
                  </div>
                ))}
              </div>
            </div>

            {/* Confirm */}
            <div className="w-full max-w-md flex flex-col items-center">
              {selectedSeats.length > 0 && (
                <button className="w-full mt-6 bg-[#1E429F] text-white py-3 rounded-lg font-medium hover:bg-blue-800 transition">
                  Confirm Selection
                </button>
              )}
            </div>

            {/* -------------------------
                Visualization: Steps
               ------------------------- */}
            <div className="w-full max-w-md mt-6">
              <h3 className="font-medium text-[#1E429F] mb-2">Split steps (visualization)</h3>
              <div className="text-xs text-gray-700 space-y-2">
                {steps.map((s, idx) => (
                  <div
                    key={idx}
                    className="p-2 border rounded bg-white shadow-sm flex items-start gap-3"
                  >
                    <div className="text-sm font-medium">Iteration {idx + 1}</div>
                    <div className="flex flex-col text-[13px]">
                      <div>i before: <span className="font-medium">{s.iBefore}</span></div>
                      <div>leftRow: {s.leftRow.length ? `[${s.leftRow.join(', ')}]` : '[]'}</div>
                      <div>rightRow: {s.rightRow.length ? `[${s.rightRow.join(', ')}]` : '[]'}</div>
                      <div>i after: <span className="font-medium">{s.iAfter}</span></div>
                    </div>
                  </div>
                ))}
                {/* If there's leftover seats not forming a full left/right pair, show them */}
                {(() => {
                  const totalTaken = steps.reduce((acc, st) => acc + st.leftRow.length + st.rightRow.length, 0);
                  const leftovers = seats.slice(totalTaken).map(s => s.number);
                  if (leftovers.length === 0) return null;
                  return (
                    <div className="p-2 border rounded bg-yellow-50 text-[13px]">
                      Leftover (not full row): [{leftovers.join(', ')}]
                    </div>
                  );
                })()}
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Seats;
