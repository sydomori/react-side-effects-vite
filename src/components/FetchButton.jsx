// Step 1: Accept `fetchJoke` as a prop

const FetchButton = ({ fetchJoke }) => {
  
  const handleClick = () => {
    fetchJoke();
  };
  return (
    // Step 2: Add an onClick event that calls `fetchJoke`
    <button className="fetch-button" onClick={handleClick}>Get a New Joke</button>
  )
}

export default FetchButton
