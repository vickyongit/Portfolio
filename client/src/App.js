import { Route, Routes, HashRouter, Redirect } from "react-router-dom";

import Main from "./components/Main";

const App = () => (
    <HashRouter>
        <Routes>
            <Route exact path="/" element={<Main />} />
        </Routes>
    </HashRouter>
);

export default App;
