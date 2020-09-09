import db from "../db.ts";

const usersCollection = db.collection("users");

const getUsers = async function ({ response }: { response: any }) {
  const allUsers = await usersCollection.find({});
  response.body = {
    status: true,
    users: allUsers,
  };
};

const addUsers = async (
  { request, response }: { request: any; response: any },
) => {
  const data = await request.body();

  if (!data) {
    response.status = 400;
    response.body = {
      status: "failure",
      msg: "No data found",
    };
  }

  const newUser = await usersCollection.insertOne({
    username: data.value.username,
    email: data.value.email,
    password: data.value.password,
  });

  response.body = {
    status: "success",
    user: newUser,
  };
};

export { getUsers, addUsers };
