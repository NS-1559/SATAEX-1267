import { useAppSelector } from '@app/hooks/redux';
import { useTranslate } from '@app/hooks/translate';
import { Coin } from '@models/Coin';
import {
  Box,
  Button,
  Container,
  InputAdornment,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { formatChartUrl } from '@utils/chart';
import {
  formatNumberWithSuffix,
  formatPrice,
  formatPriceChange,
} from '@utils/price';
import Image from 'next/image';
import { ChangeEvent, FC, useMemo, useState } from 'react';
import { Search } from 'react-feather';

const P2pMain: FC = () => {
  const { t } = useTranslate();
  const theme = useTheme();
  const tokens = useAppSelector((state) => {
    return state.common.coins.data;
  });
  const topTokens = tokens.slice(0, 50);
  const [keyword, setKeyword] = useState('');

  const displayTokens = useMemo(() => {
    if (keyword)
      return tokens.filter(
        (item: Coin) =>
          item.name.toLowerCase().includes(keyword) ||
          item.symbol.toLowerCase().includes(keyword),
      );
    return topTokens;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [keyword, topTokens]);

  const onKeywordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.target.value.toLowerCase());
  };

  return <Box sx={{ width: '100%', py: 8 }}>P2P</Box>;
};

export default P2pMain;
