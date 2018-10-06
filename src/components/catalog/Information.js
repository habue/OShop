import React from 'react';
import Avatar from 'material-ui/Avatar';
import Chip from 'material-ui/Chip';
import RaisedButton from 'material-ui/RaisedButton';
import Goods from 'material-ui/svg-icons/action/dns';
import SumIcon from 'material-ui/svg-icons/editor/attach-money';
import Average from 'material-ui/svg-icons/editor/functions';
import { blue300, deepPurple200, indigo900, red600 } from 'material-ui/styles/colors';

const styles = {
    chip: {
        margin: 4
    }
}

export const Information = (props) => (
    <div className="information">
        <header>
            <h1>Информация о товарах</h1>
        </header>
        <Chip
            backgroundColor={blue300}
            style={styles.chip}
        >
            <Avatar color={deepPurple200} backgroundColor={indigo900} icon={<Goods />} />
            Всего товаров: <b>{props.info.length}</b>
        </Chip>
        <Chip
            backgroundColor={blue300}
            style={styles.chip}
        >
            <Avatar color={deepPurple200} backgroundColor={indigo900} icon={<SumIcon />} />
            Сумма товаров: <b>{
                (() => {
                    return props.info.reduce((prev, cur) => prev + cur.price, 0);
                })()
            } грн.</b>
        </Chip>
        <Chip
            backgroundColor={blue300}
            style={styles.chip}
        >
            <Avatar color={deepPurple200} backgroundColor={indigo900} icon={<Average />} />
            Средняя цена: <b>{
                (() => {
                    if(props.info.length) {
                        return (props.info.reduce(
                                    (prev, cur) => prev + cur.price, 0) / props.info.length
                                ).toFixed(2);
                    }
                    return 0.00;
                })()
            } грн.</b>
        </Chip>
        <RaisedButton
            onClick={() => props.deleteAll()}
            backgroundColor={red600}
            fullWidth={true}
            label="Удалить все товары"
            style={{marginBottom: 20}}
        />
    </div>
)