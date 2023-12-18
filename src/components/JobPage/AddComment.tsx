import React, { useState } from 'react';
import useCommentStore from '@/store/useCommentStore';
import styled from 'styled-components';

const AddComment = () => {
  const [newComment, setNewComment] = useState({
    id: '',
    name: '전선용',
    text: '',
  });

  const addComment = useCommentStore((state) => state.addComment);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewComment({ ...newComment, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (newComment.text.trim() !== '') {
      addComment({ ...newComment, id: '-2' }); // 빈 문자열 대신 null 값 할당
      setNewComment({
        ...newComment,
        id: '', // 혹시 모를 다른 필드 초기화
        text: '',
      });
    }
  };

  return (
    <CommentForm onSubmit={handleSubmit}>
      <CommentInput
        type="text"
        name="text"
        value={newComment.text}
        onChange={handleInputChange}
        placeholder="댓글을 입력해주세요."
      />
      <AddButton type="submit">댓글 추가</AddButton>
    </CommentForm>
  );
};

export default AddComment;

const CommentForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 20px;
  width: 100%;
`;

const CommentInput = styled.input`
  width: 100%;
  height: 70px;
  margin-top: 50px;
  margin-bottom: 20px;
  font-size: 30px;
  box-shadow: 3px 3px 2px 1px rgba(137, 137, 138, 0.2);
`;

const AddButton = styled.button`
  background-color: white;
  font-weight: 700;
  box-shadow: 3px 3px 2px 1px rgba(137, 137, 138, 0.2);
  width: 10%;
  border: none;
  padding-left: 15px;
  padding-right: 15px;
  padding-top: 15px;
  padding-bottom: 15px;
  border-radius: 10px;
  margin-right: 5px;
  border: 0.5px solid var(--bs-black-500);
  box-sizing: border-box;
  font-size: 20px;
  align-self: end;
  @media ${(props) => props.theme.device.tablet} {
    font-size: 14px;
    padding: 10px;
  }

  @media ${(props) => props.theme.device.mobile} {
    font-size: 9px;
    padding: 8px;
  }
`;
