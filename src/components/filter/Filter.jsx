import { filterList } from "../../helpers/filterList";

const Filter = ({ changeFilter, filter }) => {
  const classNames = (filterName) => {
    return filter === filterName
      ? "btn-filter btn-filter--active"
      : "btn-filter";
  };

  return filterList.map((f) => {
    return (
      <button
        href="#!"
        key={f.id}
        className={classNames(f.title)}
        data-filter={f.title}
        onClick={(e) => {
          changeFilter(e.target.dataset.filter);
        }}
      >
        {f.label}
      </button>
    );
  });
};

export default Filter;
