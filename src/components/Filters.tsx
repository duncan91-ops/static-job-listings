import { useContext } from "react";
import { TagsContext } from "./JobsList";
import { clear, removeTag } from "../actions";
import Wrapper from "../assets/wrappers/Filters";

const Filters = () => {
  const { tags, dispatch } = useContext(TagsContext);

  return (
    <Wrapper className={tags.length === 0 ? "none" : ""}>
      <div className="tags">
        {tags.map((tag) => {
          return (
            <div className="tag">
              <p className="tag__text">{tag}</p>
              <button
                type="button"
                className="btn btn--remove"
                onClick={() => dispatch(removeTag(tag))}
              >
                <img
                  src="/assets/images/icon-remove.svg"
                  alt="remove tag"
                  className="remove"
                />
              </button>
            </div>
          );
        })}
      </div>
      <button className="btn btn--clear" onClick={() => dispatch(clear())}>
        Clear
      </button>
    </Wrapper>
  );
};

export default Filters;
