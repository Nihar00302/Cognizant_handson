function IndianPlayers() {

    const team = [
        "Virat Kohli",
        "Rohit Sharma",
        "Shubman Gill",
        "KL Rahul",
        "Hardik Pandya",
        "Ravindra Jadeja"
    ];

    // Destructuring
    const [player1, player2, player3, player4, player5, player6] = team;

    const oddTeam = [player1, player3, player5];
    const evenTeam = [player2, player4, player6];

    // Arrays to merge
    const T20Players = [
        "Virat Kohli",
        "Rohit Sharma",
        "Hardik Pandya"
    ];

    const RanjiPlayers = [
        "Mayank Agarwal",
        "Cheteshwar Pujara",
        "Hanuma Vihari"
    ];

    // Merge using Spread Operator
    const mergedPlayers = [...T20Players, ...RanjiPlayers];

    return (
        <div>

            <h2>Odd Team Players</h2>
            <ul>
                {oddTeam.map((player, index) => (
                    <li key={index}>{player}</li>
                ))}
            </ul>

            <h2>Even Team Players</h2>
            <ul>
                {evenTeam.map((player, index) => (
                    <li key={index}>{player}</li>
                ))}
            </ul>

            <h2>Merged Players</h2>
            <ul>
                {mergedPlayers.map((player, index) => (
                    <li key={index}>{player}</li>
                ))}
            </ul>

        </div>
    );
}

export default IndianPlayers;