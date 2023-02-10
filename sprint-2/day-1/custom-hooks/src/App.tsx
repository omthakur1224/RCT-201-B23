import * as React from "react"
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
  Flex,
} from "@chakra-ui/react"
import { ColorModeSwitcher } from "./ColorModeSwitcher"
import { Logo } from "./Logo"
import Counter1 from "./componenets/Counter1"
import Counter2 from "./componenets/Counter2"
import Counter3 from "./componenets/Counter3"

export const App = () => (
  <>
  <ColorModeSwitcher justifySelf="flex-end"/>
      <Flex minH="100vh" p={3} gap={20} justifyContent="space-around">
        <Counter1/>
        <Counter2/>
        <Counter3/>
      </Flex>
  </>

)
