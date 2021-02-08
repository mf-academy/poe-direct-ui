import React from "react";

export const updateLeagueContext = (value) => ({ league: value })
export const updateCategoryContext = (value) => ({ category: value })
export const updateSidebarContext = (value) => ({ sidebar: value })


export const Context = React.createContext({});