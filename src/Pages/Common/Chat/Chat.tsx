import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { api } from "../../../utils/Api";
import DataContext from "../../../utils/Context/DataContext";

import styles from "@chatscope/chat-ui-kit-styles/dist/default/styles.min.css";
import {
    MainContainer,
    ChatContainer,
    MessageList,
    Message,
    MessageInput,
    ConversationHeader,
    Avatar,
    VoiceCallButton,
    VideoCallButton,
    InfoButton,
    TypingIndicator,
    MessageSeparator
} from "@chatscope/chat-ui-kit-react";


export default function ChatPage(props: any) {
    const context = useContext(DataContext);

    useEffect(() => {
        console.log("OrderPage On mount :", props);
        console.log("OrderPage context :", context);
        context.SetAppData((prevValue) => {
            prevValue.backHaves = props.backHaves;
            return { ...prevValue };
        });
    }, []);

    const emilyIco =
        "https://chatscope.io/storybook/react/static/media/emily.d34aecd9.svg";


    return (

        <div className="page-main p-3 bg-gray-200 p-sm-0">
            <div style={{ ...styles, position: "relative", height: "500px" }}>
                <MainContainer>
                    <ChatContainer>
                        {/* <ConversationHeader>
                            <Avatar src={emilyIco} name="Emily" />
                            <ConversationHeader.Content
                                userName="Emily"
                                info="Active 10 mins ago"
                            />
                            <ConversationHeader.Actions>
                                <VoiceCallButton />
                                <VideoCallButton />
                                <InfoButton />
                            </ConversationHeader.Actions>
                        </ConversationHeader> */}
                        <MessageList
                            typingIndicator={<TypingIndicator content="Emily is typing" />}
                        >
                            <MessageSeparator content="Saturday, 30 November 2019" />

                            <Message
                                model={{
                                    message: "Hello my friend",
                                    sentTime: "15 mins ago",
                                    sender: "Emily",
                                    direction: "incoming",
                                    position: "single"
                                }}
                            >
                                <Avatar src={emilyIco} name={"Emily"} />
                            </Message>
                            <Message
                                model={{
                                    message: "Hello my friend",
                                    sentTime: "15 mins ago",
                                    direction: "outgoing",
                                    position: "single"
                                }}
                            />
                            <Message
                                model={{
                                    message: "Hello my friend",
                                    sentTime: "15 mins ago",
                                    sender: "Emily",
                                    direction: "incoming",
                                    position: "first"
                                }}
                                avatarSpacer
                            />
                            <Message
                                model={{
                                    message: "Hello my friend",
                                    sentTime: "15 mins ago",
                                    sender: "Emily",
                                    direction: "incoming",
                                    position: "normal"
                                }}
                            >
                                <Avatar src={emilyIco} name={"Emily"} />
                            </Message>
                            <Message
                                model={{
                                    message: "Hello my friend",
                                    sentTime: "15 mins ago",
                                    direction: "outgoing",
                                    position: "first"
                                }}
                            >
                                <Message.ImageContent
                                    src={require("../../../assets/img/laptop.jpeg")}
                                    alt="Akane avatar"
                                    width={60}
                                    height={60}
                                    style={{objectFit: "contain"}}
                                />
                            </Message>
                            <Message
                                model={{
                                    direction: "outgoing",
                                    type: "custom",
                                    sentTime: "just now",
                                    position: "last"
                                }}
                                // avatarPosition="tr"
                            >
                                {/* <Avatar src={emilyIco} name="Zoe" /> */}
                                <Message.CustomContent>
                                    <div className="d-flex align-items-cetner"
                                    >
                                        <div
                                            style={{
                                                marginRight: 8
                                            }}
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="32"
                                                height="32"
                                                fill="#ffffff"
                                                className="bi bi-file-earmark-fill"
                                                viewBox="0 0 16 16"
                                            >
                                                <path d="M4 0h5.293A1 1 0 0 1 10 .293L13.707 4a1 1 0 0 1 .293.707V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2zm5.5 1.5v2a1 1 0 0 0 1 1h2l-3-3z" />
                                            </svg>
                                            <br />
                                            <span style={{ fontSize: 8 }}>102.02 KB</span>
                                        </div>
                                        <div>
                                            <span style={{ color: "#fff" }}>File name 123.rar</span>
                                        </div>
                                        <button className="btn btn-sm ms-2"
                                            
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="28"
                                                height="28"
                                                fill="#ffffff"
                                                class="bi bi-arrow-down-circle"
                                                viewBox="0 0 16 16"
                                            >
                                                <path
                                                    fill-rule="evenodd"
                                                    d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V4.5z"
                                                />
                                            </svg>
                                        </button>
                                    </div>
                                </Message.CustomContent>
                            </Message>

                            <Message
                                model={{
                                    message: "Hello my friend",
                                    sentTime: "15 mins ago",
                                    sender: "Emily",
                                    direction: "incoming",
                                    position: "first"
                                }}
                                avatarSpacer
                            />
                            <Message
                                model={{
                                    message: "Hello my friend",
                                    sentTime: "15 mins ago",
                                    sender: "Emily",
                                    direction: "incoming",
                                    position: "last"
                                }}
                            >
                                <Avatar src={emilyIco} name={"Emily"} />
                            </Message>

                            <MessageSeparator content="Saturday, 31 November 2019" />

                           
                            <Message
                                model={{
                                    message: "Hello my friend",
                                    sentTime: "15 mins ago",
                                    sender: "Emily",
                                    direction: "incoming",
                                    position: "last"
                                }}
                            >
                                <Avatar src={emilyIco} name={"Emily"} />
                            </Message>
                            <Message
                                model={{
                                    message: "Hello my friend",
                                    sentTime: "15 mins ago",
                                    direction: "outgoing",
                                    position: "first"
                                }}
                            />
                           
                        </MessageList>
                        <MessageInput placeholder="Type message here" />
                    </ChatContainer>
                </MainContainer>
            </div>
        </div >
    );
}