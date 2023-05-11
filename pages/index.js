// pages/index.js
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchItems, helloWorld } from "../src/features/names/dataSlice";

export default function Home() {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.data.items);
  console.log("items", items);
  useEffect(() => {
    dispatch(fetchItems());
  }, [dispatch]);

  return (
    <div>
      <h1>Data List</h1>
      <ul>
        {items.map((item, index) => (
          <li key={item.ID}>
            {index + 1}. {item.jobName} ({item.jobNumber})
          </li>
        ))}
      </ul>
    </div>
  );
}
