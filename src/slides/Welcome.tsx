import React from "react";
import {
  FlexBox,
  Heading,
  Slide,
  // @ts-ignore
  Table,
  // @ts-ignore
  TableHeader,
  // @ts-ignore
  TableRow,
  // @ts-ignore
  TableCell,
  // @ts-ignore
  TableBody,
} from "spectacle";

export default function Welcome() {
  return (
    <>
      <Slide>
        <FlexBox
          height="100%"
          // @ts-ignore
          flexDirection="column"
        >
          <Heading color="primary">Guten Morgen!</Heading>
          <Heading>☕ 👋 🤓</Heading>
        </FlexBox>
      </Slide>
      <Slide>
        <FlexBox
          // @ts-ignore
          alignItems={"center"}
          height="100%"
        >
          <Heading color="quaternary">Einführung in React</Heading>
        </FlexBox>
      </Slide>
      <Slide>
        <Table>
          <TableHeader>
            <TableRow>
              <TableCell pb={2}>Inhalt</TableCell>
              <TableCell pb={2}>Zeit</TableCell>
            </TableRow>
          </TableHeader>

          <TableBody>
            <TableRow>
              <TableCell color="quaternary" pb={1}>
                Vormittag
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell color="secondary">JSX, Clock-Komponente</TableCell>
              <TableCell color="secondary">9:15-10:45</TableCell>
            </TableRow>
            <TableRow>
              <TableCell color="secondary" pb={2}>
                Projektsetup, Übung #1
              </TableCell>
              <TableCell color="secondary" pb={2}>
                10:45-12:00
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell color="quaternary" pb={1}>
                Nachmittag
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell color="secondary">
                Custom-Hooks, Frontend-Server-Kommunikation
              </TableCell>
              <TableCell color="secondary">13:00-13:30</TableCell>
            </TableRow>
            <TableRow>
              <TableCell color="secondary">Pause, Übung #2</TableCell>
              <TableCell color="secondary">13:30-14:30</TableCell>
            </TableRow>
            <TableRow>
              <TableCell color="secondary">Formulare, Routing</TableCell>
              <TableCell color="secondary">14:30-15:00</TableCell>
            </TableRow>
            <TableRow>
              <TableCell color="secondary">Pause, Übung #3</TableCell>
              <TableCell color="secondary">15:00-16:00</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Slide>
    </>
  );
}
