/**
 * Responsible for sending enquiry email.
 */
export default (req, res) => {
  res.statusCode = 200;
  const email = req.headers?.email;
  // TODO: add sendgrid
  res.json({ email });
};
