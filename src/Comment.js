import React from 'react';
import styled from '@emotion/styled';

const CommentWrapper = styled.div`
  margin-left: ${props => (props.isChild ? 20 : 0)}px;
`;

const CommentHeader = styled.div`
  display: flex;
  align-items: center;
`;

const CommentContent = styled.div`
  margin-bottom: 8px;
`;

const ChildCommentsWrapper = styled.div`
  margin-left: 20px;
`;

const Comment = ({ comment, isChild = false }) => {
  const replyToText = comment.replyTo ? ` . ${comment.replyTo}` : '';

  return (
    <CommentWrapper isChild={isChild}>
      <CommentHeader>
        {comment.author}
        {replyToText}
      </CommentHeader>
      <CommentContent>{comment.content}</CommentContent>
      <ChildCommentsWrapper>
        {comment.replies.map((reply, index) => (
          <Comment key={reply.id} comment={reply} isChild={true} />
        ))}
      </ChildCommentsWrapper>
    </CommentWrapper>
  );
};

export default Comment;
