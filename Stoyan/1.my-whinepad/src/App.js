import Discovery from "./components/Discovery";

const isDiscovery = window.location.pathname.replace(/\//g, '') === 'discovery';

function App() {
  if (isDiscovery) {
    return <Discovery />;
  }
  return (
    <div>
      Hey App!
    </div>
  )
}

export default App;