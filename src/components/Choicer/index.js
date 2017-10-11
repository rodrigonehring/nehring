import React, { Component } from 'react'
import { ItemGroup, ItemList, Item, Separator } from './styled'

const fakeItems = [
  {
    required: 2,
    max: 2,
    name: 'Group name 1',
    items: [
      { id: 1, label: 'A ou B' },
      { id: 2, label: 'Escolha 2' },
      { id: 3, label: 'Escolha 3' },
    ],
  },
  {
    required: 2,
    name: 'Group name 2',
    items: [
      { id: 4, label: 'Escolha 1', validators: [['notSelected', 5]] },
      { id: 5, label: 'Escolha 2' },
    ],
  },
  {
    required: 2,
    name: 'Group name 3',
    items: [
      { id: 6, label: 'Escolha 1' },
      { id: 7, label: 'Escolha 2' },
    ],
  },
]

const validators = {
  'notSelected': () => {
    throw new Error('Selected :/')
  }
}

function selectItem(group, item) {
  if (item.validators) {
    item.validators.forEach(([action, ...args]) => {
      const actionFn = validators[action]
      actionFn(...args)
    })
  }

  return {
    ...item,
    selected: !item.selected
  }
}

class Choicer extends Component {
  state = {
    items: fakeItems
  }


  handleSelectItem = (groupIndex, itemIndex) => () => {
    try {
      const newState = {
        items: this.state.items.map((group, idx) => groupIndex !== idx ? group : {
          ...group,
          items: group.items.map((item, idx2) => itemIndex !== idx2 ? item : selectItem(this.state.items[idx], item))
        })
      }

      this.setState({
        items: newState.items.map(group => ({
          ...group,
          selected: group.items.reduce((acc, curr) => curr.selected ? acc + 1 : acc, 0)
        }))
      })
    } catch (e) {
      console.log('error', e)
      this.setState({ error: e })
    }
  }

  render() {
    const { items } = this.state;

    return (
      <div>
        Choicer

        <ItemGroup>

          {items.map((group, index) => ([

            <ItemList key={index}>
              <h3>
                {group.name}
              </h3>

              {group.selected || 0}

              {group.items.map((item, indexItem) =>
                <Item key={indexItem} onClick={this.handleSelectItem(index, indexItem)} selected={item.selected}>
                  {item.label}
                </Item>
              )}

            </ItemList>,

            index !== items.length - 1 &&
              <Separator key={`separator-${index}`} />

          ]))}
            
        </ItemGroup>


      </div>
    )
  }
}


export default Choicer
