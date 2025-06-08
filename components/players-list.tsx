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

type Player = {
  name: string;
  birthDate: string;
  height: string;
};

type PlayersGroup = {
  label: string;
  players: Player[];
};

const groups: PlayersGroup[] = [
  {
    label: "Seniori",
    players: [
      { name: "Luka Kovač", birthDate: "01.01.2000.", height: "1,98m" },
      { name: "Antonio Vukić", birthDate: "01.02.2000.", height: "1,88m" },
      { name: "Marko Jurić", birthDate: "01.01.2000.", height: "1,98m" },
      { name: "Ivan Horvat", birthDate: "01.03.2000.", height: "1,78m" },
    ],
  },
  {
    label: "Veterani",
    players: [
      { name: "Mateo Šimić", birthDate: "01.01.2000.", height: "1,98m" },
      { name: "Petar Novak", birthDate: "01.02.2000.", height: "1,88m" },
      { name: "Ivan Babić", birthDate: "01.01.2000.", height: "1,98m" },
    ],
  },
  {
    label: "Juniori",
    players: [
      { name: "Filip Pavić", birthDate: "01.01.2000.", height: "1,98m" },
      { name: "Saša Tomić", birthDate: "01.02.2000.", height: "1,88m" },
    ],
  },
];

export const PlayersListComponent = ({
  groups: propGroups,
}: { groups?: PlayersGroup[] } = {}) => {
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
              <TableColumn>Ime</TableColumn>
              <TableColumn>Datum rođenja</TableColumn>
              <TableColumn>Visina</TableColumn>
            </TableHeader>
            <TableBody>
              {group.players.map((player, i) => (
                <TableRow key={player.name + i}>
                  <TableCell>{player.name}</TableCell>
                  <TableCell>{player.birthDate}</TableCell>
                  <TableCell>{player.height}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </AccordionItem>
      ))}
    </Accordion>
  );
};
