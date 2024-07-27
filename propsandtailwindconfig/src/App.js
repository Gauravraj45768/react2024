

import Card from './components/Card';

function App() {
  return (
    <>
      <h1 className="flex justify-center  bg-green-400 text-black p-4 rounded  mb-4  ">
        Employee details
      </h1>
      <div className="flex  justify-around">
        <Card username="alisa" />
        <Card username="john" />
        <Card username="jane" />
        <Card />
      </div>
    </>
  );
}

export default App;
