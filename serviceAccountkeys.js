module.exports = {
    type: "service_account",
    project_id: "notification-6363f",
    private_key_id: process.env.GOOGLE_PRIVATE_ID,
    private_key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, '\n'), // Replace newline characters
    client_email: process.env.GOOGLE_CLIENT_EMAIL,
    client_id: process.env.GOOGLE_CLIENT_ID,
    auth_uri: process.env.GOOGLE_AUTH_URI,
    token_uri: process.env.GOOGLE_TOKEN_URI,
    auth_provider_x509_cert_url: process.env.GOOGLE_PROVIDER_CERT_URI,
    client_x509_cert_url: process.env.GOOGLE_CLIENT_CERT_URI,
    universe_domain: process.env.GOOGLE_UNIVERSE_DOMAIN
  };
  