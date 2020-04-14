import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  background-color: white;
  position: relative;
  border-radius: 15px;
  margin: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  overflow: hidden;
  height: 300px;
  width: 250px;
  cursor: pointer;
  box-shadow: 0 2px 20px 0 rgba(0,0,0,.33);
  

  ${(props) => (props.isSelected ? css`
    box-shadow: 0 0px 30px rgb(220, 149, 40);
    img {
      transform: scale(1.2);
    }`
    : props.hasLocation && css`
    opacity: 0.5;
  `)};

  &:hover {
    box-shadow: 0 0px 30px rgb(220, 149, 40);
  }

  .code {
    font-size: 30px;
    text-align: center;
    padding: 10px;
    color: #1d1818d9;
  }

  .image-wrapper {
    height: 210px;
    position: relative;
    overflow: hidden;
    top: -10px;

    img {
      transition: transform 0.5s ease 0s;
      object-fit: fill;
      height: inherit;
      width: 100%;
      &:hover {
        transform: scale(1.2);
      }
    }
  }
  
  .description-wrapper {
    p {
      margin: 0;
      color: rgb(105, 105, 105);
    }
  }
`
