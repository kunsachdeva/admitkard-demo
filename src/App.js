import React, { Component } from 'react';
import './App.css';
import { Card, Icon,Radio ,Label,Item,Button,Input} from 'semantic-ui-react'
import universities from './data/universities'

class App extends Component {
  render() {
    return (
      <div>
        <div className="header">
          
        </div>
        <div className="menu">
          
        </div>
        <div className="main">
          <div className="left">
             <Card>
              <Card.Content>
                <Card.Header>
                  Profile Completed
                </Card.Header>
                <Card.Header>
                  PUNEET SHARMA<br/>
                  ADM3-12-345
                </Card.Header>
                <Card.Description>
                  Student Status<Radio toggle />
                </Card.Description>
              </Card.Content>
              <Card.Content>
                <Card.Description>
                  <Item.Group>
                    <Item>
                      <Item.Image size='tiny' src='/assets/images/wireframe/image.png' />
                      <Item.Content verticalAlign='middle'>
                        <Item.Header as='a'>Profile</Item.Header>
                      </Item.Content>
                    </Item>

                    <Item>
                      <Item.Image size='tiny' src='/assets/images/wireframe/image.png' />
                      <Item.Content verticalAlign='middle'>
                        <Item.Header as='a' content='Strategy' />
                      </Item.Content>
                    </Item>

                    <Item>
                      <Item.Image size='tiny' src='/assets/images/wireframe/image.png' />
                      <Item.Content header='Applications' verticalAlign='middle' />
                    </Item>
                  </Item.Group>
                </Card.Description>
              </Card.Content>
            </Card>
          </div>
          <div className="right">
            <Button.Group basic style={{backgroundColor:'white',width:'75%'}}>
              <Button>CAN</Button>
              <Button>AUS</Button>
              <Button>NZL</Button>
              <Button>SGP</Button>
              <Button>US</Button>
              <Button>UK</Button>
            </Button.Group>
            <Button style={{marginLeft:'5px'}} color='white'><Icon name='star' /> Shortlisted</Button>
            <br/><br/><br/>
            <Input fluid action={{ icon: 'search' }} placeholder='Search...' />
            <h1>ADMITKARD STRATEGY</h1>
              <Item.Group>
                {universities.map(function(u){
                  return <Item style={{backgroundColor:'white',padding:'20px',boxShadow:'gainsboro 0 0 5px',borderRadius:'5px'}}>
                  <Item.Image size='tiny' src='https://react.semantic-ui.com/assets/images/wireframe/image.png' />
                  <Item.Content>
                    <Item.Description style={{fontSize:'24px',fontWeight:'bold'}}>{u.name} University</Item.Description>
                    <Item.Description>Category Rank:{u.rank}, Type: {u.type}</Item.Description>
                  </Item.Content>
                </Item>
                })}
              </Item.Group>
          </div>
        </div>
        <div className="footer">
        </div>
      </div>
    );
  }
}

export default App;
