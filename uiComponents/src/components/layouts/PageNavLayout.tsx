import styled from "styled-components";
import { colors } from "../../common";

const PageNavLayout = styled.div`
  display: flex;
  flex-direction: column;
  width: 200px;
  height: 100vh;
  overflow-y: auto;
  border-right: 1px solid ${colors.neonSilver};
  padding: 1rem;
  position: fixed;
`;

export default PageNavLayout;
