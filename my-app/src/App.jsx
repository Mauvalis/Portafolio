import React from 'react';
import ComponentGeneral from './ComponentGeneral';

const ListaEditable = () => {
  const initialData = [1, 2, 3, 4, 5];
  const [data, setData] = React.useState(initialData);

  const handleEdit = (index) => {
    const newData = [...data];
    newData[index] = (
      <input
        type="text"
        defaultValue={newData[index]}
        onBlur={(e) => handleBlur(index, e.target.value)}
        onKeyDown={(e) => handleKeyDown(index, e.key)}
        autoFocus
      />
    );
    setData(newData);
  };

  const handleBlur = (index, value) => {
    const newData = [...data];
    newData[index] = <p>{value}</p>;
    setData(newData);
  };

  const handleKeyDown = (index, key) => {
    if (key === 'Enter') {
      const newData = [...data];
      newData.splice(index + 1, 0, '');
      setData(newData);
    }
  };

  return (
    <div className="scrollable-list">
      {data.map((item, index) => (
        <div key={index} onClick={() => handleEdit(index)}>
          {item}
        </div>
      ))}
    </div>
  );
};

const App = () => {
  return (
    <div>
      <ComponentGeneral />
      <ListaEditable />
    </div>
  );
};

export default App;





