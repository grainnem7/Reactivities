import React from 'react';
import { act } from 'react-dom/test-utils';
import { Button, Card, Image } from 'semantic-ui-react';
import LoadingComponent from '../../../../app/layout/LoadingComponents';
import { useStore } from '../../../../app/stores/store';

export default function ActivityDetails() {

    const {activityStore} = useStore();
    const {selectedActivity: activity, openForm, cancelSelectedActivity} = activityStore;

    if (!activity) return <LoadingComponent/>;

    return (
        <Card fluid>
            <Image src={`/assets/categoryImages/${activity.category}.jpg`}/>
            <Card.Content>
                <Card.Header>{activity.title}</Card.Header>               
                <Card.Meta>
                    <span>{activity.date}</span>
                </Card.Meta>
                <Card.Description>
                    {activity.description}
                </Card.Description>
            </Card.Content>
            <Card.Content extra>
               <Button.Group widths='2'>
                    <Button onClick={() => openForm(activity.id)} basic color = 'blue' contents='Edit'>Edit</Button>
                    <Button onClick ={cancelSelectedActivity} basic color = 'grey' contents='Cancel'>Cancel</Button>
               </Button.Group>
            </Card.Content>
        </Card>
    )
}