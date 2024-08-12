
import { Navbar, Footer } from "@/components";

const PageWraper = (PageComponent, id = null) =>
  function Page() {
    <div className="w-full min-h-screen flex flex-col">
      <Navbar />
      <PageComponent />
      <Footer />
    </div>;
  };

export default PageWraper;