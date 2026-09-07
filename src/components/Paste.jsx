import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromPastes } from "../redux/pasteSlice";
import toast from "react-hot-toast";

const Paste = () => {
  const pastes = useSelector((state) => state.paste.pastes);
  console.log(pastes);

  const [searchTerm, setSearchTerm] = useState("");

  const dispatch = useDispatch();

  const filteredData = pastes.filter((paste) =>
    paste.title.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  function handleDelete(pasteId) {
    dispatch(removeFromPastes(pasteId));
  }

  return (
    <div className="min-h-screen mx-auto px-4 py-6 bg-blue-200">
      <input
        className="bg-white p-2 rounded-xl min-w-full mt-5 border-blue-900 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        type="search"
        placeholder="Search here"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <div className="flex flex-col gap-5 mt-5">
        {filteredData.length > 0 ? (
          filteredData.map((paste) => {
            return (
              <div
                key={paste?._id}
                className="border border-gray-200 rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow duration-200 bg-white"
              >
                <div className="text-lg font-semibold text-gray-800 truncate">
                  {paste.title}
                </div>

                <div className="text-sm text-gray-600 mt-2 line-clamp-3 whitespace-pre-wrap">
                  {paste.content}
                </div>

                <div className="flex flex-wrap gap-2 mt-4">
                  <button className="px-3 py-1.5 text-xs font-medium rounded-md bg-blue-50 text-blue-600 hover:bg-blue-100 transition-colors">
                    <a href={`/?pasteId=${paste?._id}`}>
                      Edit
                    </a>
                  </button>
                  <button className="px-3 py-1.5 text-xs font-medium rounded-md bg-gray-50 text-gray-600 hover:bg-gray-100 transition-colors">
                    <a href={`/pastes/${paste?._id}`}>
                      View
                    </a>
                  </button>
                  <button
                    onClick={() => handleDelete(paste?._id)}
                    className="px-3 py-1.5 text-xs font-medium rounded-md bg-red-50 text-red-600 hover:bg-red-100 transition-colors"
                  >
                    Delete
                  </button>
                  <button
                    className="px-3 py-1.5 text-xs font-medium rounded-md bg-green-50 text-green-600 hover:bg-green-100 transition-colors"
                    onClick={() => {
                      navigator.clipboard.writeText(paste?.content);
                      toast.success("Copy to Clipboard")
                    }}
                  >
                    Copy
                  </button>
                  <button className="px-3 py-1.5 text-xs font-medium rounded-md bg-purple-50 text-purple-600 hover:bg-purple-100 transition-colors">
                    Share
                  </button>
                </div>

                <div className="text-xs text-gray-400 mt-3">
                  {new Date(paste.createdAt).toLocaleString()}
                </div>
              </div>
            );
          })
        ) : (
          <div className="text-center text-gray-400 text-sm mt-10">
            No pastes found.
          </div>
        )}
      </div>
    </div>
  );
};

export default Paste;
