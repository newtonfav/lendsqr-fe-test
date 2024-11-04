"use client";
import {
  createContext,
  useContext,
  ReactNode,
  useMemo,
  useReducer,
  useState,
  Dispatch,
} from "react";
import { IUser } from "../models/userModel";
import formatDate from "../utils/functions/formatDate";

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
  payload?: object;
}

interface FilterContextType {
  unfilteredData: IUser[];
  filteredData?: IUser[];
  dispatch: Dispatch<Action>;
  updateUserStatus: (userId: string, newStatus: string) => void;
}

const FilterContext = createContext<FilterContextType | null>(null);

const initialState: InitialState = {
  organisation: "",
  username: "",
  status: "",
  email: "",
  date: "",
  phone: "",
};

function reducer(state: InitialState, action: Action) {
  switch (action.type) {
    case "filter":
      return { ...initialState, ...action.payload };
    case "reset":
      return { ...initialState };
    default:
      return state;
  }
}

function FilterProvider({
  children,
  unfilteredData: initialUnfilteredData,
}: {
  children: ReactNode;
  unfilteredData: IUser[];
}) {
  const [filterValues, dispatch] = useReducer(reducer, initialState);
  const [unfilteredData, setUnfilteredData] = useState<IUser[]>(
    initialUnfilteredData
  );

  const updateUserStatus = (userId: string, newStatus: string) => {
    setUnfilteredData((prevData) =>
      prevData.map((user) =>
        user.id === userId ? { ...user, status: newStatus } : user
      )
    );
  };

  const filteredData = useMemo(() => {
    const noFiltersApplied = Object.values(filterValues).every(
      (value) => value === ""
    );

    if (noFiltersApplied) {
      return unfilteredData;
    }

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
          ? formatDate(user.createdAt).includes(filterValues.date)
          : true) &&
        (filterValues.phone
          ? user.profile.phoneNumber.includes(filterValues.phone)
          : true) &&
        (filterValues.status
          ? filterValues.status.toString().includes(user.status)
          : true)
      );
    });
  }, [filterValues, unfilteredData]);

  return (
    <FilterContext.Provider
      value={{
        dispatch,
        unfilteredData,
        filteredData,
        updateUserStatus,
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
