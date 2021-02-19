import React , {useState} from 'react'

import "./chat_area.css"

import chats from "./UserNames.json"

function MainArea(props) {

    var date = new Date()
    var hrs = date.getHours() > 12 ? date.getHours() - 12 : date.getHours();
    hrs = (hrs === 0)? 12 :hrs;
    var am_pm = date.getHours() >= 12 ? "PM" : "AM";
    var min = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
    var time = hrs + ":" + min + " " + am_pm

    var user = props.user

    var user_name = chats.filter((data) => {
        if(data.name.includes(user)) {
            return data
        }
    })

    const[val,setValue] = useState("");

    // const[messages,setMessages] = useState(user_name[0].messages);

    const messages = user_name[0].messages;

    // console.log(messages,user_name[0].messages)

    function onHandleKey(event) {
        if(event.keyCode===13 && val!= "") {
            messages.push({"mess": val , "time": time , "sent": true});
            setValue("");
        }
    }

    function onSubmit(event) {
        if(val!="") {
            messages.push({"mess": val , "time": time , "sent": true});
            setValue("");
        }
    }

    return (
        <div>

            <div className="chat_section">
                {messages.map((data,key) =>
                    <div key={key}>
                        {data.sent===false && 
                            <p className="msg_content">{data.mess}
                                <span className="msg_time adjust">{data.time}</span>
                            </p>
                        }
                        {data.sent===true &&
                            <p className="msg_sent">{data.mess}
                                <span className="msg_time">{data.time}</span>
                                <span className="checkmark_one"></span>
                                <span className="checkmark_two"></span>
                            </p>
                        }
                    </div>
                )}
            </div>


            <div style={{display: "flex" , flexDirection: "row"}}>
                <div className="message_box">

                    <img 
                        src="./smiley.png" 
                        alt="smiley_icon" 
                        className="smiley_img"
                    />

                    <input 
                        type="text"
                        placeholder="Type a message" 
                        className="type_box" 
                        onChange={e => setValue(e.target.value)}
                        value={val}
                        onKeyUp={onHandleKey}
                    />

                    <img 
                        src="./paperclip.png" 
                        alt="attachment_icon" 
                        className="clip_img"
                    />

                    <img 
                        src="./camera.png" 
                        alt="camera_icon" 
                        className="camera_img" 
                    />

                </div>

                <div className="mic_send">
                    {val==="" && <img 
                        src="./mic.png" 
                        alt="mic_icon"
                        className="mic_img"
                    />}
                    {val!="" && <img 
                        src="./send_btn.png" 
                        alt="send_icon"
                        className="send_img"
                        onClick={onSubmit}
                    />}
                </div>

            </div>
        </div>
    )
}

export default MainArea
