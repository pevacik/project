import { useContext } from "react"
import { PopupContext } from "../../context/PopupContext"
import { PopupHelloContext } from "../../context/PopupHelloContext"


function NotificationList() {

    const { date, setDate } = useContext(PopupContext)
    const { notification, setNotification } = useContext(PopupHelloContext)

    return (
        <div className="Popup">
            <div className="poupBG"></div>
            <div className="popup_content">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem officiis provident, explicabo quae consequuntur rerum recusandae quos molestias nam. Et rem sapiente at aspernatur exercitationem, quidem nesciunt laborum officia ea.</p>
                <div className="popup_close">x</div>
            </div>
        </div>
    )
}

export default NotificationList

