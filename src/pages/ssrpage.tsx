import { Button, Typography } from '@mui/material';
import { GetServerSideProps } from 'next';
import { FC } from 'react';
import StyledEmotionButton from '../components/StyledEmotionButton';

const SSRPage: FC = () => {
  return (
    <>
      <Typography variant="h4">Welcome to the server</Typography>
      <Button type="button" variant="contained" color="primary">
        Server Rendered Button
      </Button>
      <StyledEmotionButton />
    </>
  );
};

export const getServerSideProps = (ctx: GetServerSideProps) => {
  return {
    props: {},
  };
};

export default SSRPage;
