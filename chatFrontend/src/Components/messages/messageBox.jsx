// import React from 'react';
import { createStyles, makeStyles } from '@mui/styles';
import Paper from '@mui/material/Paper';
import { TextInput } from './TextInput';
import { MessageLeft, MessageRight } from './message';

const useStyles = makeStyles(() =>
  createStyles({
    container: {
      width: '100%',
     height: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 20, // Adding padding for spacing
    },
    paper: {
      width: '100%',
      height: '100%',
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'column',
      position: 'relative',
      padding: 20, // Adding padding inside the Paper
      boxShadow: '0 4px 8px rgba(0,0,0,0.1)', // Adding a subtle shadow for depth
      backgroundColor: '#fff', // Setting a light background color
    },
    messagesBody: {
      width: 'calc( 100% - 20px )',
      margin: 10,
      overflowY: 'scroll',
      height: 'calc( 100% - 80px )',
    },
  })
);

function MessageBox() {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Paper className={classes.paper} elevation={2}>
        <Paper id="style-1" className={classes.messagesBody}>
          <MessageLeft
            message="あめんぼあかいなあいうえお"
            timestamp="MM/DD 00:00"
            photoURL="https://lh3.googleusercontent.com/a-/AOh14Gi4vkKYlfrbJ0QLJTg_DLjcYyyK7fYoWRpz2r4s=s96-c"
            displayName=""
            avatarDisp={true}
          />
          <MessageLeft
            message="xxxxxhttps://yahoo.co.jp xxxxxxxxxあめんぼあかいなあいうえおあいうえおかきくけこさぼあかいなあいうえおあいうえおかきくけこさぼあかいなあいうえおあいうえおかきくけこさいすせそ"
            timestamp="MM/DD 00:00"
            photoURL=""
            displayName="テスト"
            avatarDisp={false}
          />
          <MessageRight
            message="messageRあめんぼあかいなあいうえおあめんぼあかいなあいうえおあめんぼあかいなあいうえお"
            timestamp="MM/DD 00:00"
            photoURL="https://lh3.googleusercontent.com/a-/AOh14Gi4vkKYlfrbJ0QLJTg_DLjcYyyK7fYoWRpz2r4s=s96-c"
            displayName="まさりぶ"
            avatarDisp={true}
          />
          <MessageRight
            message="messageRあめんぼあかいなあいうえおあめんぼあかいなあいうえお"
            timestamp="MM/DD 00:00"
            photoURL="https://lh3.googleusercontent.com/a-/AOh14Gi4vkKYlfrbJ0QLJTg_DLjcYyyK7fYoWRpz2r4s=s96-c"
            displayName="まさりぶ"
            avatarDisp={false}
          />
        </Paper>
        <TextInput />
      </Paper>
    </div>
  );
}

export default MessageBox;
