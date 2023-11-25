import { Text, TextInput, View } from "react-native";
import styled from "styled-components";

export const ScreenView = styled(View)`
  flex: 1;
  background-color: #f4f4f4;
  padding: 12px;
`;

export const AlignedView = styled(View)<{ horizontal?: boolean }>`
  display: flex;
  flex-direction: ${(props) => (props.horizontal ? "row" : "column")};
  align-items: center;
  gap: 8px;
`;

export const CenterView = styled(View)`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledText = styled(Text)<{
  variant?: "paragraph" | "sub-header" | "title" | "label";
}>`
  color: #f4f4f4;
  max-width: 220px;
  ${(props) =>
    props.variant === "title" &&
    `
  font-size: 20px;
  font-weight: bold;
`}

  ${(props) =>
    props.variant === "sub-header" &&
    `
    font-size: 16px;
    font-weight: 500;
`}

${(props) =>
    props.variant === "paragraph" &&
    `
  font-size: 16px;
  font-weight: 400;
  color: #000;
  max-width: 100%
`}
`;

export const StyledTextInput = styled(TextInput)`
  border-bottom-width: 1px;
  border-color: #000;
`;
