const URL = 'https://api.coincap.io/v2/assets';
// const API_KEY = '314f8cd13aebb06fc0823fdd3c901b76';

export const fetchCoins = async () => {
        const response = await fetch(`${URL}`);

        if (!response.ok) {
            throw  new Error(`Error fetching data: ${response.status}`);
        }
        const data = await response.json();
        return data;
};

