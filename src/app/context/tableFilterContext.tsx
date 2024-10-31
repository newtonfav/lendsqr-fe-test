"use client";
import {
  createContext,
  useContext,
  ReactNode,
  useMemo,
  useReducer,
  Dispatch,
} from "react";
import { IUser } from "../utils/models/userModel";

interface InitialState {
  organisation: string;
  username: string;
  email: string;
  date: string;
  phone: string;
  status: string;
}

interface Action {
  type: string;
  payload?: any;
}

interface FilterContextType {
  unfilteredData: IUser[];
  filteredData?: IUser[];
  dispatch: Dispatch<Action>;
}

const FilterContext = createContext<FilterContextType | null>(null);

const initialState: InitialState = {
  organisation: "",
  username: "",
  email: "",
  date: "",
  phone: "",
  status: "",
};

function reducer(state: InitialState, action: Action) {
  switch (action.type) {
    case "filter":
      return { ...state, ...action.payload };
    case "reset":
      return { ...initialState };
    default:
      return state;
  }
}

function FilterProvider({
  children,
  unfilteredData,
}: {
  children: ReactNode;
  unfilteredData: IUser[];
}) {
  const [filterValues, dispatch] = useReducer(reducer, initialState);

  // Memoize filteredData to optimize performance
  const filteredData = useMemo(() => {
    // Check if all filter values are empty
    const noFiltersApplied = Object.values(filterValues).every(
      (value) => value === ""
    );

    if (noFiltersApplied) {
      // Return all data if no filters are applied
      return unfilteredData;
    }

    // Filter based on non-empty filter values
    return unfilteredData.filter((user) => {
      return (
        (filterValues.organisation
          ? user.organisation.toLowerCase().includes(filterValues.organisation)
          : true) &&
        (filterValues.username
          ? user.firstName.toLowerCase().includes(filterValues.username)
          : true) &&
        (filterValues.email
          ? user.profile.email.toLowerCase().includes(filterValues.email)
          : true) &&
        (filterValues.date
          ? user.createdAt.includes(filterValues.date)
          : true) &&
        (filterValues.phone
          ? user.profile.phoneNumber.includes(filterValues.phone)
          : true) &&
        (filterValues.status ? user.status === filterValues.status : true)
      );
    });
  }, [filterValues, unfilteredData]);

  return (
    <FilterContext.Provider
      value={{
        dispatch,
        unfilteredData,
        filteredData,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
}

function useFilter() {
  const context = useContext(FilterContext);
  if (!context) {
    throw new Error("useFilter must be used within a FilterProvider");
  }

  return context;
}

export { FilterProvider, FilterContext, useFilter };
export type { FilterContextType };
