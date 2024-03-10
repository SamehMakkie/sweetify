const dumbData = {
  pageViews: 89050,
  percentageIncrease: 21,
  numOfRecipes: 54,
  numOfUsers: 10305,
  websiteVisitors: [30, 40, 45, 50, 49, 60, 70, 91, 125],
};

export async function POST(req: Request) {
  // get the idToken of the user making the request
  const idToken = req.headers.get("Authorization");

  if (idToken === null) {
    return new Response("Unauthorized", {
      status: 401,
    });
  }
  // const decodedToken = await admin.auth().verifyIdToken(idToken);
  // check if the user has admin claim
  // if (!decodedToken.admin) {
  //   return new Response("Unauthorized", {
  //     status: 401,
  //   });
  // }

  return new Response(JSON.stringify(dumbData), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
}
