import React from "react";
import ExampleComponentStyled from "./ExampleComponent.styled";
import { ExampleComponentProps } from "./models/ExampleComponent.props.model";

const ExampleComponent = ({ text, className }: ExampleComponentProps) => {
  return (
    <ExampleComponentStyled className={className}>
      {text}
    </ExampleComponentStyled>
  );
};

export default ExampleComponent;
