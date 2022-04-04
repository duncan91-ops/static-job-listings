import { useContext } from "react";
import { TagsContext } from "./JobsList";
import { addTag } from "../actions";
import Button from "../assets/wrappers/Tag";

type TagProps = {
  text: string;
};

const Tag = ({ text }: TagProps) => {
  const { dispatch } = useContext(TagsContext);
  return <Button onClick={() => dispatch(addTag(text))}>{text}</Button>;
};

export default Tag;
