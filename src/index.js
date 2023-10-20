import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Services from './components/Services/Services';
import Main from './components/Main/Main';
import About from './components/About/About';
import ServicesItem from './components/Services/ServicesItem/ServicesItem';
import Contacts from './components/Contacts/Contacts';
import ProjectsSlider from './components/Projects/ProjectsSlider/ProjectsSlider';
import ProjectPage from './components/Projects/ProjectPage/ProjectPage';
import Projects from './components/Projects/Projects';
import News from './components/News/News';
import ServicesPage from './components/Services/ServicesPage/ServicesPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <>
          <Main />
          <About />
          <Services />
          <ProjectsSlider />
          {/* <Projects /> */}
        </>,
      },
      {
        path: "contacts",
        element: <Contacts/>,
      },
      {
        path: "services",
        element: <ServicesPage/>,
      },
      {
        path: "news",
        element: <News/>,
      },
      {
        path: "services/:serviceId",
        element: <ServicesItem />,
      },
      {
        path: "projects/:projectId",
        element: <ProjectPage />,
      },
      {
        path: "projects",
        element: <Projects/>,
      },
    ]
  },

]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
