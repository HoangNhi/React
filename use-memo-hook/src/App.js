import { useMemo, useState, useRef } from "react";

function App() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [products, setProducts] = useState([]);
  const inputRef = useRef(null);

  const handleSubmit = (e) => {
    setProducts([
      ...products,
      {
        name: name,
        price: parseFloat(price),
      }
    ]);

    setName("");
    setPrice("");
    inputRef.current.focus();
  };

  const total = useMemo(() => {
    return products.reduce((acc, product) => acc + product.price, 0);
  }, [products]);

  return (
    <div style={{ padding: "10px 32px" }}>
      <input
        ref={inputRef}
        value={name}
        placeholder="Enter name..."
        onChange={(e) => setName(e.target.value)}
      />
      <br />
      <input
        value={price}
        placeholder="Enter price..."
        onChange={(e) => setPrice(e.target.value)}
      />
      <br />
      <button onClick={handleSubmit}>Add Product</button>
      <br />
      Total Products: <strong>{total}</strong>
      <ul>
        {products.map((product, index) => (
          <li key={index}>
            {product.name} - ${product.price}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
