import "./Search.scss";

export default function Search(props) {
  // Passes searchValue to the parent component (MealsMenu.jsx)
  const handleSearchInput = (searchValue) => {
    props.onSearchInput(searchValue);
  };

  return (
    <>
      <input
        className="search-input"
        type="text"
        placeholder="Search..."
        onChange={(e) => {
          handleSearchInput(e.target.value);
        }}
      />
    </>
  );
}
