import styled from '@emotion/styled';
import { FC } from 'react';

const Button = styled.button`
  padding: 32px;
  background-color: hotpink;
  font-size: 24p;
  border-radius: 4px;
  color: black;
  font-weight: bold;
  &:hover {
    color: white;
  }
`;

const StyledEmotionButton: FC = () => {
  return <Button>This is my component.</Button>;
};

export default StyledEmotionButton;
