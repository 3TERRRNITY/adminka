import React from "react";

export default function AddItem(props) {
  return (
    <form onSubmit={props.onFormSubmit}>
      <div className = "p-3 border">
        <label htmlFor="item-name" className = "p-3 text-xl font-mono">Название:</label>
        <input
          type="text"
          value={props.name}
          onChange={props.onNameChange}
          id="item-name"
          placeholder="Название товара"
          className="p-3 border rounded-md font-mono"
        />
      </div>
      <div className = "p-3 border">
        <label htmlFor="item-description" className = "p-3 text-xl font-mono">Описание:</label>
        <input
          type="text"
          value={props.desc}
          onChange={props.onDescChange}
          id="item-description"
          placeholder="Описание товара"
          className="p-3 border rounded-md font-mono"
        />
      </div>

      <div className="form-footer">
        <div className="p-3 text-red-600 text-xl">{props.valid}</div>
        <input type="submit" className="p-3 border rounded-xl shadow-md bg-cyan-500 hover:bg-cyan-800" value="Добавить" />
      </div>
    </form>
  );
}