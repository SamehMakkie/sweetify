  export async function POST(req: Request) {
    // get the idToken of the user making the request
    const idToken = req.headers.get("Authorization");
    // get recipeTitle from request body
    const { recipeTitle, imgURL, prepTime, ingredients, steps } = await req.json();
    console.log(recipeTitle);
    console.log(imgURL);
    console.log(prepTime);
    console.log(ingredients);
    console.log(steps);

    // make sure all fields are not null
    if (!recipeTitle || !imgURL || !prepTime || !ingredients || !steps) {
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
  
    return new Response(JSON.stringify({ recipeTitle, imgURL, prepTime, ingredients, steps }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
  