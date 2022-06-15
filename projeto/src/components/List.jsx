import Item from "./Item";

const List = () => {
  return (
    <>
      <h1>Minha Lista</h1>
      <ul>
        <Item marca="Ferrari" />
        <Item marca="Porsche" />
        <Item marca="Lamborghine" />
        <li>Item 2</li>
      </ul>
    </>
  );
};

export default List;
