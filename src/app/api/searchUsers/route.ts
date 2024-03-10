interface ResponseData {
  uid: string;
  identifier: string;
  createdAt: string;
  lastSignedIn: string;
}

const dumbData = [
  {
    uid: "1",
    identifier: "Cy Ganderton",
    createdAt: "Jan 16, 2024",
    lastSignedIn: "Feb 4, 2024",
  },
  {
    uid: "2",
    identifier: "Hart Hagerty",
    createdAt: "Desktop Support Technician",
    lastSignedIn: "Purple",
  },
  {
    uid: "3",
    identifier: "Brice Swyre",
    createdAt: "Tax Accountant",
    lastSignedIn: "Red",
  },
  {
    uid: "4",
    identifier: "Kathrine Kohn",
    createdAt: "Jan 16, 2024",
    lastSignedIn: "Feb 4, 2024",
  }
];

export async function POST(req: Request) {
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

  const body = await req.json();

  const searchString = body.searchString || "";
  const pageNumber = body.pageNumber || 1;

  console.log("Search String:", searchString);
  console.log("Page Number:", pageNumber);

  const result = dumbData.filter((item: ResponseData) =>
    item.identifier.toLowerCase().includes(searchString.toLowerCase())
  );

  return new Response(JSON.stringify(result), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
}
