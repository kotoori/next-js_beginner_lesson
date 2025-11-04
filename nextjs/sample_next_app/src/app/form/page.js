"use client";
import { useState} from "react";

//フォルダ名と違う関数名でも一応OK default宣言しているので。ただし、通常は同じ名前にしておいたほうが無難
export default function FormPage() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit =(e) => {
    e.preventDefault();
    if(!name){
      setMessage("名前を入力してください");
      return;
    }
    setMessage(`こんにちは、${name} さん`);
  }

  return(
    <div className="flex justify-center items-center h-screen bg-gray-50">
      <div className="bg-white p-6 rounded shadow-md w-80">
        <h1 className="text-xl font-bold md-4 text-center">
          入力フォーム
        </h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block mb-1 font-medium">名前</label>
            <input className="w-full border border-gray300 rounded px-3 py-2"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
            />
          </div>
          <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded">送信</button>
        </form>
        {message && (
          <p className="nt-4 text-center font-medium text-blue-600">
            {message}
          </p>
        )}
      </div>
    </div>
  );
}