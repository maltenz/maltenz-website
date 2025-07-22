export default function handler(req, res) {
  const { code } = req.query;
  
  if (!code) {
    return res.status(400).json({ error: 'No authorization code provided' });
  }

  // Exchange code for access token
  const tokenUrl = 'https://github.com/login/oauth/access_token';
  const clientId = 'Ov23lig4gBQSGOFlvUy3';
  const clientSecret = '2467885a681e4f2b1eb81d3a471c6eb1213df1b4';

  fetch(tokenUrl, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      client_id: clientId,
      client_secret: clientSecret,
      code: code,
    }),
  })
    .then(response => response.json())
    .then(data => {
      if (data.access_token) {
        // Redirect back to admin with token
        const adminUrl = `${req.headers.origin}/admin/#access_token=${data.access_token}&token_type=bearer`;
        res.redirect(302, adminUrl);
      } else {
        res.status(400).json({ error: 'Failed to get access token', details: data });
      }
    })
    .catch(error => {
      res.status(500).json({ error: 'OAuth exchange failed', details: error.message });
    });
}
