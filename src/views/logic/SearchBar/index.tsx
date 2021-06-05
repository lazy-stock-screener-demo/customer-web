import React, { ReactElement } from "react";
import SearchIcon from "@material-ui/icons/Search";
import { useSVGStyles } from "../../dump/Svg";
import { SearchInput, SearchResult, SearchBarCon } from "../../dump/SearchBar";
import { ResultList } from "./ResultList";
import { useAutoComplete } from "./hooks/useAutoComplete";
import { WithCatalogAPIHandler } from "../../../presenters/Catalog/catalogVM";

export const SearchBar = ({ location }): ReactElement => {
  const { handleChange, handleBlur, value, filterResults } = useAutoComplete();
  const svgClasses = useSVGStyles();
  return (
    <SearchBarCon className={"SearchBar"}>
      <SearchInput
        type="text"
        value={value}
        className={"SearchInput"}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      <SearchIcon className={svgClasses.svg}></SearchIcon>
      <SearchResult className={"SearchResult"}>
        <ResultList list={filterResults} location={location} />
      </SearchResult>
    </SearchBarCon>
  );
};

export default (props) => WithCatalogAPIHandler(props)(SearchBar)();

// const state = {
//   todos: [
//     // key is creation date
//     { key: "t1", data: { text: "Board the plane", isDone: false } },
//     { key: "t2", data: { text: "Sleep", isDone: false } },
//     {
//       key: "t3",
//       data: { text: "Try to finish conference slides", isDone: false },
//     },
//     { key: "t4", data: { text: "Eat cheese and drink wine", isDone: false } },
//     { key: "t5", data: { text: "Go around in Uber", isDone: false } },
//     { key: "t6", data: { text: "Talk with conf attendees", isDone: false } },
//     { key: "t7", data: { text: "Show Demo 1", isDone: false } },
//     { key: "t8", data: { text: "Show Demo 2", isDone: false } },
//     {
//       key: "t9",
//       data: { text: "Lament about the state of animation", isDone: false },
//     },
//     { key: "t10", data: { text: "Show Secret Demo", isDone: false } },
//     { key: "t11", data: { text: "Go home", isDone: false } },
//   ],
//   value: "",
//   selected: "all",
// };

// const ListItem = ({ item }) => {
//   return <SearchResultItem>{item.data.text}</SearchResultItem>;
// };

// const List = ({ list }) => {
//   return (
//     <SearchResultList>
//       {list.map((item) => (
//         <ListItem key={item.key} item={item} />
//       ))}
//     </SearchResultList>
//   );
// };

// export const SearchBar = () => {
//   const [{ value }, setSearchBar] = useState(state);
//   // const { value } = searchBar;
//   const handleChange = ({ target: { value } }) => {
//     setSearchBar((prevState) => ({
//       ...prevState,
//       value,
//     }));
//   };
//   const filterResults = useMemo(
//     () =>
//       state.todos.filter(({ key, data: { text, isDone } }) => {
//         return text.toLowerCase().includes(value.toLowerCase());
//       }),
//     [value]
//   );
// }
