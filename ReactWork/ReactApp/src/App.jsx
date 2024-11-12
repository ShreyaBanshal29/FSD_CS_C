import "./App.css";

const App = ({name,email,phone}) => {
  return (
    <div id="disp">
      <h1>Name : {name}</h1>
      <h2>Email Id : {email}</h2>
      <h2>Number : {phone}</h2>
    </div>
  )
}

export default App