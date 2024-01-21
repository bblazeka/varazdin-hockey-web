import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Chip,
} from "@nextui-org/react";

export const JoinUsComponent = () => {
  return (
    <div id="join-us">
      <Card style={{ color: "white", backgroundColor: "#DB1056" }}>
        <CardBody
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <div>
            <h2 style={{ margin: 0 }}>
              Želiš i ti zaigrati s Varaždinskim Vatrama?
            </h2>
            <h4 style={{ margin: 0 }}>Pridruži nam se!</h4>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "end",
            }}
          >
            <p>Pošalji mail na varazdin@gmail.com</p>
            <p>Javi nam se na 09812345678</p>
          </div>
        </CardBody>
      </Card>
    </div>
  );
};
