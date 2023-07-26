import AssesmentDesktop from './Components/AssesmentDesktop';
import AssesmentMobile from './Components/AssesmentMobile';
import { useMediaQuery } from 'react-responsive';

function App() {
  const isSmallScreen = useMediaQuery({ maxWidth: 768 });
  return (
    <div className="App">
      {isSmallScreen ? <AssesmentMobile /> : <AssesmentDesktop />}
    </div>
  );
}


export default App;
