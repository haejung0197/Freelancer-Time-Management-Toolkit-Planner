export async function subscribeUser(email: string): Promise<{ success: boolean; message: string }> {
  try {
    const response = await fetch('https://api.convertkit.com/v3/forms/YOUR_FORM_ID/subscribe', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, api_key: 'YOUR_API_KEY' }),
    });

    if (response.ok) return { success: true, message: 'Success' };
    return { success: false, message: 'Error subscribing. Please try again.' };
  } catch {
    return { success: false, message: 'Network error. Please try again.' };
  }
}
