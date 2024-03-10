const featuredLists = [
    {
      title: "Featured Recipes",
      recipes: [
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
      ],
    },
    {
      title: "New recipes",
      recipes: [
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
      ],
    },
    {
      title: "Popular recipes",
      recipes: [
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
      ],
    },
  ];

export async function GET(req: Request){
    // const msg = {msg: 'WHERE World!'};
    return new Response(JSON.stringify(featuredLists), {
        headers: {
            'content-type': 'application/json',
        },
    });
}