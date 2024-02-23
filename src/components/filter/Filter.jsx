import { filterList } from "../../helpers/filterList";

const Filter = () => {
  return filterList.map((f) => {
    return (
      <a href="#!" key={f.id} className="btn-filter" data-filter={f.title}>
        {f.label}
      </a>
    );
  });
};

export default Filter;
