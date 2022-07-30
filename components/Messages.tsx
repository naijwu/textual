

const Messages = ({ messages }: any) => {

    return (
        <div className="messages">
            {JSON.stringify(messages)}
        </div>
    )
}

export default Messages