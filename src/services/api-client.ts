import axios from "axios";

export default axios.create({
  url: "https://openlibrary.org/search.json?q=YOUR_QUERY&limit=10&page=1",
});
