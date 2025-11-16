import { BingoProvider } from "@/context/bingoContext";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body>
        <BingoProvider>
          {children}
        </BingoProvider>
      </body>
    </html>
  );
}