import React from 'react';
import { Information } from './Information';
import { Card, CardActions, CardHeader, CardText, CardMedia, CardTitle } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import Delete from 'material-ui/svg-icons/action/highlight-off';
import { deepPurple200, red100, red900 } from 'material-ui/styles/colors';

export const Catalog = ({ data, onDelete, deleteAll }) =>  (
    <div className='grid-list'>
        <div className='subitems'>
            {   
                data.map(item => (
                    <div key={item.id} >
                        <Card>
                            <CardHeader
                                title={item.name}
                                style={{backgroundColor: deepPurple200}}
                            />
                            <CardMedia
                                overlay={<CardTitle title={`${item.price} грн.`} />}
                                overlayContentStyle={{background: 'rgb(0, 0, 0, 0.8)'}}
                            >
                                <img src={item.image} className="image-catalog" alt="" />
                            </CardMedia>
                            <CardText>
                                {item.description}
                            </CardText>
                            <CardActions>
                                <RaisedButton
                                    backgroundColor={red100}
                                    icon={<Delete color={red900} />}
                                    fullWidth={true}
                                    onClick={() => onDelete(item.id)}
                                />
                            </CardActions>
                        </Card>
                    </div>      
                ))
            }
        </div>
        <Information info={data} deleteAll={deleteAll} />
    </div>
)


