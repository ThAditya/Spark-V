// routes.js
import { createBrowserRouter, useNavigate } from "react-router-dom";
import App from "../App";
import React, { useEffect, useState } from 'react';
import LandingPage from "../Component/Landingpage";
import Homepage from "../Component/Homepage";
import About from "../Component/About";
import Ai from "../Component/Ai";
import Login from "../Component/Login";
import SignUp from "../Component/SignUp";
import Language from "../Component/Language";
import C from "../Component/C";
import Cpp from "../Component/Cpp";
import Csharp from "../Component/Csharp";
import Java from "../Component/Java";
import Python from "../Component/Python";
import Html from "../Component/Html";
import Css from "../Component/Css";
import Javascripts from "../Component/Javascripts";
import Php from "../Component/Php";
import Bootstraps from "../Component/Bootstraps";
import Tailwinds from "../Component/Tailwinds";
import Json from "../Component/Json";
import Jquery from "../Component/Jquery";
import Nodejs from "../Component/Nodejs";
import Express from "../Component/Express";
import Reacts from "../Component/Reacts";
import Angular from "../Component/Angular";
import Typescripts from "../Component/Typescripts";
import Vue from "../Component/Vue";
import Sql from "../Component/Sql";
import MongoDBRoadmap from "../Component/MongoDBRoadmap";
import Kotlin from "../Component/Kotlin";
import R from "../Component/R";
import Dsa from "../Component/Dsa";
import Git from "../Component/Git";
import Ruby from "../Component/Ruby";
import WildPage from "../Component/WildPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      ,{
        path: "home",
        element: <Homepage/>
      },{
        path: "ai",
        element:<Ai/>
      },{
        path: "about",
        element: <About/>
      },{
        path: "signup",
        element: <SignUp />
      },{
        path: "login",
        element: <Login />
      },{
        path: "language",
        element: <Language />
      },{
        path: "language/c", 
        element: <C/>
      },{
        path: "language/cpp", 
        element:<Cpp/>
      },{
        path: "language/csharp",
        element: <Csharp/>
      },{
        path: "language/java", 
        element: <Java/>
      },{
        path: "language/python", 
        element: <Python/>
      },{
        path: "language/html", 
        element:<Html/>
      },{
        path: "language/css", 
        element: <Css />
      },{
        path: "language/javascript", 
        element: <Javascripts />
      },{
        path: "language/php", 
        element: <Php/>
      },{
        path: "language/bootstrap", 
        element: <Bootstraps/>
      },{
        path: "language/tailwind", 
        element: <Tailwinds/>
      },{
        path: "language/json", 
        element:<Json/>
      },{
        path: "language/jquery",
        element: <Jquery/>
      },{
        path: "language/nodejs", 
        element: <Nodejs/>
      },{
        path: "language/express", 
        element:<Express />
      },{
        path: "language/react", 
        element:<Reacts/>
      },{
        path: "language/angular", 
        element:<Angular/>
      },{
        path: "language/typescript", 
        element:<Typescripts/>
      },{
        path: "language/vue", 
        element: <Vue/>
      },{
        path: "language/sql", 
        element: <Sql/>
      },{
        path: "language/mongo", 
        element: <MongoDBRoadmap />
      },{
        path: "language/r", 
        element:<R/>
      },{
        path: "language/ruby", 
        element: <Ruby/>
      },{
        path: "language/kotlin", 
        element: <Kotlin/>
      },{
        path: "language/git", 
        element: <Git/>
      },{
        path: "language/dsa", 
        element:<Dsa/>
      },{
        path: "",
        element: <LandingPage/>
      },{
        path: "*",
        element: <WildPage />
      }
    ]
  }
]);

export default router;
