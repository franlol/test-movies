export async function api<T>(url: string, options?: RequestInit) {
  const request = await fetch(url, options);
  const data: Promise<T> = request.json();

  return data;
}
