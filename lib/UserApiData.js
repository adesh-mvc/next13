export const getUsers = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/photos');

    if (!res.ok) {
        // This will activate the closest `error.js` Error Boundary
        throw new Error('Failed to fetch data');
    }

    return res.json();
}



