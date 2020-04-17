import styled from 'styled-components'

export const Wrapper = styled.div`
  .destination-wrapper {
    text-align: center;
    color: ${(props) => props.theme.colors.yellowOrange};
    h2 {
      border-bottom: 1px solid ${(props) => props.theme.colors.vistaWhite};
      padding: 20px 0px;
      border-top: 1px solid ${(props) => props.theme.colors.vistaWhite};
    }
  }
  .button-next {
    border-top: 1px solid ${(props) => props.theme.colors.vistaWhite};
    margin-top: 50px;
    margin-bottom: 50px;
    button {
      margin: 20px 0px;
    }
  }
`
