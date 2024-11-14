import React from 'react';

function LeaderboardMember({position, name, eliminationTime}) {
    {/* eliminationTime represents Day at Time, like "Monday at 12:24pm" */}
    return <div className="leaderboard_position">{position}. {name} | Eliminated target on {eliminationTime}</div>;
}

export function Leaderboard() {
    return (
        <main>
            <h1>The Leaderboard</h1>
            {/* Use useState here to prep for leaderboard receiving props like name, timeEliminated */}
            <p className="comments">
                WebSocket data will be used here since I want the leaderboard to 
                be updated in realtime when changes are made to rankings. Perhaps a database
                is needed here as well to store the leaderboard content?
            </p>
            
            {/* Could be cool if the leaderboard was formatted like a table the way Simon has it */}
            <div className="leaderboard">
                <LeaderboardMember position="1" name="Oliver Mitchell" eliminationTime="Monday at 3:45pm" />
                <LeaderboardMember position="2" name="Oliver Mitchell" eliminationTime="Monday at 3:45pm" />
                <LeaderboardMember position="3" name="Oliver Mitchell" eliminationTime="Monday at 3:45pm" />
                <LeaderboardMember position="4" name="Oliver Mitchell" eliminationTime="Monday at 3:45pm" />
                <LeaderboardMember position="5" name="Oliver Mitchell" eliminationTime="Monday at 3:45pm" />
                <LeaderboardMember position="1" name="Oliver Mitchell" eliminationTime="Monday at 3:45pm" />
                <LeaderboardMember position="2" name="Oliver Mitchell" eliminationTime="Monday at 3:45pm" />
                <LeaderboardMember position="3" name="Oliver Mitchell" eliminationTime="Monday at 3:45pm" />
                <LeaderboardMember position="4" name="Oliver Mitchell" eliminationTime="Monday at 3:45pm" />
                <LeaderboardMember position="5" name="Oliver Mitchell" eliminationTime="Monday at 3:45pm" />
                <LeaderboardMember position="1" name="Oliver Mitchell" eliminationTime="Monday at 3:45pm" />
                <LeaderboardMember position="2" name="Oliver Mitchell" eliminationTime="Monday at 3:45pm" />
                <LeaderboardMember position="3" name="Oliver Mitchell" eliminationTime="Monday at 3:45pm" />
                <LeaderboardMember position="4" name="Oliver Mitchell" eliminationTime="Monday at 3:45pm" />
                <LeaderboardMember position="5" name="Oliver Mitchell" eliminationTime="Monday at 3:45pm" />
            </div>
        </main> 
    );
}