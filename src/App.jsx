import {
  CustomerReviews,
  Footer,
  Hero,
  PopularProducts,
  Services,
  SpecialOffer,
  Subscribe,
  SuperQuality,
} from "./sections";
import Nav from "./components/Nav";

const App = ()=>(
<main className="relative">
  <Nav/>
  <section className=" xl:padding-l wide:padding-r padding-b"><Hero/></section>
  <section className="bg-slate-800 padding "><PopularProducts/> </section>
  <section className="bg-green-400 padding"><SuperQuality/></section>
  <section className="bg-blue-400 padding-x py-10" >Services</section>
  <section className="padding bg-purple-500"><SpecialOffer/></section>
  <section className="bg-pale-blue padding"><CustomerReviews/></section>
  <section className="bg-red-400 padding-x sm:py-32 py-16 w-full"><Subscribe/></section>
  <section className="bg-black padding-t padding-x pb-8 text-white"><Footer/></section>
</main>
)


export default App


