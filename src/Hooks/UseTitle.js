import { useEffect } from "react";

const UseTitle = (title) => {
  useEffect(() => {
    document.title = ` GameHub | ${title}`;
  }, []);
};

export default UseTitle;
