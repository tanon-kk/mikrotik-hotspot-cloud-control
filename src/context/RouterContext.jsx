"use client";

import {
  createContext,
  useContext,
  useState,
} from "react";

import routers from "@/data/routers";

const RouterContext = createContext();

export function RouterProvider({
  children,
}) {

  const [selectedRouter, setSelectedRouter] =
    useState(routers[0]);

  return (

    <RouterContext.Provider
      value={{
        selectedRouter,
        setSelectedRouter,
      }}
    >

      {children}

    </RouterContext.Provider>

  );

}

export function useRouterContext() {

  return useContext(RouterContext);

}