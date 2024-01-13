import { title } from "@/components/primitives";

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex flex-col gap-4 py-8 md:py-10">
      <h2 className={title()}>Novosti</h2>
      <div className="inline-block">{children}</div>
    </section>
  );
}
