import React from "react";

function Grid() {
  const [note, setNote] = React.useState("");

  return <li>{note}</li>;
}

export default Grid;
