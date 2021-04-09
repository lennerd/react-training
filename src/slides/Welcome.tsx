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
  Image,
  Text,
} from "spectacle";
import lennerdLovesReact from "./assets/lennerd-loves-react.jpg";

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
              <TableCell color="secondary" pb={2}>
                Inhalt
              </TableCell>
              <TableCell color="secondary" pb={2}>
                Zeit
              </TableCell>
            </TableRow>
          </TableHeader>

          <TableBody>
            <TableRow>
              <TableCell color="quaternary" pb={1}>
                Vormittag
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>JSX, Clock-Komponente</TableCell>
              <TableCell>9:15-10:45</TableCell>
            </TableRow>
            <TableRow>
              <TableCell pb={2}>Projektsetup, Übung #1</TableCell>
              <TableCell pb={2}>10:45-12:00</TableCell>
            </TableRow>

            <TableRow>
              <TableCell color="quaternary" pb={1}>
                Nachmittag
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Custom-Hooks, Frontend-Server-Kommunikation</TableCell>
              <TableCell>13:00-13:30</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Pause, Übung #2</TableCell>
              <TableCell>13:30-14:30</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Routing, Formulare</TableCell>
              <TableCell>14:30-15:00</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Pause, Übung #3</TableCell>
              <TableCell>15:00-16:00</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Slide>
      <Slide>
        <FlexBox height="100%" flexDirection="column">
          <Image width="50%" src={lennerdLovesReact} />
          <Text fontSize="h6">© Frederik Winkler</Text>
        </FlexBox>
      </Slide>
    </>
  );
}
