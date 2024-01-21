export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <div
        style={{ width: "100%" }}
        className="inline-block text-center justify-center"
      >
        {children}
      </div>
    </section>
  );
}
