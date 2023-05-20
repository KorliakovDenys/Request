import Request from "./request";

const weatherRequest = new Request('https://api.openweathermap.org');

try {
    const obj = await weatherRequest.setPath('/data/2.5/weather').get(new URLSearchParams({
        lat: '49.5897423',
        lon: '34.5507948',
        appid: 'baf3fc7b21495a9b1f82c02ae6e26cc9'
    }));

    console.log(obj);
} catch (error) {
    console.error(error);
}
