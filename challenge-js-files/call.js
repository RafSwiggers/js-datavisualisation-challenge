const getData = async() => {
    try {
        const response = await fetch('https://canvasjs.com/services/data/datapoints.php', {
            mode: 'no-cors',
        });
        if (response.ok) {
            const jsonResponse = await response.json()
            console.log(jsonResponse);
        }
        throw new Error("Request failed!")
    } catch (error) {
        console.log(error);
    }
};

getData();