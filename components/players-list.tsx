"use client";
import {
  Accordion,
  AccordionItem,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@nextui-org/react";

export const PlayersListComponent = () => {
  return (
    <Accordion>
      <AccordionItem key="1" aria-label="Seniori" title="Seniori">
        <Table aria-label="Example static collection table">
          <TableHeader>
            <TableColumn>Ime</TableColumn>
            <TableColumn>Datum rođenja</TableColumn>
            <TableColumn>Visina</TableColumn>
          </TableHeader>
          <TableBody>
            <TableRow key="1">
              <TableCell>Luka Kovač</TableCell>
              <TableCell>01.01.2000.</TableCell>
              <TableCell>1,98m</TableCell>
            </TableRow>
            <TableRow key="2">
              <TableCell>Antonio Vukić</TableCell>
              <TableCell>01.02.2000.</TableCell>
              <TableCell>1,88m</TableCell>
            </TableRow>
            <TableRow key="3">
              <TableCell>Marko Jurić</TableCell>
              <TableCell>01.01.2000.</TableCell>
              <TableCell>1,98m</TableCell>
            </TableRow>
            <TableRow key="4">
              <TableCell>Ivan Horvat</TableCell>
              <TableCell>01.03.2000.</TableCell>
              <TableCell>1,78m</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </AccordionItem>
      <AccordionItem key="2" aria-label="Veterani" title="Veterani">
        <Table aria-label="Example static collection table">
          <TableHeader>
            <TableColumn>Ime</TableColumn>
            <TableColumn>Datum rođenja</TableColumn>
            <TableColumn>Visina</TableColumn>
          </TableHeader>
          <TableBody>
            <TableRow key="1">
              <TableCell>Mateo Šimić</TableCell>
              <TableCell>01.01.2000.</TableCell>
              <TableCell>1,98m</TableCell>
            </TableRow>
            <TableRow key="2">
              <TableCell>Petar Novak</TableCell>
              <TableCell>01.02.2000.</TableCell>
              <TableCell>1,88m</TableCell>
            </TableRow>
            <TableRow key="3">
              <TableCell>Ivan Babić</TableCell>
              <TableCell>01.01.2000.</TableCell>
              <TableCell>1,98m</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </AccordionItem>
      <AccordionItem key="3" aria-label="Juniori" title="Juniori">
        <Table aria-label="Example static collection table">
          <TableHeader>
            <TableColumn>Ime</TableColumn>
            <TableColumn>Datum rođenja</TableColumn>
            <TableColumn>Visina</TableColumn>
          </TableHeader>
          <TableBody>
            <TableRow key="1">
              <TableCell>Filip Pavić</TableCell>
              <TableCell>01.01.2000.</TableCell>
              <TableCell>1,98m</TableCell>
            </TableRow>
            <TableRow key="2">
              <TableCell>Saša Tomić</TableCell>
              <TableCell>01.02.2000.</TableCell>
              <TableCell>1,88m</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </AccordionItem>
    </Accordion>
  );
};
