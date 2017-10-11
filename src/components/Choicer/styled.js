import styled from 'styled-components'


export const ItemGroup = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const ItemList = styled.ul`
  width: 100%;
  margin: 0;
  padding: 0;
`

export const Item = styled.li`
  display: block;
  border: 1px solid red;
  padding: 10px 15px;
  ${props => props.selected && `
    background: #ccc;
  `}

  &:hover {
    background: #f2f2f2;
  }
`

export const Separator = styled.div`
  width: 0;
  height: 0;
  margin: 0 10px;
  border-style: solid;
  border-width: 50px 0 50px 30px;
  border-color: transparent transparent transparent #c7c7c7;
`