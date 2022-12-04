import React from "react";
import { createRoot } from "react-dom/client";
import Main from "./components/Main";

// const appElement = document.getElementById("root");

// const root = createRoot(appElement);

// const Main = () => {
//     return (
//         <div>
//             <h1>Hello World</h1>
//         </div>
//     );
// };

createRoot(document.querySelector("#root")).render(<Main />);
// {
//   /* <React.StrictMode>
//   <Main />
// </React.StrictMode>; */
// }
