export async function getData(url) {
  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      throw response;
    }
  } catch (error) {
    throw error;
  }
}
