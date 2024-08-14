import Container from "./components/common/layout/Container";
import Navbar from "./components/navbar/Navbar";
import TldrawComponent from "./components/TldrawComponent";

export default function App() {
  return (
    <Container>
      <Navbar />
      <TldrawComponent />
    </Container>
  );
}
