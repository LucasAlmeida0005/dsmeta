import icon from '../../assets/img/notification-icon.svg'
// temos q importar a imagem pq normalmente não vai
import './styles.css'
function NotificationButton() {
  return(
    <>
      <div className="dsmeta-red-btn">
          <img src={icon} alt="Notificar" />
      </div>
    </>
  )
}

export default NotificationButton
