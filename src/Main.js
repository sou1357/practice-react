//component file name start with capital letter
//and Component function must start from capital letter and should same name as file name
import Calculator from "./Calculator";
import Footer from "./Footer";
import Header from "./Header";
function Main() {
  return (
    <div>
      <Header />
      <Calculator />
      <Footer />
    </div>
  );
}

export default Main;
