"use client"; //クライアントコンポーネントとして扱う（ブラウザ側でレンダリング）

import { useState } from "react";
export default function Counter(){
  const [count, setCount] =useState(0);
  return(
    <button style={{ margin:10, padding:"8px 16px", fontSize:16, backgroundColor:"#555", color:"#fff"}} onClick={() => setCount(count + 1)}>
      カウント：{count}
    </button>
  );

}