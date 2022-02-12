export async function Get() {
    try {
        await fetch('https://jsonplaceholder.typicode.com/photos')
            .then(res => res.json())
    }
    catch {
        console.log("error");
    }
}