import React, { useEffect, useState } from 'react'

const Dashboard = () => {
  const [data , setData] = useState("");
  const username = "ShreyaBanshal29";
  
  useEffect(() => {
    const fetchData = async () => {
        const response = await fetch(`https://api.github.com/users/${username}`);
        const data = await response.json();
        setData(data);
    };
    fetchData();
  }
);
return (
  <div className="container my-5">
    <h1 className="text-center">GitHub Profile</h1>
    
      <div className="card mx-auto" style={{ width: "18rem" }}>
        <img src={data.avatar_url} className="card-img-top" alt="Profile" />
        <div className="card-body">
          <h5 className="card-title">{data.name}</h5>
          <p className="card-text">@{data.login}</p>
          <p className="card-text">{data.bio}</p>
          <a
            href={data.html_url}
            className="btn btn-primary"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Profile
          </a>
        </div>
      </div>
    
  </div>
);
}

export default Dashboard