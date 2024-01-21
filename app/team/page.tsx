import { PlayersListComponent } from "@/components/players-list";
import { title } from "@/components/primitives";

export default function ContactPage() {
  return (
    <div>
      <h1 className={title()}>Ekipa</h1>
      <div>
        <PlayersListComponent />
      </div>
    </div>
  );
}
