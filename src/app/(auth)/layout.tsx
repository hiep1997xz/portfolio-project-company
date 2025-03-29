export default function LanguagesLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <main>{children}</main>
    </div>
  );
}
