import "./App.css";
import Pessoa from "./components/Pessoa";
import SayMyName from "./components/SayMyName";
import Frase from "./components/Frase";
import List from "./components/List";


function App() {
  const nome = "Gabriela";
  return (
    <div className="App">
      <h1>Testando CSS</h1>
      <Frase />
      <Frase />
      <SayMyName nome="Thiago" />
      <SayMyName nome="Tata" />
      <SayMyName nome="Matheus" />
      <SayMyName nome={nome} />
      <Pessoa //PROPS
        nome="Claudio"
        idade="55"
        profissao="Borracheiro"
        foto="https://via.placeholder.com/150"
      />
      <List />
    </div>
  );
}

export default App;
