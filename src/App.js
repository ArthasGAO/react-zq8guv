import React from "react";
import "./style.css";


import React from 'react';
import CommentSection from './CommentSection';

const App = () => {
  const comments = [
    {
      id: 1,
      author: 'User1',
      content: 'This is a parent comment to the answer',
      replyTo: null,
      replies: [
        {
          id: 2,
          author: 'User2',
          content: 'This is a child comment to the comment1',
          replyTo: null,
          replies: [
            {
              id: 4,
              author: 'User1',
              content: 'This is a child comment to the comment2. This is a child comment to the comment2. This is a child comment to the comment2. This is a child comment to the comment2. This is a child comment to the comment2.',
              replyTo: 'User2',
              replies: [],
            },
          ],
        },
        {
          id: 3,
          author: 'User3',
          content: 'This is another child comment to the comment1',
          replyTo: null,
          replies: [],
        },
      ],
    },
    {
      id: 5,
      author: 'User5',
      content: 'This is another parent comment to the answer',
      replyTo: null,
      replies: [],
    },
  ];

  return (
    <div>
      <CommentSection comments={comments} />
    </div>
  );
};

export default App;

