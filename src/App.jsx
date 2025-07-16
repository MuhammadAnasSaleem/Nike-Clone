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

const App = ()=>(
<main className="relative">
  nav
  <section className="bg-slate-500 xl:padding-l wide:padding-r padding-b"><hero/></section>
  <section className="bg-pink-400 padding "><Popularproducts/> </section>
  <section className="bg-green-400 padding"><SuperQuality/></section>
  <section className="bg-blue-400 padding-x py-10" ><Services/></section>
  <section className="padding bg-purple-500"><SpecialOffer/></section>
  <section className="bg-pale-blue padding"><Customerreviews/></section>
  <section className="bg-red-400 padding-x sm:py-32 py-16 w-full"><Subscribe/></section>
  <section className="bg-black padding-t padding-x pb-8 text-white"><Footer/></section>
</main>
)


export default App


