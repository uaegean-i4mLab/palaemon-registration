const ValidateTable = (props) => {
  let attributeRows = Object.keys(props.userDetails).flatMap(
    (attributeName) => {
      return (
        <div className="row" key={attributeName}>
          <div className="col-s2">{attributeName}</div>{" "}
          <div className="col-s2" style={{ paddingLeft: "2rem" }}>
            {props.userDetails[attributeName]}
          </div>
        </div>
      );
    }
  );

  return <div className="container">{attributeRows}</div>;
};

export default ValidateTable;
