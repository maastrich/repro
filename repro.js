const { Parser } = require("acorn");

const fail = `
import styled from 'styled-components';

type ExtendedProps = {
    $anyprop: string;
};

const StyledDiv = styled.div<ExtendedProps>\`
    color: red;
\`;
`;

const parser = Parser.extend(require("acorn-typescript").default());

parser.parse(fail, {
  sourceType: "module",
  ecmaVersion: 2020,
  locations: true,
});
