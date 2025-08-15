async function fetchProfileData() {
    const url = 'https://raw.githubusercontent.com/GabriellySS/gabriellyss.github.io/refs/heads/main/assets/data/profile.json';
    const fetching = await fetch(url);
    return await fetching.json()
}