import "../Stylesheets/mystyle.css";

function CalculateScore() {

    const name = "Nikita";
    const school = "BNM Institute of Technology";
    const total = 500;
    const goal = 450;

    const average = total / 5;

    return (
        <div className="box">
            <h2>Student Score Calculator</h2>

            <p><strong>Name:</strong> {name}</p>
            <p><strong>School:</strong> {school}</p>
            <p><strong>Total Marks:</strong> {total}</p>
            <p><strong>Goal:</strong> {goal}</p>
            <p><strong>Average Score:</strong> {average}</p>
        </div>
    );
}

export default CalculateScore;