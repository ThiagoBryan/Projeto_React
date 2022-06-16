import { useState } from 'react';


const Formulario = () => {
  const cadastrarUsuario = (e) => {
    e.preventDefault(); // para ver o usuario cadastrado
    console.log(`Usuario ${name} foi cadastrado com a senha: ${password}`);
  };
                            // hook
  const [name, setName] = useState();
  const [password, setPassword] = useState();

  return (
    <>
      <h1>Meu cadastro</h1>
      <form onSubmit={cadastrarUsuario}>
        <div>
          <label htmlFor="name">Nome:</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Digite seu nome"
            //value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">Senha:</label>
          <input
            type="password"
            id="password"
            name="name"
            placeholder="Digite sua senha"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <input type="submit" placeholder="Cadastrar" />
        </div>
      </form>
    </>
  );
};

export default Formulario;
