import React, { useEffect, useState } from "react";

function TodoUi() {
  const [Input, setInput] = useState("");
  const [Task, setTask] = useState([]);
  const [DateTime, setDateTime] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!Input.trim()) return;
    if (Task.includes(Input)) return;
    setTask((prevTask) => [...prevTask, Input]);
    setInput("");
  };

  useEffect(() => {
    setInterval(() => {
      const time = new Date().toLocaleTimeString();
      const date = new Date().toLocaleDateString();
      setDateTime(`${date}-${time}`);
    }, 1000);
  },[]);

  const handleDelete=(currIndex)=>{
    const updatedTask=Task.filter((currEle,idx)=> idx!=currIndex)  
    setTask(updatedTask);
  }

  return (
    // Main container
    <div className="bg-gray-900 min-h-screen flex flex-col items-center pt-20 font-sans px-4">
      <h1>{DateTime}</h1>
      {/* Title and Form Container */}
      <div className="w-full max-w-sm">
        <h1 className="text-5xl font-bold text-white mb-8 text-center">
          Todo App
        </h1>
        <form onSubmit={handleSubmit}>
          <div className="flex w-full items-center space-x-2">
            {/* Input Field */}
            <input
              type="text"
              placeholder="Add a new task..."
              className="flex-grow p-3 bg-gray-800 border border-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={(e) => setInput(e.target.value)}
              value={Input}
            />

            {/* Add Button */}
            <button
              type="submit"
              className="bg-blue-600 text-white font-semibold p-3 rounded-lg hover:bg-blue-700 active:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Add
            </button>
          </div>
        </form>

        {/* Task List */}
        <ul className="mt-8 flex flex-col gap-4">
          {Task.map((currEle, index) => (
            <li
              key={index}
              className="bg-gray-800 p-4 rounded-lg flex justify-between items-center text-white"
            >
              <span>{currEle}</span>
              <div className="flex items-center space-x-3">
                {/* Green Check Button (Style Only) */}
                <button className="text-green-500 hover:text-green-400">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </button>
                {/* Red Delete Button (Style Only) */}
                <button className="text-red-500 hover:text-red-400" onClick={()=>handleDelete(index)}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                    />
                  </svg>
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default TodoUi;
