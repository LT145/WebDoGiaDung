import Nav from './component/Header';
import Banner from './component/Banner';
import Category from './component/Category';
import Hotsale from './component/Hotsale';
import Banner2 from './component/Banner/index2';
import ProductTable from './component/Product';
import Banner3 from './component/Banner/index3';
import Footer from './component/Footer';

function App() {
  return (
    <div>
      <Nav />
      <Banner />
      <Category />
      <Hotsale />
      <Banner2 />
      <ProductTable />
      <Banner3 />
      <Footer />
    </div>
  );
}

export default App;
