import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const ViewPaste = () => {

  const {id} = useParams();

  const allPastes = useSelector((state) => state.paste.pastes);

  const paste = allPastes.filter((p) => p._id === id ) [0];  

  return (
    <div className="max-w-3xl mx-auto px-4 py-6">
      <div className="flex flex-row items-center gap-3">
        <input
          type="text"
          placeholder="Enter Title Here"
          value={paste.title}
          disabled
          // onChange={(e) => setTitle(e.target.value)}
          className="flex-1 px-4 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />

        {/* <button
          onClick={crestePaste}
          className="px-5 py-2 bg-blue-600 text-white text-sm font-medium rounded-md hover:bg-blue-700 transition-colors duration-200 whitespace-nowrap"
        >
          {pasteId ? "Update My Paste" : "Create My Paste"}
        </button> */}
      </div>

      <div className="mt-4">
        <textarea
          value={paste.content}
          placeholder="Enter Content Here"
          disabled
          // onChange={(e) => setValue(e.target.value)}
          rows={20}
          className="w-full px-4 py-3 border border-gray-300 rounded-md text-sm font-mono leading-relaxed focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-y"
        />
      </div>
    </div>
  );
};

export default ViewPaste;
