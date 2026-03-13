import MainWindow from "./components/MainWindow";
import BootWrapper from "./components/BootWrapper";

export const metadata = {
  title: "Personal Portfolio | Terminal UI",
  description: "A retro terminal-themed personal portfolio showcasing fullstack development projects and skills.",
};

export default function Home() {
  return (
    <div className="bg-black min-h-screen">
      <BootWrapper>
        <main>
          <MainWindow />
        </main>
      </BootWrapper>
    </div>
  );
}
