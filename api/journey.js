const ENDPOINT = 'https://script.google.com/macros/s/AKfycbx8AUAmKm_nGWGNtzVQJNueWuOxAXRgr1i8s9ubQBb7CFaCKgVdN7ININnOmgyLOFzG/exec';

module.exports = async function (req, res) {
  if (req.method !== 'POST') return res.status(405).send('Please use the form to submit your story.');
  try {
    const fields = typeof req.body === 'string' ? new URLSearchParams(req.body) : new URLSearchParams(req.body || {});
    const response = await fetch(ENDPOINT, { method: 'POST', body: fields, redirect: 'follow' });
    const result = await response.text();
    if (!response.ok || !result.includes('Thank you for sharing your story')) {
      console.error('The form service did not confirm the response.', response.status);
      return res.status(502).send('We could not confirm your response. Please email contactus@medhartha.com before trying again.');
    }
    return res.redirect(303, '/thank-you.html');
  } catch (error) {
    console.error('Form service unavailable:', error.message);
    return res.status(502).send('We could not confirm your response. Please email contactus@medhartha.com before trying again.');
  }
};
