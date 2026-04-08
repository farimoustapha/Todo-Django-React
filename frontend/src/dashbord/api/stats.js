// const BASE_URL = "http://localhost:8000/api"
const BASE_URL = "https://todo-django-react-production.up.railway.app/api"

export const getStats = async (token) => {
    const response = await fetch(`${BASE_URL}/depenses/stats`, {
        headers: {
            "Authorization": `Bearer ${token}`
        }
    })
    return response.json()
}

