import { useContext } from "react";
import UserContext from './UserContext';


const HomeScreen = () => {

  const { user } = useContext(UserContext);

  return (
    <div>
      <h1> Home Screen </h1>
      <hr />

      <pre>
        { JSON.stringify(user, null, 4) } 
      </pre>
    </div>
  )
}

export default HomeScreen;
