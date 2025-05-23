import "./resultHeader.css";
const ResultHeader = (props) => {
  const { pageData } = props;

  return (
    <div className="resultHeader">
      <p>
        Showing {pageData.start} - {pageData.last} out of {pageData.total} jobs
      </p>
      <p className="resultHeader_subHeading">that are recommended for you</p>
    </div>
  );
};
export default ResultHeader;
