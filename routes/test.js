router.get("/api/ping", (req, res) => {
  res.json({ message: "Backend is up and running." });
});