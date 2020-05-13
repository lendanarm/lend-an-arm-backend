let db = {
  posts: [
    {
      userHandle: "Ifeanyi",
      body: "This is my post",
      createdAt: "2020-04-07T03:23:53.266Z",
      likeCount: 5,
      commentCount: 2,
      shareCount: 4,
    },
  ],
  users: [
    {
      userId: "djutipokiuyt75rtuo",
      email: "user@email.com",
      handle: "user",
      createdAt: "2020-04-07T03:23:53.266Z",
      imageUrl: "image/dsfsdkfghsk...",
      bio: "Hello, sosososososososososososos",
      website: "https://web.com",
      location: "London, UK",
    },
  ],
  comments: [
    {
      userHandle: "user",
      postId: "kjhbsjxhknecjbghjdf",
      body: "nice one there!",
      createdAt: "2020-04-07T03:23:53.266Z",
    },
  ],
  notifications: [
    {
      recipient: "user",
      sender: "John",
      read: true | false,
      postId: "kougjytkugyhujihuy",
      type: "like | comment",
      createdAt: " ",
    },
  ],
};

const userDetails = {
  //Redux Data
  credentials: {
    userId: "djutipokiuyt75rtuo",
    email: "user@email.com",
    handle: "user",
    createdAt: "2020-04-07T03:23:53.266Z",
    imageUrl: "image/dsfsdkfghsk...",
    bio: "Hello, sosososososososososososos",
    website: "https://web.com",
    location: "London, UK",
  },
  likes: [
    {
      userHandle: "user",
      postId: "ytghjjhgfdf",
    },
    {
      userHandle: "user",
      postId: "ytghjjhgfdf",
    },
  ],
};
