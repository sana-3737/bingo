import "./globals.css";
import { BingoProvider } from '../context/bingoContext';
import Header from "@/components/header";
import Footer from "@/components/footer";

export const metadata = {
  title: "BINGO!",
  description: "イベント用の楽しいビンゴアプリ 🎉",
  openGraph: {
    title: "BINGO!",
    description: "イベント用の楽しいビンゴアプリ 🎉",
    url: "https://bingo.vercel.app",
    siteName: "BINGO!",
    locale: "ja_JP",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body className="flex flex-col min-h-screen bg-[#8787af]">
        {/* Contextで全体を包む */}
        <BingoProvider>
          {/* ヘッダーは全ページ共通 */}
          <Header />

          {/* ページごとのコンテンツ */}
          <main className="flex-grow p-6">{children}</main>

          {/* フッターも全ページ共通 */}
          <Footer />
        </BingoProvider>
      </body>
    </html>
  );
}