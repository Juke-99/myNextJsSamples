import Mailbox from "../components/MailBox";

class messages extends React.Component {
  render() {
    const message = ['React', 'Angular', 'Vue']
    return (
      <div><Mailbox name="yam" unreadMessages={message}></Mailbox></div>
    )
  }
}

export default messages