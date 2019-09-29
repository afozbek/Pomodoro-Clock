import React from "react";

// * Author Component
const Author = props => {
  return (
    <div className="m-author" id="author">
      <p>
        Made with{" "}
        <span role="img" aria-label="Heart">
          ❤️
        </span>{" "}
        by
      </p>
      <a
        className="m-author__heroLink"
        href={props.github}
        target="_blank"
        rel="noopener noreferrer"
      >
        {props.name}
      </a>
    </div>
  );
};

export default Author;
