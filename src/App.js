import { useEffect } from "react";

let tg = window.Telegram.WebApp; 

function App() {
useEffect(()=>{
tg.ready()
}, [])
const onClose =()=>{
tg.close()
}
  return (
    <div> fgg
    <button onClick={onClose}>Закрыть</button>
    </div>
  );
}

export default App;
