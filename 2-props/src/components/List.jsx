import Item from "./Item";

const List = () => {
  return (
    <>
      <h1>Minha Lista</h1>
      <ul>
        <Item marca="Ferrari" ano_lancamento={1985}/>
        <Item marca="Porsche" ano_lancamento={1964} />
        <Item marca="Renault" />
        <Item marca="Lamborghine" ano_lancamento={2023} />
        <Item />
        <li>Item 2</li>
      </ul>
    </>
  );
};

export default List;
