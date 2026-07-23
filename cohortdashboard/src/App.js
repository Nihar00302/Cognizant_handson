import CohortDetails from "./Components/CohortDetails";

function App() {
  return (
    <div>
      <h1>Cognizant Academy Dashboard</h1>

      <CohortDetails
        name="React Fundamentals"
        status="ongoing"
        coach="John"
        trainer="Alice"
      />

      <CohortDetails
        name="Java FSE"
        status="completed"
        coach="David"
        trainer="Bob"
      />

      <CohortDetails
        name="Spring Boot"
        status="ongoing"
        coach="Sophia"
        trainer="Emma"
      />

      <CohortDetails
        name="Microservices"
        status="completed"
        coach="Chris"
        trainer="Daniel"
      />
    </div>
  );
}

export default App;