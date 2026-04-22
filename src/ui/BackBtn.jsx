import { useNavigate } from "react-router-dom";

function BackBtn({ route }) {
  const navigate = useNavigate();
  return (
    <div className="max-w-6xl mx-auto px-6 py-8">
      <div className="w-full flex items-start">
        <button onClick={() => navigate(route)} className="text-blue-400">
          &larr; back
        </button>
      </div>
    </div>
  );
}

export default BackBtn;
