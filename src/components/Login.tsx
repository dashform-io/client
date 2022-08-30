import { ReactElement } from "react";

const Login: React.FC = (): ReactElement => {
  return (
    <div>
      <input placeholder="Username" />
      <input placeholder="Password" />
      <button>Login</button>
    </div>
  );
};

export default Login;
