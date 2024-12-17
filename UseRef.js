let UseRefComp = () => {
  let count = UseRef(0);

  let onClickHandler = () => {
    count++;
    alert(`You clicked ${count} times`);
  };

  return <button>Click me</button>;
};
export default UseRefComp;
