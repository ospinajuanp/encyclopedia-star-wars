export default async function getData(idPage:number = 1) {
    const res = await fetch(`https://swapi.dev/api/people/?page=${idPage}`,{
        next:{
            revalidate:60
        }
    });
    // The return value is *not* serialized
    // You can return Date, Map, Set, etc.

    // Recommendation: handle errors
    if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
    }
    return res.json();
}