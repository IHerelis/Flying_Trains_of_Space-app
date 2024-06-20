import { createBrowserRouter } from "react-router-dom";
import HomeBlock from "../components/homeBlock/HomeBlock";
import HomeMain from "../components/homeMain/HomeMain";
import TrainsPage from "../components/trainsPage/TrainsPage";
import SpacePage from "../components/spacePage/SpacePage";
import GamesPage from "../components/gamesAndEntertainment/GamesPage";
import AstronomyPhotosPage from "../components/astronomyPhotosPage/AstronomyPhotosPage";
import OursSolarPage from "../components/spacePage/oursSolarPage/OursSolarPage";

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
        children: [
          {
            index: true,
            element: <OursSolarPage />,
          },
        ]
      },
      {
        path: '/entertainment',
        element: <GamesPage />,
      },
      {
        path: '/astronomyPhotos',
        element: <AstronomyPhotosPage />,
      },
    ]
  },
]);