export const addTag = (text: string) => {
  return {
    type: "ADD_TAG",
    payload: text,
  };
};

export const removeTag = (text: string) => {
  return {
    type: "REMOVE_TAG",
    payload: text,
  };
};

export const clear = () => {
  return {
    type: "CLEAR",
  };
};
