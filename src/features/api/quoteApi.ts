import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchQuote = createAsyncThunk(
    'quote/fetch',
    async () => {
        const response = await fetch('https://api.gameofthronesquotes.xyz/v1/random');
        const data = await response.json();
        return data.sentence;
    }
)

// export const fetchQuote = () => {
//     return (dispatch: AppDispatch) => {
//         dispatch(putQuote('Pending...'))
//         fetch('https://api.gameofthronesquotes.xyz/v1/random')
//             .then(response => response.json())
//             .then(data => dispatch(putQuote(data.sentence)))
//             .catch(e => dispatch(putQuote('Error getting quote')))
//     }
// }