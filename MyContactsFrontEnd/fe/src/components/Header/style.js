import styled from 'styled-components'

export const Container = styled.header`
  margin-top:74px;
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const InputSearchContainer = styled.div`
  margin-top: 48px;
  width: 100%;

  input{
    width: 100%;
    height: 50px;
    background: #fff;
    border: none;
    border-radius: 25px;

    -webkit-box-shadow: 5px 5px 15px 5px rgba(173,173,173,0.75);
    box-shadow: 5px 5px 15px 5px rgba(173,173,173,0.75);

    outline:0;

    padding: 0 16px;

    &::placeholder{
      color:#bcbcbc;
    }
  }
`
