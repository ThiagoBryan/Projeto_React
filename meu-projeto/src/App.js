import "./App.css";
import HelloWorld from "./components/HelloWorld";

function App() {
  const name = "Thiago";
  const newName = name.toUpperCase(); // deixa Maiusculo

  function soma(a, b) {
    return a + b;
  }

  const url = "https://via.placeholder.com/150";

  return (
    <div className="App">
      <h1>React</h1>
      <p>Olá {name}</p>
      <p>Olá {newName}</p> {/*O que esta entre {} aparece na tela */}
      <p>Soma: {soma(1, 2)} </p>
      <img src={url} alt="Minha Imagem" />
      <HelloWorld /> {/*COMPONENTE VEM DE OUTRA CLASSE HELLOWORLD */}
    </div>
  );
}

export default App;
