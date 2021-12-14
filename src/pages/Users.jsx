import React, { useEffect, useState } from 'react';

function Users () {
  useEffect(() => {
    fetchItems();
  }, []);

  const [items, setItems] = useState([]);

  const fetchItems = async () => {
    const data = await fetch('/users');
    const items = await data.json();
    setItems(items);
  };
  return (
    <section>
      <div>
        <h1>Admin page - USERS</h1>
      </div>
      {items.map((item) => (
        <div>
          <h2>{item.name}</h2>
          <h2>{item.surname}</h2>
          <h3>{item.email}</h3>
          <h3>{item.age}</h3>
        </div>
      ))}
    </section>
  );
}

export default Users;
