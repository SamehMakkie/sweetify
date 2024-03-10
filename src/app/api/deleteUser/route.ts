export async function POST(req: Request) {
    // get the idToken of the user making the request
    const idToken = req.headers.get("Authorization");
    // get recipeTitle from request body
    const { uid } = await req.json();
    
    console.log("DELETE USER API ROUTE");
    
    console.log(uid);

    // make sure all fields are not null
    if (!uid) {
      return new Response("All fields must not be null", {
        status: 400,
      });
    }
  
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
  
    return new Response(JSON.stringify({ uid }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
  