const BASE_URL = "http://localhost:8000/api"

export const getStats = async (token) => {
    const response = await fetch(`${BASE_URL}/depenses/stats`, {
        headers: {
            "Authorization": `Bearer ${token}`
        }
    })
    return response.json()
}

