import React, { useReducer } from "react";
import data from "../data.json";
import Job from "./Job";
import Filters from "./Filters";
import Wrapper from "../assets/wrappers/JobList";

const initialState: string[] = [];

type TagsContextType = {
  tags: string[];
  dispatch: React.Dispatch<{
    type: string;
    payload?: string;
  }>;
};

export const TagsContext = React.createContext<TagsContextType>(
  {} as TagsContextType
);

const reducer = (
  state: string[],
  action: { type: string; payload?: string }
) => {
  if (action.type === "ADD_TAG" && action.payload) {
    if (!state.includes(action.payload)) {
      return [...state, action.payload];
    }
    return state;
  } else if (action.type === "REMOVE_TAG") {
    const filtered = state.filter((value) => value !== action.payload);
    return filtered;
  } else if (action.type === "CLEAR") {
    return [];
  } else {
    return state;
  }
};

const filterJobs = (tags: string[]) => {
  if (tags.length === 0) {
    return data;
  }
  return data.filter(({ role, level, languages, tools }) => {
    const values = tags.map((tag) => {
      return (
        role === tag ||
        level === tag ||
        languages.includes(tag) ||
        tools.includes(tag)
      );
    });
    return values.every(Boolean);
  });
};

const JobsList = () => {
  const [tags, dispatch] = useReducer(reducer, initialState);

  return (
    <TagsContext.Provider value={{ tags, dispatch }}>
      <Wrapper>
        <Filters />
        {filterJobs(tags).map((job) => (
          <Job {...job} key={job.id} />
        ))}
      </Wrapper>
    </TagsContext.Provider>
  );
};

export default JobsList;
