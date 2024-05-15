import { Container } from "@mui/material";
import { useParams } from "react-router-dom";
const FoodPage = () => {
  const param = useParams();

  return (
    <Container>
      <h1 style={{ color: "red" }}>{param.id}</h1>
      <h1>askldjalksd</h1>
    </Container>
  );
};

export default FoodPage;
