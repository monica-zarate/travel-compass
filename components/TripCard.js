import { Text, ListItem, Button } from '@rneui/themed';

export default function TripCard({ itemData, navigationRef}) {

    return(
        <ListItem>
            <ListItem.Content>
                <Text>{itemData.name}</Text>
                <Text>{itemData.dates}</Text>
                <Text>{itemData.location}</Text>
                {/* <Button onPress={() => navigationRef.navigate({detailId: itemData.id})}/> */}
            </ListItem.Content>
        </ListItem>
    ); 
};