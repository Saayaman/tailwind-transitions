import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./routes/Root";
import ShadowAndOpacity from "./routes/ShadowAndOpacity";
import TransformSection from "./routes/TransformSection";
import ColorsSection from "./routes/Colors";
import Typography from "./routes/Typography";
import MultipleTransitions from "./routes/MultipleTransitions";
import Spacing from "./routes/Spacing";
import BordersAndOutline from "./routes/BordersAndOutline";
import DisplayAndFlex from "./routes/DisplayAndFlex";
import Filters from "./routes/Filter";

export const menuList = [
  "multiple-transitions",
  "shadow-opacity",
  "transform",
  "colors",
  "typography",
  "border-outline",
  "spacing",
  "display-flex",
  "filter"
];

let router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: menuList[1],
        element: <ShadowAndOpacity />,
      },
      {
        path: menuList[2],
        element: <TransformSection />,
      },
      {
        path: menuList[3],
        element: <ColorsSection />,
      },
      {
        path: menuList[4],
        element: <Typography />,
      },
      {
        path: menuList[5],
        element: <BordersAndOutline />,
      },
      {
        path: menuList[6],
        element: <Spacing />
      },
      {
        path: menuList[7],
        element: <DisplayAndFlex />,
      },
      {
        path: menuList[8],
        element: <Filters />
      },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
