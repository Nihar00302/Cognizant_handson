function App() {

  const office = {
    name: "Tech Park Office",
    rent: 55000,
    address: "MG Road, Bengaluru"
  };

  const officeList = [
    {
      name: "Tech Park Office",
      rent: 55000,
      address: "MG Road, Bengaluru"
    },
    {
      name: "Business Hub",
      rent: 70000,
      address: "Electronic City, Bengaluru"
    },
    {
      name: "Corporate Space",
      rent: 45000,
      address: "Whitefield, Bengaluru"
    }
  ];

  return (
    <div>

      <h1>Office Space Rental App</h1>

      <img
        src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=600"
        alt="Office Space"
        width="500"
      />

      <h2>Single Office Details</h2>

      <p><strong>Name:</strong> {office.name}</p>

      <p>
        <strong>Rent:</strong>
        <span
          style={{
            color: office.rent < 60000 ? "red" : "green"
          }}
        >
          {" "}₹{office.rent}
        </span>
      </p>

      <p><strong>Address:</strong> {office.address}</p>

      <hr />

      <h2>Office Space List</h2>

      {
        officeList.map((item, index) => (

          <div key={index}>

            <h3>{item.name}</h3>

            <p>
              <strong>Rent:</strong>
              <span
                style={{
                  color: item.rent < 60000 ? "red" : "green"
                }}
              >
                {" "}₹{item.rent}
              </span>
            </p>

            <p><strong>Address:</strong> {item.address}</p>

            <hr />

          </div>

        ))
      }

    </div>
  );
}

export default App;