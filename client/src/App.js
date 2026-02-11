import { Route, Routes, HashRouter, Navigate} from "react-router-dom";

import Navbar from "../../client/src/components/Navbar";
import NotFound from '../../client/src/components/NotFound'

const App = () => (
    <HashRouter>
        <Routes>
            <Route exact path="/" element={<Navbar />} />
            <Route exact path="/not-found" element={<NotFound />} />
            <Route path="*" element={<Navigate to="/not-found" replace />} />
        </Routes>
    </HashRouter>
);

export default App;
