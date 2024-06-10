import { createBrowserRouter } from "react-router-dom";
import HomeBlock from "../components/homeBlock/HomeBlock";
import HomeMain from "../components/homeMain/HomeMain";
import TrainsPage from "../components/trainsPage/TrainsPage";
import SpacePage from "../components/spacePage/SpacePage";
import GamesPage from "../components/gamesAndEntertainment/GamesPage";

export const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeBlock />,
    errorElement: <h1>Error Page</h1>,
    children: [
      {
        index: true,
        element: <HomeMain />,
      },
      {
        path: '/trains',
        element: <TrainsPage />,
      },
      {
        path: '/space',
        element: <SpacePage />,
      },
      {
        path: '/entertainment',
        element: <GamesPage />,
      },
    ]
  },
]);