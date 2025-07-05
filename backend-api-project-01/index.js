import express from "express";
import fs from "fs";

import mockData from "./MOCK_DATA.json" assert { type: "json" };

const app = express();
const PORT = 5000;

// Middleware - Plugin
app.use(express.urlencoded({ extended: false }));

app.use((req, res, next) => {
  fs.appendFile('log.txt', `\n${Date.now()}: ${req.method}: ${req.path}`, (err, data) => {
    next()
  })
  // return res.json({message: 'Hey you reached this level!!'})
})

// +++++++ ABOVE MIDDLEWARE +++++++



// for only this route - /users - we send a html
// getting all users
app.get("/users", (req, res) => {
  const htmlDoc = `
        <ul>
            ${mockData.map((user) => `<li>${user.first_name}</li>`).join("")}
        </ul>
    `;
  res.send(htmlDoc);
});

// getting all users with API
app.get("/api/users", (req, res) => {
  return res.json(mockData);
});

// ++++ REST API ++++
// for only this route - /api/users - we send json
app.get("/api/users", (req, res) => {
  return res.json(mockData);
});

// for userid
app
  .route("/api/users/:id")
  // GET METHOD
  .get((req, res) => {
    const id = Number(req.params.id);
    const user = mockData.find((user) => user.id === id);
    return res.json(user);
  })
  // PATCH METHOD
  .patch((req, res) => {
    // Edit user with id
    return res.json({ status: "Pending" });
  })
  // DELETE METHOD
  .delete((req, res) => {
    // Delete user with id
    return res.json({ status: "Pending" });
  });

// using POST Method
app.post("/api/users", (req, res) => {
  // create new user
  const body = req.body;
  mockData.push({ ...body, id: mockData.length + 1 });
  fs.writeFile("./MOCK_DATA.json", JSON.stringify(mockData), (err, data) => {
    if (err) {
      console.log(err);
    }
    return res.json({ status: "Success", id: mockData.length });
  });
});

// using PATCH Method
// app.patch('/api/users/:id', (req, res) => {
//     return res.json()
// })

app.listen(PORT, () => `Server initiated! at ${PORT}`);
