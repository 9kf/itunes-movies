import { TouchableOpacity } from "react-native";
import styled from "styled-components";

interface ICardProps {
  children: React.ReactNode;
  onPress?: () => void;
}

const StyledCardView = styled(TouchableOpacity)`
  background-color: #000;
  padding: 12px;
  elevation: 8;
  border-radius: 8px;
  overflow: hidden;
`;

export function Card({ children, onPress }: ICardProps) {
  return (
    <StyledCardView
      onPress={(e) => {
        e.preventDefault();
        onPress?.();
      }}
    >
      {children}
    </StyledCardView>
  );
}
