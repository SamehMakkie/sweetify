  export async function POST(req: Request) {
    // get the idToken of the user making the request
    const idToken = req.headers.get("Authorization");
    // get recipeTitle from request body
    const { recipeId} = await req.json();
    
    console.log("DELETE RECIPE API ROUTE");
    
    console.log(recipeId);

    // make sure all fields are not null
    if (!recipeId) {
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
  
    return new Response(JSON.stringify({ recipeId }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
  