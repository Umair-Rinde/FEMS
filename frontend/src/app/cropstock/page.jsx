import SideNavbar from "../components/common/SideNavbar";
import Footer from "../components/common/Footer";
import CropStockForm from "../components/Pages/CropStock";
import Navbar from "../components/common/Navbar";

const CropStockPage = () => {
  return (
    <main className="flex w-screen min-h-screen flex-col items-center transtion-all duration-200 ease-linear">
    <Navbar />
      <div className="flex w-full py-2 bg-[#ccffcc]">
      <div className="w-1/6"><SideNavbar /></div>
        <page className=" w-2/3 flex flex-col m-auto">
          <section className="w-full h-full px-2 py-10">
            <div>
                <h2 className="text-3xl font-bold mx-1 w-full pb-2 text-green-500">Crop Stock</h2>
            </div>
            <div className="w-full h-full flex-col gap-3 p-3 rounded-2xl lg:rounded-4xl border border-green-500 bg-[#FFFFFF] opacity-90"  
              style={{
                        boxShadow: '5px 5px 10px #00000040',
                    }}
              >
                <dummy className="w-full"></dummy>
                <DividerX />
                <CropStockForm />
            </div>
          </section>
        </page>
      </div>
    </main>
  );
};

const DividerX = () => <div className="w-96 h-[0.5x] bg-black my-4"></div>;

export default CropStockPage;
