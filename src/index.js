import React from 'react'
import ReactDOM from 'react-dom'
import faker from 'faker'
import CommentDetail from './CommentDetail'
import ApprovalCard from './ApprovalCard'

const App = () => {
  return (
    <div className="ui container comments">
    <ApprovalCard>
      <h4>Wonci</h4>
      <div>Konci</div>
    </ApprovalCard>
      <ApprovalCard>
        <CommentDetail author={faker.name.firstName()} 
          timeAgo="Today at 16:00" 
          avatar={faker.image.avatar()} 
          text={faker.lorem.sentence()} 
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail author={faker.name.firstName()} 
          timeAgo="Today at 17:00" 
          avatar={faker.image.avatar()} 
          text={faker.lorem.sentence()} 
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail author={faker.name.firstName()} 
          timeAgo="Today at 18:00" 
          avatar={faker.image.avatar()} 
          text={faker.lorem.sentence()} 
        />
      </ApprovalCard>
      
    </div>
  );
};

ReactDOM.render(<App/>, document.querySelector('#root'));

