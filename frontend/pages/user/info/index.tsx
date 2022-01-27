import { NextPage } from 'next';
import Seo from '@components/common/Seo';
import { useTranslate } from '@app/hooks/translate';
import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';

const Info: NextPage = () => {
  const { t } = useTranslate();

  const Wrapper = styled(Box)`
    border: 1px solid #e8eaec;
    border-radius: 4px;
    margin: 15px;
    padding: 30px;
    padding-top: 0;
  `;

  const Title = styled(Box)`
    font-weight: 400;
    font-size: 24px;
    height: 53px;
    line-height: 53px;
    border-bottom: 1px solid #e9e9e9;
    margin-top: 30px;
  `;

  const ItemWrapper = styled(Box)`
    height: 60px;
    line-height: 60px;
    margin-top: 10px;
    border-bottom: 1px solid #e9e9e9;
    overflow: hidden;
  `;

  const ItemTitle = styled(Box)`
    font-weight: 700;
    float: left;
    width: 200px;
  `;

  return (
    <>
      <Seo title={t('app.assets.title')} />
      <Wrapper>
        <Title>Account Information</Title>
        <ItemWrapper>
          <ItemTitle>UID</ItemTitle>
          <Box>17880611</Box>
        </ItemWrapper>
        <ItemWrapper>
          <ItemTitle>Nickname</ItemTitle>
          <Box>duyanhvn1999@gmail.com</Box>
        </ItemWrapper>
        <ItemWrapper>
          <ItemTitle>Login Password</ItemTitle>
          <Box>*********</Box>
        </ItemWrapper>
        <ItemWrapper>
          <ItemTitle>Identity Verification</ItemTitle>
          <Box>Unverified</Box>
        </ItemWrapper>
        <ItemWrapper>
          <ItemTitle>Trusted Devices Management</ItemTitle>
          <Box>You have 1 trusted devices logged in</Box>
        </ItemWrapper>
        <Title>Two-Factor Authentication</Title>
        <ItemWrapper>
          <ItemTitle>Email Authentication</ItemTitle>
          <Box>duyanhvn1999@gmail.com</Box>
        </ItemWrapper>
        <ItemWrapper>
          <ItemTitle>SMS Authentication</ItemTitle>
          <Box>Not Set</Box>
        </ItemWrapper>
        <ItemWrapper>
          <ItemTitle>Google Two Factor</ItemTitle>
          <Box>Not Set</Box>
        </ItemWrapper>
        <ItemWrapper>
          <ItemTitle>Identity Verification</ItemTitle>
          <Box>Unverified</Box>
        </ItemWrapper>
        <ItemWrapper>
          <ItemTitle>Trusted Devices Management</ItemTitle>
          <Box>You have 1 trusted devices logged in</Box>
        </ItemWrapper>
      </Wrapper>
    </>
  );
};

export default Info;
