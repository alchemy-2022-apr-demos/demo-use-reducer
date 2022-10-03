export const search = async (searchObj) => {
    // TODO: Visit adding to URLSearchParams, append, and toString().
    const query = Array.from(Object.entries(searchObj))
        .map(([k, v]) => `${k}=${encodeURIComponent(v)}`).join('&');
    const res = await fetch(process.env.POKEDEX_URL + '?' + query);
    if (res.status >= 400) {
        throw res;
    } else {
        const body = await res.json()
        console.log('search results', body)
        return body
    }
}