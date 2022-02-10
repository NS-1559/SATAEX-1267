const walletList:any = [
    {
        API_KEY: 'ERgNZm0rkiUfDLQvFhvPTONOIkgoi0Np6sdcRlF2ahHpW4DJKvh4xQ8DkSHMOUSw',
        SECRET_KEY:'bZXxeroTxFuwS6AGp5y4KKGv0mxogjv0XivBciIbBPiwjvt6qtlhAPIYmQK7DVkB'
    },
    {
        API_KEY: 'XEDWPftyltMPwMNBmAYqnxBzv3vt8HjudcjD2W2GpE7ugNYOjh6UAXgHhxrtsiyY',
        SECRET_KEY:'KQMpoMzCGt6HL07FaZWa0G9TFa7hkM0yBFo2GMQSmdHROM3oKyAYffyojtegaeBK'
    },
    {
        API_KEY: 'TZsbbvzltUz8hpvNWN74dh0m3FUzPQxKfgfz0HSyIM13DUDAimZltPTqDmlAGjIa',
        SECRET_KEY:'pdRJoAnq8Wbf7DYSUzg3UVKqZLyg45GsQfrww26wHC1qtEfH28BAGjxYCd1NHnwC'
    },
    {
        API_KEY: '4hqhEGzUrZIiKesggrrmzsDaYJ3B91FclY49aPJivJEIEZgEqTEElBUocud9f4WE',
        SECRET_KEY:'ZyzcoON42XeXkr4gd9u6bbQy3AQtJTQPdArBHPvytHqp057lDXh87Dw0OsHCguW3'
    },
]



export const generateWalletKey = (index:number) =>{
    return walletList(index);
}