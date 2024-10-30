import React from 'react';

export function Leaderboard() {
    return (
        <main>
            <h1>The Leaderboard</h1>
            <p className="comments">
                WebSocket data will be used here since I want the leaderboard to 
                be updated in realtime when changes are made to rankings. Perhaps a database
                is needed here as well to store the leaderboard content?
            </p>
            
            {/* Could be cool if the leaderboard was formatted like a table the way Simon has it */}
            <div className="leaderboard">
                <div className="leaderboard_position">1. Oliver Mitchell | Eliminated target on Monday at 3:45pm</div>
                <div className="leaderboard_position">2. Sandy Cowell | Eliminated target on Monday at 4:45pm</div>
                <div className="leaderboard_position">3. Troy Baker | Eliminated target on Monday at 9:57pm</div>
                <div className="leaderboard_position">4. Cathy Johnson | Eliminated target on Tuesday at 2:05pm</div>
                <div className="leaderboard_position">5. Jorge Olivier | Eliminated target on Tuesday at 1:32pm</div>
                <div className="leaderboard_position">6. Desmond Smith | Eliminated target on Tuesday at 5:45pm</div>
                <div className="leaderboard_position">7. Oliver Mitchell | Eliminated target on Monday at 3:45pm</div>
                <div className="leaderboard_position">8. Sandy Cowell | Eliminated target on Monday at 4:45pm</div>
                <div className="leaderboard_position">9. Troy Baker | Eliminated target on Monday at 9:57pm</div>
                <div className="leaderboard_position">10. Cathy Johnson | Eliminated target on Tuesday at 2:05pm</div>
                <div className="leaderboard_position">11. Jorge Olivier | Eliminated target on Tuesday at 1:32pm</div>
                <div className="leaderboard_position">12. Desmond Smith | Eliminated target on Tuesday at 5:45pm</div>
                <div className="leaderboard_position">13. Oliver Mitchell | Eliminated target on Monday at 3:45pm</div>
                <div className="leaderboard_position">14. Sandy Cowell | Eliminated target on Monday at 4:45pm</div>
                <div className="leaderboard_position">15. Troy Baker | Eliminated target on Monday at 9:57pm</div>
                <div className="leaderboard_position">16. Cathy Johnson | Eliminated target on Tuesday at 2:05pm</div>
                <div className="leaderboard_position">17. Jorge Olivier | Eliminated target on Tuesday at 1:32pm</div>
                <div className="leaderboard_position">18. Desmond Smith | Eliminated target on Tuesday at 5:45pm</div>
                <div className="leaderboard_position">19. Jorge Olivier | Eliminated target on Tuesday at 1:32pm</div>
                <div className="leaderboard_position">20. Desmond Smith | Eliminated target on Tuesday at 5:45pm</div>
            </div>
        </main> 
    );
}