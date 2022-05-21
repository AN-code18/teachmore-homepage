import "./App.css";
import Home from './pages/Home';
import Finalquiz from "./pages/Finalquiz";
import Quiz from "./pages/Quiz";
import Quizpage from "./pages/Quizpage";
import { BrowserRouter, Route } from 'react-router-dom';
function App() {
  return (
    <>
      <BrowserRouter>
      <Route path='/home' exact component={Home} />
        <Route path="/quiz" exact component={Quiz} />
        <Route path="/quizpage" exact component={Quizpage} />
        <Route path="/finalquiz" exact component={Finalquiz} />
      </BrowserRouter>
    </>
  );
}

export default App;
