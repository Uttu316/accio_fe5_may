import "./resultHeader.css";
import { memo, useEffect, useRef } from "react";

const ResultHeader = (props) => {
  const { pageData, isLoading } = props;

  const elRef = useRef();
  const xRef = useRef(0); // remember the updated value  on next render

  // console.log(
  //   elRef.current === document.querySelector(".resultHeader_subHeading")
  // );

  useEffect(() => {
    if (!isLoading) {
      elRef.current.style.color = "pink";
      elRef.current.style.fontSize = "10px";
    }
  }, [isLoading, elRef.current]);

  xRef.current += 1; // will not cause rerender

  console.log(xRef);

  return (
    <div className="resultHeader">
      {!isLoading && (
        <>
          {" "}
          <p>
            Showing {pageData.start} - {pageData.last} out of {pageData.total}{" "}
            jobs
          </p>
          <p ref={elRef} className="resultHeader_subHeading">
            that are recommended for you
          </p>
        </>
      )}
      {isLoading && <p>Fetching..</p>}
    </div>
  );
};
export default memo(ResultHeader);
