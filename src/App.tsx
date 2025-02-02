import Input from "./components/input";

function Login(){
  const hello = "hello";

  function onClick() {
    alert("hola")
  }

  return (
    <div>
      <form>
        <input type="email" name={hello} placeholder="Pon tu email aqui OwO"/>
        <Input type="password" name="pass" placeholder="Pon tu contraseña aqui UwU" />
        <Input type="password" name="pass" placeholder="Pon tu contraseña aqui UwU" />
        <Input type="password" name="pass" placeholder="Pon tu contraseña aqui UwU" />
        <Input type="password" name="pass" placeholder="Pon tu contraseña aqui UwU" />
      </form>
      <button onClick={onClick}>Dame click</button>
    </div>
  )
};

export default Login;
