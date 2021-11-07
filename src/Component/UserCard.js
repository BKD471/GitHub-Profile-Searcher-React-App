
import React from 'react';

import {Card,CardBody} from 'reactstrap';

const UserCard = ({user}) => {
  
    return (

        <Card className="text-center mt-3 mb-4">
            <img src={user.avatar_url} className="img-thumbnail"/>
            <CardBody>

                {/* <div className="text-primary">Name: {user.name}</div>

                <div className="text-primary">Location: {user.location}</div>

                <div className="text-info">Bio: {user.bio}</div> */}


                <div className="text-info">Available for hire:{user.hireable ? 'YES': 'No'}</div>
                

                <div className="text-info"> Followers :{user.followers}</div>
                
                
            </CardBody>
        </Card>
    )

}

export default UserCard;