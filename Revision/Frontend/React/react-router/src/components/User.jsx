import { useParams } from "react-router-dom";

function User() {
    const params = useParams()

  return (
    <>
      <h1>HELLO, ReactJS User '{params.username}'</h1>
    </>
  );
}

export default User;
