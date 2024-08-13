
import { Navbar, Footer, Header } from "@/app/components";

const PageWraper = (PageComponent, id = null) =>
  function Page() {
    return (
      <div className="w-full min-h-screen flex flex-col">
        <Header />
        <Navbar />
        <PageComponent />
        <Footer />
      </div>
    );
  };

export default PageWraper;
