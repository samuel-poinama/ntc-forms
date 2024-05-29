
// create collections
db.createCollection("users")
db.createCollection("forms")
db.createCollection("responses")

// create views
db.createView("reponses_user_title", "responses", [
    {
      $lookup: {
        from: "forms",
        localField: "formId",
        foreignField: "_id",
        as: "form"
      }
    },
    {
      $unwind: "$form"
    },
    {
      $lookup: {
        from: "users",
        localField: "userId",
        foreignField: "_id",
        as: "user"
      }
    },
    {
      $unwind: "$user"
    },
    {
      $project: {
        _id: 1,
        userId: 1,
        formId: 1,
        fields: 1,
        title: "$form.title",
        userName: "$user.name",
        userEmail: "$user.email"
      }
    }
  ])


// insert admin user
db.users.insert({
    email: process.env.ADMIN_EMAIL,
    name: process.env.ADMIN_EMAIL,
    image: "./comunity.png",
    "role": "ADMIN"
  })