import React from "react";
import { Button } from "@chakra-ui/react";

const CalculatorButton = ({ children, ...props }) => (
  <Button
    bg="gray.500"
    color="white"
    // m="1rem"
    w={5}
    h={5}
    // p=".5rem"
    borderRadius="md"
    fontSize="1xl"
    {...props}
  >
    {children}
  </Button>
);
export default CalculatorButton
