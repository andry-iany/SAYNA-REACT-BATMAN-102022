import ArrowDown from "../../components/arrow-down";
import Filter from "./filter";
import Header from "./header";
import "./style.scss";

const EShop = () => {
  return (
    <div>
      <Header />
      <ArrowDown />
      <section className="row p-4">
        <article className="col-3">
          <Filter />
        </article>
        <article className="col-9">{/* <app-results></app-results> */}</article>
      </section>
    </div>
  );
};

export default EShop;
