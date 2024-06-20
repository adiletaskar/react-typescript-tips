import { Link } from "react-router-dom";

const MainPage: React.FC = () => {
  return (
    <div>
      <h1>Main Page</h1>
      <br />
      pages:
      <br />
      <br />
      <Link to="/users">users</Link>
      <br />
      <Link to="/todos">todos</Link>
    </div>
  );
};

export default MainPage;
