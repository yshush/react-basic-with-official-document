import React from "react";

function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

export default function Composition() {
  return (
    <div>
      <Welcome name="Jimmy" />
      <Welcome name="Timmy" />
      <Welcome name="Tommy" />
      <Welcome name="Amy" />
    </div>
  );
}
