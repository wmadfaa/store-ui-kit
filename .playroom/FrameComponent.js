import React from "react";
import { Helmet } from "react-helmet";

import GlobalStyle from "../src/styles/global";

const PlayroomFrame = ({ children }) => (
  <>
    <Helmet>
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap" rel="stylesheet" />
    </Helmet>
    <GlobalStyle />
    {children}
  </>
);

export default PlayroomFrame;
