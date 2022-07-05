const apiUrl = 'http://localhost:3001/api';

export const callPostApi = async (uri:string, data:any) => {
  const response = await fetch(`${apiUrl}/${uri}`, {
    method: "POST",
    mode: 'cors', 
    cache: 'no-cache', 
    credentials: 'same-origin',
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data)
  }).then((res) => res.json());

  if(response.error) return false
  return true
}
