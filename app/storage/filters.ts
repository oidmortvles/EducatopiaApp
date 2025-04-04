import { create } from "zustand";


interface filterModel {
    filter: string;
    filterOn: (newFilter: string) => void;
  }

const useFilters = create <filterModel> ((set)=> ({
    filter:"All",
    filterOn: (newFilter:string) =>set({filter:newFilter}),
}));


export default useFilters;