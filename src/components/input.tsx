import "../App.css";

interface InputTypes {
  type: string;
  name: string;
  placeholder: string;
}

function Input({type, name, placeholder}: InputTypes) {
return <input className="input-1" type={type} name={name} placeholder={placeholder}/>

};

export default Input;