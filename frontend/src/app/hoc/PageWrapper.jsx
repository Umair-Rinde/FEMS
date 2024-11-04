
import { Navbar, Footer, Header } from "../components";

const PageWraper = (PageComponent, id = null) =>
  function Page() {
    return (
      <div className="w-full min-h-screen flex flex-col bg-white">
        <Header />
        <Navbar />
        <div className="flex items-center justify-center min-h-screen w-full py-10 px-4 md:px-20">
          <PageComponent />
        </div>
        <Footer />
      </div>
    );
  };

export default PageWraper;
