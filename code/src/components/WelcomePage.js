import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { maze, postUsername } from 'reducers/maze';
import styled from 'styled-components';
import { Button } from './global-style/Button';
import { Wrapper } from './global-style/Wrapper';
import { Header1, BodyText } from './global-style/Text';
import { Background } from './global-style/Background';
import { Footer } from './footer/Footer';

export const WelcomePage = () => {
  const coordinates = useSelector((store) => store.maze.coordinates);
  const [username, setUsername] = useState('');
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault()
    dispatch(maze.actions.storeUsername(username))
    dispatch(postUsername())
    setUsername('')
    navigate('/game');
  };
  return (
    <Background coordinates={coordinates}>
      <Wrapper>
        <Header1>Are you ready to enter the Maze?</Header1>
        <BodyText>First we need your name..</BodyText>
        <FormWrapper onSubmit={handleSubmit}>
          <input type="text" placeholder="Type your name here" onChange={(event) => setUsername(event.target.value)} value={username} />
          <Button type="submit">I am ready!</Button>
        </FormWrapper>
      </Wrapper>
      <Footer />
    </Background>
  )
};

export const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
`