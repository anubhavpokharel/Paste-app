import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { updateToPaste, addToPastes } from "../redux/pasteSlice";

const Home = () => {
  const [title, setTitle] = useState("");
  const [value, setValue] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();
  const pasteId = searchParams.get("pasteId");

  const dispatch = useDispatch();

  const allPastes = useSelector((state) => state.paste.pastes);

  useEffect(() => {
    if (pasteId) {
      const paste = allPastes.find((p) => p._id === pasteId);
      setTitle(paste.title);
      setValue(paste.content);
    }
  }, [pasteId]);

  function crestePaste() {
    const paste = {
      title: title,
      content: value,
      _id: pasteId || Date.now().toString(36),
      createdAt: new Date().toISOString(),
    };

    if (pasteId) {
      //update
      dispatch(updateToPaste(paste));
    } else {
      //create
      dispatch(addToPastes(paste));
    }

    //after creation and updation
    setTitle("");
    setValue("");
    setSearchParams({});
  }

  return (
    <div className="min-h-screen bg-blue-200">
      <div className="max-w-3xl mx-auto px-4 py-8">
        <div className="bg-white rounded-2xl shadow-md border border-blue-100 p-6">
          <h1 className="text-2xl font-bold text-blue-800 mb-1">
            {pasteId ? "Update Your Paste" : "Create a New Paste"}
          </h1>
          <p className="text-sm text-gray-400 mb-5">
            {pasteId
              ? "Editing an existing paste"
              : "Write or paste your content below"}
          </p>

          <div className="flex flex-row items-center gap-3">
            <input
              type="text"
              placeholder="Enter Title Here"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="flex-1 px-4 py-2 border border-blue-200 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-shadow duration-200"
            />

            <button
              onClick={crestePaste}
              className="px-5 py-2 bg-blue-800 text-white text-sm font-semibold rounded-md hover:bg-blue-700 hover:scale-105 active:scale-95 transition-all duration-200 whitespace-nowrap shadow-sm"
            >
              {pasteId ? "Update My Paste" : "Create My Paste"}
            </button>
          </div>

          <div className="mt-4">
            <textarea
              value={value}
              placeholder="Enter Content Here"
              onChange={(e) => setValue(e.target.value)}
              rows={20}
              className="w-full px-4 py-3 border border-blue-200 rounded-md text-sm font-mono leading-relaxed focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-y transition-shadow duration-200"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;