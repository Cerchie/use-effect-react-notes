
import Timer from './Timer'
import Counter from './Counter'
import ProfileViewer from './ProfileViewer'


function App() {
  return (
    <div className="App">
      <Timer />
      <Counter />
      <ProfileViewer name="Matt"/>
      <ProfileViewer name="Cerchie"/>
    </div>
  );
}

export default App;
