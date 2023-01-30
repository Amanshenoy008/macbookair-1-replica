import Details from "./components/details";
import Files from "./components/files";
import Appointments from "./components/appointments";
import Sidenav from "./components/sidenav";

function App() {
  return (
    <div className="  font-sans flex flex-row gap-6">
      <Sidenav />
      <div className="flex flex-col gap-3 p-4 ">
        <Details />
        <div className="mr-4 flex flex-row gap-x-36 ">
          <div className="self-end ">
        <Files />
        </div>
        <div className="self-start " >
        <Appointments />
        </div>
        </div>
        
      </div>
     
    </div>
  );
}

export default App;
