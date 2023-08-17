import { useEffect, useState } from "react";
import "./timer.style.css";

export default function timer({count=10}) {
  const [loadingPercent, setloadingPercent] = useState(0);
  const [dot, setDot] = useState(0);
  const [text, setText] = useState(10);

  let interval
  useEffect(() => {
    interval= setInterval(() => {
      //   const currentLoadingPercent = loadingPercent - loadingPercent * (secs / 60);
console.log(loadingPercent)
 setloadingPercent((prev) =>prev - 440);
    //   if (loadingPercent > -440) {
    //     setloadingPercent((prev) => prev - 100);
    //   }else{
    //     setloadingPercent(0)
    //   }

      setText((prev)=>prev-1);
    }, 1000);
  }, []);

//   useEffect(()=>{
//     console.log('intervall')
//     if (loadingPercent > -440)  setloadingPercent((prev) => prev - 100);
//     else setloadingPercent(0)
//   },[interval])

  return (
    <div className="App">
      <div className="container">
        <div className="text">{text}</div>
        <div></div>
        <svg>
          <circle cx="70" cy="70" r="70" />
          <circle strokeDashoffset={loadingPercent} cx="70" cy="70" r="70" />
        </svg>
      </div>
    </div>
  );
}
