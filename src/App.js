import AssesmentDesktop from './Components/AssesmentDesktop';
import AssesmentMobile from './Components/AssesmentMobile';
import NewAssesment from './Components/NewAssesment';
import Sidebar from './Components/Sidebar';
import SubSection from './Components/SubSection';
import { useMediaQuery } from 'react-responsive';

function App() {
  const isSmallScreen = useMediaQuery({ maxWidth: 375 });
  return (
    <div className="App">
      {/* <NewAssesment /> */}
      {/* <AssesmentDesktop /> */}

      {isSmallScreen ? <AssesmentMobile /> : <AssesmentDesktop />}
    </div>
  );
}


export default App;
