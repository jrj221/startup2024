import React from 'react';
import { useEffect, useState } from 'react';

// function LeaderboardMember({position, name, eliminationTime}) {
//     {/* eliminationTime represents Day at Time, like "Monday at 12:24pm" */}
//     return <div className="leaderboard_position">{position}. {name} | Eliminated target on {eliminationTime}</div>;
// } don't think this is being used anymore

export function Leaderboard() {
    const [leaderboard, setLeaderboard] = useState([])

    useEffect(() => {
        fetch('/api/leaderboard')
          .then((response) => response.json())
          .then((leaderboard) => setLeaderboard(leaderboard));
      }, []);

      const leaderboard_rows = [];
      if (leaderboard.length) { // triggers if the leaderboard isn't empty
        for (const [position, person] of leaderboard.entries()) {
            let podium;
            if (position == 0) {
                podium = 'goldenrod';
            }
            else if (position == 1) {
                podium = 'silver';
            }
            else if (position == 2) {
                podium = '#CD7F32';
            }
            else {
                podium = 'white';
            }
            leaderboard_rows.push(
                <tr key={position}>
                <td style={{ backgroundColor: podium }}>{position + 1}</td>
                <td style={{ backgroundColor: podium }}>{person.name.split('@')[0]}</td>
                <td style={{ backgroundColor: podium }}>{person.date.toLocaleDateString()}</td>
                </tr>
          );
        }
      } else { // leaderboard is empty
        leaderboard_rows.push(
          <tr key='0'>
            <td colSpan='4'>Be the first to eliminate your target!</td>
          </tr>
        );
      }

    return (
        <main>
            <h1>The Leaderboard</h1>
            <p className="comments">
                WebSocket data will be used here since I want the leaderboard to 
                be updated in realtime when changes are made to rankings. Perhaps a database
                is needed here as well to store the leaderboard content?
            </p>
            
            <table className='table leaderboard'>
                <thead className='table-dark'>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Eliminated target on</th>
                    </tr>
                </thead>
                <tbody>{leaderboard_rows}</tbody>
            </table>
        </main> 
    );
}