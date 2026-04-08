const BASE_URL = "http://localhost:8000/api"

export const getDepense = async (token) => {
    const response = await fetch(`${BASE_URL}/depenses/`, {
        headers: {
            "Authorization": `Bearer ${token}`,
        }
    })
    return response.json()
}

export const getDepenseById = async (id, token) => {
  const response = await fetch(`${BASE_URL}/depenses/${id}/`, {
    headers: {
      "Authorization": `Bearer ${token}`
    }
  })
  return response.json()
}

export const createDepense = async (depenseData, token) => {
    const response = await fetch(`${BASE_URL}/depenses/`, {
        method: "POST",
        headers: { 
            "Authorization": `Bearer ${token}`,
            "Content-Type": "application/json" 
        },
        body: JSON.stringify(depenseData)
    })
    return response.json()
}

export const updateDepense = async (id, data, token) => {
    const response = await fetch(`${BASE_URL}/depenses/${id}/`,{
        method: "PATCH",
        headers: { 
            "Authorization": `Bearer ${token}`,
            "Content-Type": "application/json" },
        body: JSON.stringify(data)
    })
    return response.json()
}

export const deleteDepense = async (id, token) => {
    await fetch(`${BASE_URL}/depenses/${id}/`,{
        method: "DELETE",
        headers: {
            "Authorization": `Bearer ${token}`
        }
    })
}