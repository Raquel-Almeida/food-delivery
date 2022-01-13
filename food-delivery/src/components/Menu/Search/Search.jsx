import "./Search.scss";

export default function Search(props) {
  const handleSearchInput = (searchValue) => {
    props.onSearchInput(searchValue);
  };

  return (
    <>
      <input
        type="text"
        placeholder="Search..."
        onChange={(e) => {
          handleSearchInput(e.target.value);
        }}
      />
    </>
  );
}
