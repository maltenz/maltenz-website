export default async function handler(req, res) {
  const { code } = req.query;
  
  if (!code) {
    return res.status(400).json({ error: 'No authorization code provided' });
  }

  try {
    // Exchange code for access token
    const tokenUrl = 'https://github.com/login/oauth/access_token';
    const clientId = 'Ov23lig4gBQSGOFlvUy3';
    const clientSecret = process.env.GITHUB_CLIENT_SECRET || '2467885a681e4f2b1eb81d3a471c6eb1213df1b4';

    const response = await fetch(tokenUrl, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        client_id: clientId,
        client_secret: clientSecret,
        code,
      }),
    });

    const data = await response.json();
    
    if (data.access_token) {
      // Return JSON response for Decap CMS
      return res.status(200).json({
        token: data.access_token,
        provider: 'github',
      });
    }
    return res.status(400).json({ error: 'Failed to get access token', details: data });
  } catch (error) {
    return res.status(500).json({ error: 'OAuth exchange failed', details: error.message });
  }
}
