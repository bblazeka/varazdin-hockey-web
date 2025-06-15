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
} from "@heroui/react";

type TPlayer = {
  jerseyNumber: number;
  name: string;
  age: number;
};

type TPlayersGroup = {
  label: string;
  players: TPlayer[];
};

const groups: TPlayersGroup[] = [
  {
    label: "Seniori",
    players: [
      { jerseyNumber: 9, name: "Luka Kovač", age: 24 },
      { jerseyNumber: 12, name: "Antonio Vukić", age: 24 },
      { jerseyNumber: 7, name: "Marko Jurić", age: 24 },
      { jerseyNumber: 4, name: "Ivan Horvat", age: 24 },
    ],
  },
  {
    label: "Veterani",
    players: [
      { jerseyNumber: 11, name: "Mateo Šimić", age: 24 },
      { jerseyNumber: 22, name: "Petar Novak", age: 24 },
      { jerseyNumber: 15, name: "Ivan Babić", age: 24 },
    ],
  },
  {
    label: "Juniori",
    players: [
      { jerseyNumber: 18, name: "Filip Pavić", age: 24 },
      { jerseyNumber: 21, name: "Saša Tomić", age: 24 },
    ],
  },
];

export const PlayersListComponent = ({
  groups: propGroups,
}: { groups?: TPlayersGroup[] } = {}) => {
  const data = propGroups ?? groups;
  return (
    <Accordion>
      {data.map((group) => (
        <AccordionItem
          key={group.label}
          aria-label={group.label}
          title={group.label}
        >
          <Table aria-label={`${group.label} table`}>
            <TableHeader>
              <TableColumn>Broj</TableColumn>
              <TableColumn>Ime</TableColumn>
              <TableColumn>Godine</TableColumn>
            </TableHeader>
            <TableBody>
              {group.players.map((player, i) => (
                <TableRow key={player.jerseyNumber + player.name + i}>
                  <TableCell>{player.jerseyNumber}</TableCell>
                  <TableCell>{player.name}</TableCell>
                  <TableCell>{player.age}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </AccordionItem>
      ))}
    </Accordion>
  );
};
