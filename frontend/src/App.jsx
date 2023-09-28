import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login } from "./routes/Login";
import { Home } from "./routes/Home";
import { Header } from "./components/Header/Header";
import { About } from "./routes/About";
import { ListSectors } from "./routes/List/ListSectors";
import { ListUsers } from "./routes/List/ListUsers";
import { CreateTicket } from "./routes/Create/CreateTicket";
import { CreateSector } from "./routes/Create/CreateSector";
import { CreateStatus } from "./routes/Create/CreateStatus";
import { CreateEquipment } from "./routes/Create/CreateEquipment";
import { CreateUser } from "./routes/Create/CreateUser";
import { DetailTicket } from "./routes/Detail/DetailTicket";
import { DetailEquipment } from "./routes/Detail/DetailEquipment";
import { CreateEquipmentType } from "./routes/Create/CreateEquipmentType";
import { CreateTicketHistory } from "./routes/Create/CreateTicketHistory";
import { ListEquipments } from "./routes/List/ListEquipments";
import { ListEquipmentsType } from "./routes/List/ListEquipmentsType";
import { DetailUser } from "./routes/Detail/DetailUser";
import { DetailEquipmentType } from "./routes/Detail/DetailEquipmentType";
import { ListStatuses } from "./routes/List/ListStatuses";
import { DetailStatus } from "./routes/Detail/DetailStatus";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthenticationProvider } from "./provider/AuthenticationProvider";
import { UpdateSector } from "./routes/Update/UpdateSector";
import { UpdateStatus } from "./routes/Update/UpdateStatus";
import { UpdateEquipment } from "./routes/Update/UpdateEquipment";
import { UpdateEquipmentType } from "./routes/Update/UpdateEquipmentType";

function App() {
  return (
    <AuthenticationProvider>
      <div className="flex flex-col h-screen overflow-hidden">
        <ToastContainer />
        <BrowserRouter>
          <Routes>
            <Route path="" element={<Header />}>
              <Route path="" element={<Login />} />
              <Route path="/home" element={<Home />} />
              <Route path="/ticket/new" element={<CreateTicket />} />
              <Route path="/ticket/:id" element={<DetailTicket />} />
              <Route
                path="/ticket/ticketHistory/:id"
                element={<CreateTicketHistory />}
              />
              <Route path="/sector/new" element={<CreateSector />} />
              <Route path="/sector" element={<ListSectors />} />
              <Route path="/sector/update/:id" element={<UpdateSector />} />
              <Route path="/status/new" element={<CreateStatus />} />
              <Route path="/status/:id" element={<DetailStatus />} />
              <Route path="/status/update/:id" element={<UpdateStatus />} />
              <Route path="/status" element={<ListStatuses />} />
              <Route path="/equipment/new" element={<CreateEquipment />} />
              <Route path="/equipment/:id" element={<DetailEquipment />} />
              <Route
                path="/equipment/update/:id"
                element={<UpdateEquipment />}
              />
              <Route path="/equipment" element={<ListEquipments />} />
              <Route path="/user" element={<ListUsers />} />
              <Route path="/user/update/:id" element={<DetailUser />} />
              <Route path="/user/new" element={<CreateUser />} />
              <Route path="/equipment_type" element={<ListEquipmentsType />} />
              <Route
                path="/equipment_type/:id"
                element={<DetailEquipmentType />}
              />
              <Route
                path="/equipment_type/new"
                element={<CreateEquipmentType />}
              />
              <Route
                path="/equipment_type/update/:id"
                element={<UpdateEquipmentType />}
              />
              <Route path="/about" element={<About />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </AuthenticationProvider>
  );
}

export default App;
