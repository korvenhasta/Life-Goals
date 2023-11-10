import ActionBar from "../ActionBar/ActionBar";
import Navbar from "../Navbar/Navbar";
import PageWrapper from "../PageWrapper/PageWrapper";

export default function Layout({ children }) {
  return (
    <PageWrapper>
      <Navbar />
      <main>
        <ActionBar />
        {children}
      </main>
    </PageWrapper>
  );
}
