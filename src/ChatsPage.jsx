// import { MultiChatSocket, MultiChatWindow, useSingleChatLogic } from 'react-chat-engine-advanced'
import { PrettyChatWindow } from 'react-chat-engine-pretty';
const ChatsPage = (props) => {
    // const chatProps = useSingleChatLogic(
        // 'dd0e82d3-5b9b-4bf8-b273-bf86c0fdf0fc', 
        // props.user.username, 
        // props.user.secret);
    return (
        <div style={{ height: '100vh'}}>
            <PrettyChatWindow
                projectId='dd0e82d3-5b9b-4bf8-b273-bf86c0fdf0fc'
                username={props.user.username}
                secret={props.user.secret}
                style={{height: '100%'}} 
            />
        </div>
    )
}

export default ChatsPage;