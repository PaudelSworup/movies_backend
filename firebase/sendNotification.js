const admin = require("../firebase/firebase-admin");
const UsersModel = require("../models/UsersModel");

async function sendNotification( title, body) {
  const user = await UsersModel.find()
  console.log(user)
  const tokens = user
      .map(user => user.deviceToken) // Assuming device tokens are stored in 'deviceTokens' field as an array
      .flat();

   

  //for single device
  // const message = {
  //   notification: {
  //     title: "hello notification",
  //     body: "send from node js",
  //   },
  //   data: {
  //     value: "Movie Added",
  //     value: "Charlie and the Chocolate Factory has been added",
  //   },
  //   token: tokens,
  // };

  //for multiple devices
  const messages = tokens.map((token) => ({
    notification: {
      title: "Movie Added",
      body: "Charlie and the Chocolate Factory",
      image:
        "https://static1.colliderimages.com/wordpress/wp-content/uploads/2023/08/charlie-and-the-chocolate-factory.jpg",
    },

    token: token,
  }));

  try {
    // const response = await admin.messaging().sendEachForMulticast({
    //   tokens,
    //   data: {
    //     title: "Movie Added",
    //     body: "Charlie and the Chocolate factory has been added",
    //   },
    // });

    const response = await admin.messaging().sendEach(messages);
    console.log("Successfully sent message:", response);
  } catch (error) {
    console.error("Error sending message:", error);
  }
}

module.exports = sendNotification;
