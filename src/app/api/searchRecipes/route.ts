interface ResponseData {
  id: string;
  name: string;
  imageSrc: string;
  description: string;
  preparationTime: number;
}

const dumbData = [
  {
    id: "1",
    name: "Carrot Cake with Cream Cheese Frosting",
    imageSrc: "/cake2.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    preparationTime: 10,
  },
  {
    id: "2",
    name: "Chocolate Chip Cookie Dough Brownies",
    imageSrc: "/cake2.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    preparationTime: 20,
  },
  {
    id: "3",
    name: "Strawberry Cheesecake Ice Cream",
    imageSrc: "/cake2.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    preparationTime: 30,
  },
  {
    id: "4",
    name: "Lemon Blueberry Layer Cake",
    imageSrc: "/cake2.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    preparationTime: 40,
  },
  {
    id: "5",
    name: "Lemon Blueberry Layer Cake",
    imageSrc: "/cake2.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    preparationTime: 40,
  },
  {
    id: "6",
    name: "Lemon Blueberry Layer Cake",
    imageSrc: "/cake2.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    preparationTime: 40,
  },
  {
    id: "7",
    name: "Lemon Blueberry Layer Cake",
    imageSrc: "/cake2.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    preparationTime: 40,
  },
  {
    id: "8",
    name: "Lemon Blueberry Layer Cake",
    imageSrc: "/cake2.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    preparationTime: 40,
  },
  {
    id: "9",
    name: "Lemon Blueberry Layer Cake",
    imageSrc: "/cake2.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    preparationTime: 40,
  },
];

export async function POST(req: Request) {
  const body = await req.json();

  const searchString = body.searchString || "";
  const prepTime = body.prepTime || 180;
  const pageNumber = body.pageNumber || 1;

  console.log("Search String:", searchString);
  console.log("Prep Time:", prepTime);
  console.log("Page Number:", pageNumber);

  const result = dumbData.filter((item: ResponseData) => {
    return (
      item.name.toLowerCase().includes(searchString.toLowerCase()) &&
      item.preparationTime <= prepTime
    );
  });

  return new Response(JSON.stringify(result), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
}
