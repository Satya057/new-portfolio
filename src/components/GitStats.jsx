import React from 'react';

const GitStats = () => {
  return (
    <div style={{ margin: 'auto', maxWidth: '1100px', width: '100%', padding: '0 20px' }}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px' }}>
        <div style={{ fontSize: '42px', textAlign: 'center', fontWeight: '600', marginTop: '20px', color: '#333' }}>
          Github Stats
        </div>
        
        <div style={{ width: '100%', display: 'flex', justifyContent: 'center', gap: '40px', flexWrap: 'wrap' }}>
          <div style={{ maxWidth: '400px', width: '100%', margin: 'auto' }}>
            <img
              id="github-top-langs"
              src="https://github-readme-stats.vercel.app/api/top-langs/?username=Satya057&langs_count=8&theme=radical"
              alt="Satya's GitHub stats"
              style={{ maxWidth: '100%' }}
            />
          </div>
          <div style={{ maxWidth: '400px', width: '100%', margin: 'auto' }}>
            <img
              id="github-stats-card"
              src="https://github-readme-stats.vercel.app/api?username=Satya057&theme=radical"
              alt="Satya's GitHub stats"
              style={{ maxWidth: '100%' }}
            />
          </div>
          <div style={{ maxWidth: '400px', width: '100%', margin: 'auto' }}>
            <img
              id="github-streak-stats"
              src="https://github-readme-streak-stats.herokuapp.com?user=Satya057&theme=radical"
              alt="GitHub Streak"
              style={{ maxWidth: '100%' }}
            />
          </div>
        </div>
        
        <div style={{ maxWidth: '400px', width: '100%', margin: 'auto' }}>
          <img
            className="react-activity-calendar"
            src="https://ghchart.rshah.org/FE428E/Satya057"
            alt="Shubham's Github Contribution"
            style={{ maxWidth: '100%', height: '150px' }}
          />
        </div>
      </div>
    </div>
  );
};

export default GitStats;
