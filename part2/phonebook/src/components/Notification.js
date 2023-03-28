const Notification = ({ message}) => {
    if (message === null) {
        return null
    }

    return (
        <div className='contactEventMessage'>
            {message}
        </div>
    )
}

export default Notification