import styled from "styled-components";
import { secondaryBackgroundColor } from "../../components/Theme";

const ListCard = styled.div`
  width: 268px;
  background: ${secondaryBackgroundColor};
  border-radius: 5px;
  box-sizing: border-box;
  font-size: 14px;
  margin: 8px;
  display: flex;
  flex-direction: column;
  max-height: 100%;
`;

export default ListCard;
