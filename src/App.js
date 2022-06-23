import './App.css';
import Menu from './menu'
import Result from './Results';

function App() {
  const obj= {
    title: "후보자 득표율",
    header: ["후보", "득표 결과"],
    items : [
      {id: 1, name: "김오돌", voteEarned: 10, voteRate: 45.5},
      {id: 2, name: "김이돌", voteEarned: 2, voteRate: 9.1},
      {id: 3, name: "김삼돌", voteEarned: 1, voteRate: 4.5},
      {id: 4, name: "김사돌", voteEarned: 3, voteRate: 13.6},
      {id: 5, name: "김오돌", voteEarned: 3, voteRate: 13.6},
      {id: 6, name: "김육돌", voteEarned: 2, voteRate: 9.1},
      {id: 7, name: "김칠돌", voteEarned: 1, voteRate: 4.5}
    ]
  };
  return (
    <div className="container">

      <Menu/>

      <div className="small_title">{obj.title}</div>

      <table className="do_vote">
        <thead><tr>
          <td className="printname">{obj.header[0]}</td>
          <td className="each_result_bar">{obj.header[1]}</td>
        </tr></thead>
      </table>

      {getCandidate(obj.items)}

    </div>
  );
}

const getCandidate = data => {
  let final = [];
  for (let i = 0; i < data.length; i++) {
    const eachdata = data[i];
    final.push(<Result id={eachdata.id} name={eachdata.name} voteEarned={eachdata.voteEarned} voteRate={eachdata.voteRate}/>);
  }
  return final;
}

// const items = [
//   {id: 1, name: "김오돌", voteEarned: 10, voteRate: 45.5},
//   {id: 2, name: "김이돌", voteEarned: 2, voteRate: 9.1},
//   {id: 3, name: "김삼돌", voteEarned: 1, voteRate: 4.5},
//   {id: 4, name: "김사돌", voteEarned: 3, voteRate: 13.6},
//   {id: 5, name: "김오돌", voteEarned: 3, voteRate: 13.6},
//   {id: 6, name: "김육돌", voteEarned: 2, voteRate: 9.1},
//   {id: 7, name: "김칠돌", voteEarned: 1, voteRate: 4.5}
// ];

export default App;
