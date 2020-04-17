import styled, { css } from 'styled-components'

const selected = css`
  box-shadow: 0 0px 30px rgba(12, 11, 9, 0.49);
  border-left: 7px solid ${(props) => props.theme.colors.yellowOrange};
  transition: all 0.1s ease;
`

export const Wrapper = styled.div`
  background: linear-gradient(to top,rgb(255, 255, 255),rgba(220, 224, 226, 0.52)),url(https://libreshot.com/wp-content/uploads/2019/02/rock-landscape-861x574.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  border-radius: 15px;
  margin: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  overflow: hidden;
  height: 300px;
  width: 70%;
  cursor: pointer;
  box-shadow: 0 2px 20px 0 rgba(0,0,0,.33);

  ${(props) => props.isSelected && selected};
  &:hover {
    ${selected};
  }

  .location-wrapper {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
  }

  @media (max-width: 768px) {
    padding: 20px;
    width: 90%;
  }
`

export const Price = styled.div`
  display: inline-block;
  strong {
    font-size: 25px;
    margin: 0;
    text-shadow: #0000008c 1px 1px;
    color: ${(props) => props.theme.colors.yellowOrange};
  }
`
export const Duration = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 20px;
  color: white;
  text-shadow: #000000d1 1px 1px;
  font-weight: bold;
`

export const Location = styled.div`
  .location-name {
    font-size: 40px;
    text-shadow: #000000d1 1px 1px;
    text-align: center;
    margin: 0;
    font-weight: bold;
    color: white;
  }

  .date {
    color: white;
    text-shadow: #000000d1 1px 1px;
    font-weight: bold;
  }
`

export const Chevron = styled.span`
  transform: rotate(180deg);
  width: 30px;
  height: 30px;
  mask-image: url('https://image.flaticon.com/icons/svg/271/271220.svg');
  mask-repeat: no-repeat;
  display: inline-block;
  background-color: white;
`
