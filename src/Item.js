import React, { useState } from "react";

export default function Item(props) {
  const [total, setTotal] = useState(0);

  const { info } = props;

  function handleAddClick() {
    setTotal(total + 1);
  }

  function handleRemoveClick() {
    if (total > 0) {
      setTotal(total - 1);
    }
  }

  if (!info) {
    return null;
  }

  return (
    <div className="p-3">
      <div className="p-3 border rounded-xl bg-cyan-300">
        <h2 className = "font-mono text-2xl">{info.name}</h2>
        <p className = "font-mono">{info.desc}</p>
      </div>
      <div className="item-quantity">
        <button
          className="p-3 font-mono"
          disabled={total === 0}
          onClick={handleRemoveClick}
        >
          -
        </button>
        <h3 className="p-3 font-mono">{total ? total : ""}</h3>
        <button className="p-3 font-mono " onClick={handleAddClick}>
          +
        </button>
      </div>
    </div>
  );
}
