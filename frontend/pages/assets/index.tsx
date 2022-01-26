import { NextPage } from 'next';
import Seo from '@components/common/Seo';
import { useTranslate } from '@app/hooks/translate';
import { Box, Button } from '@mui/material';
import Image from 'next/image';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.gray,
    color: theme.palette.common.gray,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
    color: theme.palette.common.black,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  backgroundColor: theme.palette.common.white,
}));

function createData(
  name: string,
  calories: number,
  fat: number,
  carbs: number,
  protein: number,
) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

const top100Films = [
  { title: 'The Shawshank Redemption', year: 1994 },
  { title: 'The Godfather', year: 1972 },
  { title: 'The Godfather: Part II', year: 1974 },
  { title: 'The Dark Knight', year: 2008 },
  { title: '12 Angry Men', year: 1957 },
  { title: "Schindler's List", year: 1993 },
  { title: 'Pulp Fiction', year: 1994 },
  {
    title: 'The Lord of the Rings: The Return of the King',
    year: 2003,
  },
  { title: 'The Good, the Bad and the Ugly', year: 1966 },
  { title: 'Fight Club', year: 1999 },
  {
    title: 'The Lord of the Rings: The Fellowship of the Ring',
    year: 2001,
  },
  {
    title: 'Star Wars: Episode V - The Empire Strikes Back',
    year: 1980,
  },
  { title: 'Forrest Gump', year: 1994 },
  { title: 'Inception', year: 2010 },
  {
    title: 'The Lord of the Rings: The Two Towers',
    year: 2002,
  },
  { title: "One Flew Over the Cuckoo's Nest", year: 1975 },
  { title: 'Goodfellas', year: 1990 },
  { title: 'The Matrix', year: 1999 },
  { title: 'Seven Samurai', year: 1954 },
  {
    title: 'Star Wars: Episode IV - A New Hope',
    year: 1977,
  },
  { title: 'City of God', year: 2002 },
  { title: 'Se7en', year: 1995 },
  { title: 'The Silence of the Lambs', year: 1991 },
  { title: "It's a Wonderful Life", year: 1946 },
  { title: 'Life Is Beautiful', year: 1997 },
  { title: 'The Usual Suspects', year: 1995 },
  { title: 'Léon: The Professional', year: 1994 },
  { title: 'Spirited Away', year: 2001 },
  { title: 'Saving Private Ryan', year: 1998 },
  { title: 'Once Upon a Time in the West', year: 1968 },
  { title: 'American History X', year: 1998 },
  { title: 'Interstellar', year: 2014 },
  { title: 'Casablanca', year: 1942 },
  { title: 'City Lights', year: 1931 },
  { title: 'Psycho', year: 1960 },
  { title: 'The Green Mile', year: 1999 },
  { title: 'The Intouchables', year: 2011 },
  { title: 'Modern Times', year: 1936 },
  { title: 'Raiders of the Lost Ark', year: 1981 },
  { title: 'Rear Window', year: 1954 },
  { title: 'The Pianist', year: 2002 },
  { title: 'The Departed', year: 2006 },
  { title: 'Terminator 2: Judgment Day', year: 1991 },
  { title: 'Back to the Future', year: 1985 },
  { title: 'Whiplash', year: 2014 },
  { title: 'Gladiator', year: 2000 },
  { title: 'Memento', year: 2000 },
  { title: 'The Prestige', year: 2006 },
  { title: 'The Lion King', year: 1994 },
  { title: 'Apocalypse Now', year: 1979 },
  { title: 'Alien', year: 1979 },
  { title: 'Sunset Boulevard', year: 1950 },
  {
    title:
      'Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb',
    year: 1964,
  },
  { title: 'The Great Dictator', year: 1940 },
  { title: 'Cinema Paradiso', year: 1988 },
  { title: 'The Lives of Others', year: 2006 },
  { title: 'Grave of the Fireflies', year: 1988 },
  { title: 'Paths of Glory', year: 1957 },
  { title: 'Django Unchained', year: 2012 },
  { title: 'The Shining', year: 1980 },
  { title: 'WALL·E', year: 2008 },
  { title: 'American Beauty', year: 1999 },
  { title: 'The Dark Knight Rises', year: 2012 },
  { title: 'Princess Mononoke', year: 1997 },
  { title: 'Aliens', year: 1986 },
  { title: 'Oldboy', year: 2003 },
  { title: 'Once Upon a Time in America', year: 1984 },
  { title: 'Witness for the Prosecution', year: 1957 },
  { title: 'Das Boot', year: 1981 },
  { title: 'Citizen Kane', year: 1941 },
  { title: 'North by Northwest', year: 1959 },
  { title: 'Vertigo', year: 1958 },
  {
    title: 'Star Wars: Episode VI - Return of the Jedi',
    year: 1983,
  },
  { title: 'Reservoir Dogs', year: 1992 },
  { title: 'Braveheart', year: 1995 },
  { title: 'M', year: 1931 },
  { title: 'Requiem for a Dream', year: 2000 },
  { title: 'Amélie', year: 2001 },
  { title: 'A Clockwork Orange', year: 1971 },
  { title: 'Like Stars on Earth', year: 2007 },
  { title: 'Taxi Driver', year: 1976 },
  { title: 'Lawrence of Arabia', year: 1962 },
  { title: 'Double Indemnity', year: 1944 },
  {
    title: 'Eternal Sunshine of the Spotless Mind',
    year: 2004,
  },
  { title: 'Amadeus', year: 1984 },
  { title: 'To Kill a Mockingbird', year: 1962 },
  { title: 'Toy Story 3', year: 2010 },
  { title: 'Logan', year: 2017 },
  { title: 'Full Metal Jacket', year: 1987 },
  { title: 'Dangal', year: 2016 },
  { title: 'The Sting', year: 1973 },
  { title: '2001: A Space Odyssey', year: 1968 },
  { title: "Singin' in the Rain", year: 1952 },
  { title: 'Toy Story', year: 1995 },
  { title: 'Bicycle Thieves', year: 1948 },
  { title: 'The Kid', year: 1921 },
  { title: 'Inglourious Basterds', year: 2009 },
  { title: 'Snatch', year: 2000 },
  { title: '3 Idiots', year: 2009 },
  { title: 'Monty Python and the Holy Grail', year: 1975 },
];

const Assets: NextPage = () => {
  const { t } = useTranslate();

  const options = top100Films.map((option) => {
    const firstLetter = option.title[0].toUpperCase();
    return {
      firstLetter: /[0-9]/.test(firstLetter) ? '0-9' : firstLetter,
      ...option,
    };
  });

  return (
    <>
      <Seo title={t('app.assets.title')} />
      <Box
        sx={{
          width: '100%',
          display: 'flex',
        }}
      >
        <Box sx={{ width: '430px' }}>
          <Box sx={{ padding: 5 }}>
            <Box sx={{ fontSize: 20, fontWeight: 600, marginBottom: 2 }}>
              Total Equity
            </Box>
            <Box
              sx={{
                fontSize: 40,
                fontWeight: 600,
                marginBottom: 2,
                display: 'flex',
                alignItems: 'flex-end',
              }}
            >
              0.00000000
              <Box sx={{ fontSize: 14, marginLeft: 1, marginBottom: 2 }}>
                BTC
              </Box>
            </Box>
            <Box
              sx={{
                color: 'rgba(0, 0, 0, 0.4)',
                fontSize: 14,
                marginBottom: 2,
              }}
            >
              ≈ 0.00 USD
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
              <Button variant="contained" size="small">
                Deposit
              </Button>
              <Button variant="outlined" size="small">
                Withdraw
              </Button>
              <Button variant="outlined" size="small">
                Transfer
              </Button>
            </Box>
          </Box>
          <Box sx={{ width: '100%' }}>
            <Box
              sx={{
                width: '100%',
                backgroundColor: '#f7f7f7',
                padding: 3,
                display: 'flex',
                fontWeight: 600,
                cursor: 'pointer',
              }}
            >
              <Box sx={{ marginRight: 2 }}>
                <Image
                  src="/images/assets/spot.svg"
                  alt=""
                  width={17}
                  height={17}
                />
              </Box>
              Spot Acount
            </Box>
            <Box
              sx={{
                width: '100%',
                padding: 3,
                display: 'flex',
                cursor: 'pointer',
                transition: '0.5s',
                '&:hover': { backgroundColor: '#f7f7f7' },
              }}
            >
              <Box sx={{ marginRight: 2 }}>
                <Image
                  src="/images/assets/order.png"
                  alt=""
                  width={20}
                  height={20}
                />
              </Box>
              Order
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            width: '100%',
            backgroundColor: '#f7f7f7',
            padding: 5,
            paddingRight: 3,
            paddingLeft: 3,
          }}
        >
          <Box
            sx={{
              padding: 3,
              width: 450,
              backgroundImage: 'linear-gradient(90deg, #ffcc6f, #ffb11a)',
              borderRadius: 3,
            }}
          >
            <Box sx={{ fontSize: 20, fontWeight: 600, marginBottom: 2 }}>
              Spot Account
            </Box>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                width: '100%',
              }}
            >
              <Box>
                <Box
                  sx={{
                    color: 'rgba(0, 0, 0, 0.4)',
                    fontSize: 14,
                  }}
                >
                  Total Equity
                </Box>
                <Box
                  sx={{
                    fontSize: 25,
                    fontWeight: 600,
                    display: 'flex',
                    alignItems: 'flex-end',
                  }}
                >
                  0.00000000
                  <Box sx={{ fontSize: 14, marginLeft: 1, marginBottom: 1 }}>
                    BTC
                  </Box>
                </Box>
                <Box
                  sx={{
                    color: 'rgba(0, 0, 0, 0.4)',
                    fontSize: 14,
                  }}
                >
                  ≈ 0.00 USD
                </Box>
              </Box>
              <Box>
                <Box
                  sx={{
                    color: 'rgba(0, 0, 0, 0.4)',
                    fontSize: 14,
                  }}
                >
                  Available Balance
                </Box>
                <Box
                  sx={{
                    fontSize: 25,
                    fontWeight: 600,
                    display: 'flex',
                    alignItems: 'flex-end',
                  }}
                >
                  0.00000000
                  <Box sx={{ fontSize: 14, marginLeft: 1, marginBottom: 1 }}>
                    BTC
                  </Box>
                </Box>
                <Box
                  sx={{
                    color: 'rgba(0, 0, 0, 0.4)',
                    fontSize: 14,
                  }}
                >
                  ≈ 0.00 USD
                </Box>
              </Box>
            </Box>
          </Box>
          <Box
            sx={{
              // height: '100vh',
              backgroundColor: '#fff',
              marginTop: 5,
              borderRadius: 2,
            }}
          >
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: 3,
              }}
            >
              <Autocomplete
                id="grouped-demo"
                options={options.sort(
                  (a, b) => -b.firstLetter.localeCompare(a.firstLetter),
                )}
                groupBy={(option) => option.firstLetter}
                getOptionLabel={(option) => option.title}
                sx={{ width: 300 }}
                renderInput={(params) => (
                  <TextField {...params} label="Search" />
                )}
              />
              <Button variant="contained" size="small">
                Trade spot now
              </Button>
            </Box>
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 700 }} aria-label="customized table">
                <TableHead>
                  <TableRow>
                    <StyledTableCell>Coin</StyledTableCell>
                    <StyledTableCell>Wallet Balance</StyledTableCell>
                    <StyledTableCell>Available Balance</StyledTableCell>
                    <StyledTableCell>Reserved for Orders</StyledTableCell>
                    <StyledTableCell>Equivalent</StyledTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((row) => (
                    <StyledTableRow
                      key={row.name}
                      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                      <StyledTableCell component="th" scope="row">
                        {row.name}
                      </StyledTableCell>
                      <StyledTableCell>{row.calories}</StyledTableCell>
                      <StyledTableCell>{row.fat}</StyledTableCell>
                      <StyledTableCell>{row.carbs}</StyledTableCell>
                      <StyledTableCell>{row.protein}</StyledTableCell>
                    </StyledTableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Assets;
