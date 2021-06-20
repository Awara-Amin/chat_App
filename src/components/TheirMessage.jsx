const TheirMessage = ({lastMessage, message}) => {
  const isFirstMessageByUser = !lastMessage || lastMessage.sender.username !== message.sender.username;

  return (
    <div className='message-row'>
      {isFirstMessageByUser && (
        <div className='message-avatar'
            style={{backgroundImage: `url(${message?.sender?.avatar})`}}>

        </div>
      )}

    {message?.attachement?.length >0
      ? (
        <img
          src={message.attachements[0].file}
          alt='message-attachment'
          className='message-image'
          // style={{float:'right'}}
          style={{marginLeft:isFirstMessageByUser? '4px':'48px'}}
        />
      ): (
        // <div className='message' style={{float: 'right', marginRight: '18px', color:'white', backgroundColor:'#3B2A50'}}>
        <div className='message' style={{float: 'left', backgroundColor:'#CABCDC',marginLeft:isFirstMessageByUser? '4px':'48px'}}>

          {message.text}
        </div>
      )
    }
  </div>
);}

export default TheirMessage;
