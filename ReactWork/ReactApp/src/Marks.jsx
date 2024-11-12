import "./Marks.css";

const Marks = ({m1,m2,m3}) => {
  return (
    <div>
        <h1 id="sem">Marksheet</h1>
        <h2>Semester 1 : {m1}</h2>
        <h2>Semester 2 : {m2}</h2>
        <h2>Semester 3 : {m3}</h2>
    </div>
  )
}

export default Marks