import React from "react";
import "./Leaderboard.css"; // Import CSS
import bulb from "../../assets/bulb.png"
import Navbar from "@/components/Navbar/Navbar";

const salesData = [
  { rank: "1ST", name: "LAUREN WILLIAMS", score: 92, calls: 70, appts: 1, emails: 40, leads: 5, image: "https://via.placeholder.com/40" },
  { rank: "2ND", name: "JUAN COSTA", score: 88, calls: 73, appts: 1, emails: 34, leads: 5, image: "https://via.placeholder.com/40" },
  { rank: "3RD", name: "JO ARRINGTON", score: 86, calls: 78, appts: 2, emails: 29, leads: 4, image: "https://via.placeholder.com/40" },
  { rank: "4TH", name: "LARRY WEBB", score: 82, calls: 67, appts: 0, emails: 51, leads: 3, image: "https://via.placeholder.com/40" },
  { rank: "5TH", name: "LILLIAN MCDONALD", score: 76, calls: 59, appts: 0, emails: 22, leads: 5, image: "https://via.placeholder.com/40" },
];

const Leaderboard = () => {
  return (
    <div className="leaderboard ">
        <img src={bulb} alt="" className="background"/>
        <Navbar/>
         <div className="leaderboard-container ">
      <h1 className="title">Reports Leaderboard</h1>
      <div className="table-container">
        <table className="leaderboard-table">
          <thead>
            <tr>
              <th>Rank</th>
              <th>Name</th>
              <th>Activity Score</th>
              <th>Reports📝</th>
              <th>Gained Reward 🤝</th>
              <th>Approved 📩</th>
              <th> sucess📈</th>
            </tr>
          </thead>
          <tbody>
            {salesData.map((rep, index) => (
              <tr key={index}>
                <td>{rep.rank}</td>
                <td className="name-cell">
                  <img src={rep.image} alt={rep.name} className="avatar" />
                  {rep.name}
                </td>
                <td>
                  <div className="progress-bar">
                    <div className="progress-fill" style={{ width: `${rep.score}%` }}></div>
                  </div>
                  <span className="score-text">{rep.score}%</span>
                </td>
                <td>{rep.calls}</td>
                <td>{rep.appts}</td>
                <td>{rep.emails}</td>
                <td>{rep.leads}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    </div>
   
  );
};

export default Leaderboard;
