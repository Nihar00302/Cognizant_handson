function ListofPlayers() {

    const players = [
        { name: "Virat Kohli", score: 95 },
        { name: "Rohit Sharma", score: 85 },
        { name: "Shubman Gill", score: 72 },
        { name: "KL Rahul", score: 68 },
        { name: "Hardik Pandya", score: 80 },
        { name: "Ravindra Jadeja", score: 65 },
        { name: "R Ashwin", score: 75 },
        { name: "Mohammed Shami", score: 60 },
        { name: "Jasprit Bumrah", score: 55 },
        { name: "Mohammed Siraj", score: 78 },
        { name: "Ishan Kishan", score: 90 }
    ];

    const allPlayers = players.map((player, index) => (
        <li key={index}>
            {player.name} - {player.score}
        </li>
    ));

    const below70 = players
        .filter(player => player.score < 70)
        .map((player, index) => (
            <li key={index}>
                {player.name} - {player.score}
            </li>
        ));

    return (
        <div>
            <h2>List of Players</h2>

            <h3>All Players</h3>
            <ul>
                {allPlayers}
            </ul>

            <h3>Players with Score Below 70</h3>
            <ul>
                {below70}
            </ul>
        </div>
    );
}

export default ListofPlayers;