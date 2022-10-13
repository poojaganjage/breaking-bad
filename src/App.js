import {useEffect, useState} from "react";
import Header from "./Components/Header";
import SearchBar from "./Components/SearchBar";
import CharacterList from "./Components/CharacterList";
import Spinner from "./Components/Spinner";
import './App.css';
import axios from "./Components/api";

function App() {
  const [items, setItems] = useState([]);
  console.log(items);
  const [loading, setLoading] = useState(true);
  const [query, setQuery] = useState("");
  console.log(query);

  useEffect(() => {
    const fetchItems = async() => {
      const results = await axios.get(`/characters?name=${query}`);
      console.log(results);
      setItems(results.data);
      setLoading(false);
    }
    fetchItems();
  }, [query]);
  return (
    <div className="app">
      <Header />
      <SearchBar setQuery={(query) => setQuery(query)} />
      {loading ? <Spinner /> : <CharacterList items={items} />}
    </div>
  );
}
export default App;
