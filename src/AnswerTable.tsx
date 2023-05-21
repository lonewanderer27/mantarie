import {
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  Text
} from "@chakra-ui/react";
import { AnswerType } from "./types";

export default function AnswerTable(props: {
  answer: AnswerType | null,
  function_: string,
  a: number,
  b: number,
  n: number,
}){
  return <div>
    <TableContainer>
      <Table variant="striped" bg="c_secondary">
        <Thead>
          <Tr>
            <Th colSpan={3}>Result</Th>
          </Tr>
          <Tr>
            <Th>
              <Text>Given Values:</Text>
            </Th>
            <Th>
              <Text>Δx</Text>
            </Th>
            <Th>
              <Text>Answers:</Text>
            </Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td>
              <Text>f(x) = {props.function_}</Text>
              <Text>b = {props.b}</Text>
              <Text>a = {props.a}</Text>
              <Text>n = {props.n}</Text>
            </Td>
            <Td>
              <Text>= (a+b) / n</Text>
              <Text>= ({`${props.a}+${props.b}`}) / {props.n}</Text>
              <Text>= {props.a + props.b} / {props.n}</Text>
              <Text>= {props.answer?.deltaX}</Text>
            </Td>
            <Td>
              <Text>Trapezoidal: {props.answer?.ans_ti}</Text>
              <Text>Simpson: {props.answer?.ans_si}</Text>
            </Td>
          </Tr>
        </Tbody>
      </Table>
    </TableContainer>
  </div>
}