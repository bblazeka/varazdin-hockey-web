import { title } from "@/components/primitives";
import strings from "@/utils/strings";

export default function AboutPage() {
  return (
    <div>
      <h1 className={title()}>{strings.ABOUT}</h1>
      <section>
        <p>
          IHK Varaždin je inline hokej klub iz Varaždina osnovan 2023. godine
        </p>
      </section>
    </div>
  );
}
