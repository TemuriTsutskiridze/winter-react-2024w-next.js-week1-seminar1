"use client";

import { useEffect, useState } from "react";

export default function Parent() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const respone = await fetch("https://jsonplaceholder.typicode.com/todos");
      const data = await respone.json();
      setData(data);
    };
    fetchData();
  }, []);
  return (
    <div>
      <h1>Contact</h1>
      <div>
        {data.map((item) => {
          return (
            <div key={item.id}>
              <p>{item.title}</p>
              <p>{item.completed}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
