import { Header } from "../header/header";

export const Home = () => {
  return (
    <>
      <Header />
      <main className="home">
        <div className="logo-container">
          <img src="/assets/logo/flamingo-logo.png" alt="Logo" />
          <span>Flamingon</span>
        </div>
      </main>
    </>
  );
};
