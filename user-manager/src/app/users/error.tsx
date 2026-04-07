"use client";
export default function Error({ reset }: { reset: () => void }) {
  return (
    <div className="text-center p-10">
      <h2 className="text-red-500 font-bold">Something went wrong!</h2>
      <button onClick={() => reset()} className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">
        Try Again
      </button>
    </div>
  );
}