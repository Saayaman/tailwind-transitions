import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./routes/Root";
import ShadowAndOpacity from "./routes/ShadowAndOpacity";
import TransformSection from "./routes/TransformSection";
import ColorsSection from "./routes/Colors";
import Typography from "./routes/Typography";
import MultipleTransitions from "./routes/MultipleTransitions";
import Spacing from "./routes/Spacing";
import BordersAndOutline from "./routes/BordersAndOutline";

export const menuList = [
  "shadow-opacity",
  "transform",
  "colors",
  "typography",
  "border-outline",
  "spacing",
  "multiple-transitions",
];

let router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: menuList[0],
        element: <ShadowAndOpacity />,
      },
      {
        path: menuList[1],
        element: <TransformSection />,
      },
      {
        path: menuList[2],
        element: <ColorsSection />,
      },
      {
        path: menuList[3],
        element: <Typography />,
      },
      {
        path: menuList[4],
        element: <BordersAndOutline />,
      },
      {
        path: menuList[5],
        element: <Spacing />
      },
      {
        path: menuList[6],
        element: <MultipleTransitions />,
      },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
