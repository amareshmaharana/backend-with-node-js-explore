import express from "express";
import mockData from "./MOCK_DATA.json" assert { type: "json" };

const app = express();
const PORT = 5000;
// for only this route - /users - we send a html
app.get("/users", (req, res) => {
  const htmlDoc = `
        <ul>
            ${mockData.map((user) => `<li>${user.first_name}</li>`).join("")}
        </ul>
    `;
  res.send(htmlDoc);
});

// ++++ REST API ++++
// for only this route - /api/users - we send json
app.get("/api/users", (req, res) => {
  return res.json(mockData);
});

// for userid
app
  .route("/api/users/:id")
  .get((req, res) => {
    const id = Number(req.params.id);
    const user = mockData.find((user) => user.id === id);
    return res.json(user);
  })
  .patch((req, res) => {
    // Edit user with id
    return res.json({ status: "Pending" });
  })
  .delete((req, res) => {
    // Delete user with id
    return res.json({ status: "Pending" });
  });



// using POST Method
// app.post('/api/users', (req, res) => {
//     return res.json({status: 'Pending...'})
// })

// using PATCH Method
// app.patch('/api/users/:id', (req, res) => {
//     return res.json()
// })

app.listen(PORT, () => `Server initiated! at ${PORT}`);
